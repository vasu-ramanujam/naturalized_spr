

var jsPsych = initJsPsych();
var timeline = [];

//INTRODUCTION AND FULLSCREEN
const welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'Welcome to the experiment! Press any key to begin.'
}
timeline.push(welcome);

var enter_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
  }
//timeline.push(enter_fullscreen);

//VIRTUAL CHINREST: RESIZE DATA TO PARTICIPANT SCREEN SIZES AND DISTANCES

const get_size = {
    type: jsPsychVirtualChinrest,
    blindspot_reps: 3,
    resize_units: "cm",
    pixels_per_unit: 50,
};
timeline.push(get_size);
var resized_stimulus = {
    type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>If the measurements were done correctly, the square below should be 10 cm x 10 cm.</p>
    <div style="background-color: black; width: 500px; height: 500px; margin: 20px auto;"></div>
  `,
  choices: ['Continue']
};
timeline.push(resized_stimulus);

//CALCULATE amount of characters to display on screen
//INSTRUCTIONS
const instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <p>This experiment requires three-time visits. </p>
<p>On each visit, you will read four stories, each of which is followed by 12 comprehension questions.</p>
<p>Completion of comprehension questions with at least 75% accuracy will result in a reward of $3.</p><br>

<p>This will be a self-paced reading task. You will see each set of sentences on the screen filled with dashes. Press SPACE to advance to the next word.</p>
<p> Press any key to begin</p>
    `
}
timeline.push(instructions);



//timeline variables of stories. works as hardcoded string

//4. display story one
function append_and_return_ros (splits, total_string, num_chars) {
    var substr = total_string.substring(0, num_chars);
    var cut_index;
    if (substr.length < num_chars || substr.lastIndexOf(" ") == -1){
        cut_index = substr.length;
    } else {
        cut_index = substr.lastIndexOf(" ") + 1;
    }
    var substr_worded = substr.slice(0, cut_index);
    splits.push(substr_worded);
    return total_string.slice(substr_worded.length);
}

function split_function (char_space, story) {
    var story_splits = [];
    var remaining_bit = [story];
    while (!(remaining_bit[0] === "")) {
        remaining_bit.push(append_and_return_ros(story_splits, remaining_bit.pop(), char_space));
    }
	return story_splits;
}

////var screen_width = window.innerWidth;
//var p_tag = document.getElementsByTagName("p");
//var p_em_pixels = getEmPixels(p_tag);
//var p_em_pixels = 20;

//var num_chars = .8*screen_width * 10 / p_em_pixels ;
var num_chars = 500;


//get array of all split story variables
var stories_total = [story_one_total, story_two_total, story_three_total, story_four_total, story_five_total, story_six_total, story_seven_total, story_eight_total, story_nine_total, story_ten_total, story_eleven_total, story_twelve_total];
var stories = [];

for (let st_idx = 0; st_idx < stories_total.length; st_idx++){
    var story_split = split_function(num_chars, stories_total[st_idx]);
    var story = [];
    for (let i = 0; i < story_split.length; i++){
        story.push({part: story_split[i]});
    }
    stories.push(story);
}


//general timeline variable trial
var display_text = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
        var stim = '<p class="story_text">' + jsPsych.timelineVariable("part") + '</p>';
        return stim;
    }
}
var ask_questions = {
    type: jsPsychHtmlButtonResponse,
    choices: [jsPsych.timelineVariable("choice_a"), jsPsych.timelineVariable("choice_b")],
    stimulus: jsPsych.timelineVariable("question")
}


var questions_one = [
    {question: "What is depicted on the Crest of the City of Bradford?" , choice_a:"boar's head", choice_b: "a spinning jenny"},
    {question: "This is question two. ", choice_a:"third choice", choice_b: "fourth choice" },
    {question: "This is question three. ", choice_a:"third choice", choice_b: "fourth choice" },
    {question: "This is question two. ", choice_a:"third choice", choice_b: "fourth choice" },
    {question: "This is question four. ", choice_a:"third choice", choice_b: "fourth choice" },
    {question: "This is question five. ", choice_a:"third choice", choice_b: "fourth choice" },
    {question: "This is question six. ", choice_a:"third choice", choice_b: "fourth choice" },
    {question: "This is question seven. ", choice_a:"third choice", choice_b: "fourth choice" },
    {question: "This is question eight. ", choice_a:"third choice", choice_b: "fourth choice" },
    {question: "This is question nine. ", choice_a:"third choice", choice_b: "fourth choice" },
    {question: "This is question ten. ", choice_a:"third choice", choice_b: "fourth choice" }
];

var questions_two = [
    {question: "story 2 q1", choice_a:"third choice", choice_b: "fourth choice" }
];

//create array of questions (node.js's readline()
var questions = [questions_one, questions_two];


var display_story_one = {
    timeline: [display_text]
    ,timeline_variables: stories[0]
}

var display_one_questions = {
    timeline: [ask_questions]
    ,timeline_variables: questions[0]
}

var display_story_two = {
    timeline: [display_text]
    ,timeline_variables: stories[1]
}

var display_two_questions = {
    timeline: [ask_questions]
    ,timeline_variables: questions[1]
}

var group_one_procedure = {
    timeline: [display_story_one, display_one_questions, display_story_two, display_two_questions],
}

timeline.push(group_one_procedure);
//END STORY ONE




//questions




//moving window
/*
var present_text = {
    type : sprMovingWindow,
    stimulus : "This is a sample stimulus",
    grouping_string : null,
}
timeline.push(present_text);

*/


/* NOT WORKING (idk y)
var trial_window = {
    type: "moving-window",
    words: "The dog chased the car"

}
timeline.push(trial_window);
*/


var end = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'The trial has ended. '
}
timeline.push(end);



jsPsych.run(timeline);
