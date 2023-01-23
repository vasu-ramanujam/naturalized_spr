import SelfPacedReadingPlugin from '@jspsych-contrib/plugin-self-paced-reading';

let jsPsych = initJsPsych({
    exclusions: {
        min_width : MIN_WIDTH,
        min_height : MIN_HEIGHT
    }
});

const KEY_CODE_SPACE = ' ';
const G_QUESTION_CHOICES = [FALSE_BUTTON_TEXT, TRUE_BUTTON_TEXT];


let welcome_screen = {
    type : jsPsychHtmlKeyboardResponse,
    stimulus : WELCOME_INSTRUCTION,
    choices : [KEY_CODE_SPACE],
    response_ends_trial : true,
    on_finish: function (data) {
        data.rt = Math.round(data.rt);
    }
};

let instruction_screen_practice = {
    type : jsPsychHtmlKeyboardResponse,
    stimulus : PRE_PRACTICE_INSTRUCTION,
    choices : [KEY_CODE_SPACE],
    response_ends_trial : true,
    on_finish: function (data) {
        data.rt = Math.round(data.rt);
    }
};

const get_size = {
    type: jsPsychVirtualChinrest,
    blindspot_reps: 3,
    resize_units: "cm",
    pixels_per_unit: 50
};

var resized_stimulus = {
    type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>If the measurements were done correctly, the square below should be 10 cm x 10 cm.</p>
    <div style="background-color: black; width: 500px; height: 500px; margin: 20px auto;"></div>
  `,
  choices: ['Continue']
};

var mw_prac = {
    type: 'moving-window',
    words: 'The dog chased the car'
    //stimulus: 'The dog chased the car'
}


let fixcross = {
    type : sprMovingWindow,
    stimulus : '+',
    choices : FIX_CHOICES,
    trial_duration : FIX_DUR,
    data : {
        id : jsPsych.timelineVariable('id'),
        item_type : 'FIX_CROSS',
        uil_save : false
    }
};

let present_text = {
    type : sprMovingWindow,
    stimulus : jsPsych.timelineVariable('stimulus'),
post_trial_gap : ISI,
    grouping_string : GROUPING_STRING,
    data : {
        id : jsPsych.timelineVariable('id'),
        item_type : jsPsych.timelineVariable('item_type'),
        uil_save : true
    }
}

let question = {
    type : jsPsychHtmlButtonResponse,
    stimulus : jsPsych.timelineVariable('question'),
    choices : G_QUESTION_CHOICES,
    data : {
        id : jsPsych.timelineVariable('id'),
        item_type : ()  => 'Q' + jsPsych.timelineVariable('item_type'),
        expected_answer : jsPsych.timelineVariable('qanswer'),
        uil_save : true
    },
    on_finish: function (data) {
        let choice = G_QUESTION_CHOICES[data.button_pressed];
        data.answer = choice;
        data.correct = choice === data.expected_answer;
        data.integer_correct = data.correct ? 1 : 0;
        data.rt = Math.round(data.rt);
    }
};

let maybe_question = {
    timeline: [ question ],
    conditional_function: function() {
        let q = jsPsych.timelineVariable('question');
        return typeof(q) !== 'undefined' && q.length > 0;
    }
};

let end_practice_screen = {
    type : jsPsychHtmlKeyboardResponse,
    stimulus : PRE_TEST_INSTRUCTION,
    choices : [KEY_CODE_SPACE],
    response_ends_trial : true,
    on_finish: function (data) {
        data.rt = Math.round(data.rt);
    }
};

let end_experiment = {
    type : jsPsychHtmlKeyboardResponse,
    stimulus : POST_TEST_INSTRUCTION,
    choices : [],
    on_load: function() {
        if (consent_given) {
            uil.saveData();
        }
        else {
            document.body.innerHTML = FINISHED_NO_CONSENT;
        }
    }
}

function getTimeline(stimuli) {
    //////////////// timeline /////////////////////////////////
    let timeline = [];

    // Welcome the participant and guide them through the
    // consent forms and survey.
    timeline.push(welcome_screen);

    // Obtain informed consent.
    timeline.push(consent_procedure);

    // add survey
    timeline.push(survey_procedure);

    //virtual chinrest
    //timeline.push(mw_prac);
    timeline.push(get_size);
    timeline.push(resized_stimulus);



    // Add the different parts of the experiment to the timeline
    timeline.push(instruction_screen_practice);

    let practice = {
        timeline: [
            fixcross,
            present_text,
            maybe_question
        ],
        timeline_variables: PRACTICE_ITEMS
    };

    timeline.push(practice);
    timeline.push(end_practice_screen);

    let test = {
        timeline: [
            fixcross,
            present_text,
            maybe_question
        ],
        timeline_variables: stimuli.table
    }

    timeline.push(test);
    timeline.push(end_experiment);
    return timeline;
}


function main() {
    // Make sure you have updated your key in globals.js
    uil.setAccessKey(ACCESS_KEY);
    uil.stopIfExperimentClosed();

    // Option 1: client side randomization:
    let stimuli = pickRandomList();
    kickOffExperiment(stimuli, getTimeline(stimuli));

    // Option 2: server side balancing:
    // Make sure you have matched your groups on the dataserver with the
    // lists in stimuli.js..
    // This experiment uses groups/lists list1, and list2 by default (see
    // stimuli.js).
    // Hence, unless you change lists here, you should created matching
    // groups there.
    // uil.session.start(ACCESS_KEY, (group_name) => {
    //     let stimuli = findList(group_name);
    //     kickOffExperiment(stimuli, getTimeline(stimuli));
    // });
}



// this function will eventually run the jsPsych timeline
function kickOffExperiment(stimuli, timeline) {

    let subject_id = uil.session.isActive() ?
        uil.session.subjectId() : jsPsych.randomization.randomID(8);
    let test_items = stimuli.table;
    let list_name = stimuli.list_name;

    if (PSEUDO_RANDOMIZE) {
        let shuffled = uil.randomization.randomizeStimuli(
            test_items,
            max_same_type=MAX_SUCCEEDING_ITEMS_OF_TYPE
        );
        if (shuffled !== null)
            test_items = shuffled;
        else
            console.error('Unable to shuffle stimuli according constraints.')
    }

    // data one would like to add to __all__ trials, according to:
    // https://www.jspsych.org/overview/data/
    jsPsych.data.addProperties (
        {
            subject : subject_id,
            list : list_name,
        }
    );

    // Start jsPsych when running on a Desktop or Laptop style pc.
    uil.browser.rejectMobileOrTablet();
    jsPsych.run(timeline);
}

/**
 * This function will pick a random list from the TEST_ITEMS array.
 *
 * Returns an object with a list and a table, the list will always indicate
 * which list has been chosen for the participant.
 *
 * @returns {object} object with list_name and table fields
 */
function pickRandomList() {
    let range = function (n) {
        let empty_array = [];
        let i;
        for (i = 0; i < n; i++) {
            empty_array.push(i);
        }
        return empty_array;
    }
    let num_lists = TEST_ITEMS.length;
    var shuffled_range = jsPsych.randomization.repeat(range(num_lists), 1)
    var retlist = TEST_ITEMS[shuffled_range[0]];
    return retlist
}

function findList(name) {
    let list = TEST_ITEMS.find((entry) => entry.list_name === name);
    if (!list) {
        let found = TEST_ITEMS.map((entry) => `"${entry.list_name}"`).join(', ');
        console.error(
            `List not found "${name}".\n` +
                'This name was configured on the UiL datastore server.\n' +
                `The following lists exist in stimuli.js: \n${found}`)
    }
    return list;
}
