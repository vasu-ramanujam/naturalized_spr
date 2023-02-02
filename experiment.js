

var jsPsych = initJsPsych();
var timeline = [];


//1. welcome screen
const welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'Welcome to the experiment! Press any key to begin.'
}
timeline.push(welcome);
var enter_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
  }
timeline.push(enter_fullscreen);



//var div_height_deg;
//2. virtual chinrest
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

/*
    ,on_finish: function(data){
        div_width_px = data.item_width_px;
        //div_height_deg = data.item_height_deg;
        var computed_font_size = window.getComputedStyle(document.getElementByTagName("div")).width;
        alert(computed_font_size);
        
*/



//CALCULATE SIZE HERE


//3. instructions
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


var story_one_splits = split_function(500, story_one_total);
var story_one = [];
for (let i = 0; i < story_one_splits.length; i++){
    story_one.push({part: story_one_splits[i]});
}

/*

var story_one = [
    { part: story_one_one },
    { part: story_one_two}
];


*/

var display_text = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
        var stim = '<p class="story_text">' + jsPsych.timelineVariable("part") + '</p>';
        return stim;
    }
    //jsPsych.timelineVariable("part")
    //,css_classes: ['story_display']
}

var questions_one = [
    {question: "This is question one. a or b?" },
    {question: "This is question two. a or b?" },
];

var ask_questions_one = {
    type: jsPsychHtmlButtonResponse,
    choices: ['a', 'b'],
    stimulus: jsPsych.timelineVariable("question")
}

var display_story_one = {
    timeline: [display_text],
    timeline_variables: story_one
}
timeline.push(display_story_one);

var display_one_questions = {
    timeline: [ask_questions_one],
    timeline_variables: questions_one
}
timeline.push(display_one_questions);


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
