

var jsPsych = initJsPsych();
var timeline = [];



//1. welcome screen
const welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'Welcome to the experiment! Press any key to begin.'
}
timeline.push(welcome);



//2. virtual chinrest
const get_size = {
    type: jsPsychVirtualChinrest,
    blindspot_reps: 3,
    resize_units: "cm",
    pixels_per_unit: 50
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
var story_one = [
    { part: story_one_one },
    { part: story_one_two},
    { part: story_one_three},
    { part: story_one_four},
    { part: story_one_five},
    { part: story_one_six},
    { part: story_one_seven}
];

var display_text = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: jsPsych.timelineVariable("part")
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
