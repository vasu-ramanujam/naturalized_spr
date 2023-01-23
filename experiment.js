/*
INSTRUCTIONS FOR RUNNING

- go to correct directory
$ open experiment.html
*/

//--- hardcode stories (not as text files)
var story_one_text = `
<p>If you were to journey to the North of England, you would come to a valley that is surrounded by moors as high as mountains.
It is in this valley where you would find the city of Bradford, where once a thousand spinning-jennies that hummed and clattered spun wool into money for the long-bearded mill owners. 
That all mill owners were generally busy as beavers and quite pleased with themselves for being so successful and well off was known to the residents of Bradford, and if you were to go into the city to visit the stately City Hall, you would see there the Crest of the City of Bradford, which those same mill-owners created to celebrate their achievements. 
It shows a sinister looking boar's head sitting on top of a well which seems puzzling at first, but the reason for this symbol is a matter of legend. 
There was once, legend has it, a fearsome boar, which lived in a wood located just outside the manor of Bradford.
A source of great trouble to the local folk the boar was, bringing terror to the peaceful flocks and ravaging the countryside around. 
Even worse, however, the boar most liked to go to the well that was in the wood and drink its fresh water, so that the people of Bradford had second thoughts about visiting the well. 
</p>
`;


//-------

var jsPsych = initJsPsych();
var timeline = [];

const welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'Welcome to the experiment! Press any key to begin.'
}
timeline.push(welcome);



//virtual chinrest
/*
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
*/

//instructions
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

//rn display stories as html-keyboard-response. later, add it in as SPR moving window.
/*
const story_one_as_html = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: story_one.txt
}
timeline.push(story_one_as_html);
*/

//timeline variables of stories. works as hardcoded string
/*
var stories = [
    { story: "story_one.txt" }
];

var display = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: jsPsych.timelineVariable("story")
}

var display_stories = {
    timeline: [display],
    timeline_variables: stories
}
timeline.push(display_stories);
*/

//file -> input
//create arr, create func to read input
/*

var story_one_arr = []
var read_input_func = function(){
    const f = require('fs');
    const readline = require('readline');
    var user_file = './story_one.txt';
    var r = readline.createInterface({
        input: f.createReadStream(user_file)
    });
    r.on('line', function (text){
        story_one_arr.push(text);
    })    
}
*/

//trial to read input from read_input_func
/*
var read_input_trial = {
    type: jsPsychCallFunction,
    func: read_input_func
}
timeline.push(read_input_trial)
*/

//syncReadFile to read file
/*
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
  
    const arr = contents.split(/\r?\n/);
  
    console.log(arr); 
  
    return arr;
}
*/



//array of words 
/*
//var story_one_arr = syncReadFile('story_one.txt');
var story_one_arr = ["This is the first sentence. Story one part one.", "This is the second sentence. Story one part two.", "This is the third sentence. Story one part three.", story_one_text];
var counter = 0;

//turn array -> variables

var some_trial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
        return "<p>" + story_one_arr[counter++] + "</p>";
    }
}

for (let i = 0; i < story_one_arr.length; i++){
    timeline.push(some_trial);
}
*/





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
