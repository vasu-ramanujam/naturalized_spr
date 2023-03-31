
var story_text = `As much as seventy years ago, in the city of Boston, \n 
there lived a small girl who had the naughty habit of running away.\n
On a certain April morning, almost as soon as her mother finished buttoning her dress,\n
Louisa May Alcott slipped out of the house and up the street as fast as her feet could carry her.\n
Louisa crept through a narrow alley and crossed several streets. 
It was a beautiful day, and she did not care so very much just where she went so long as she was having an adventure, all by herself. 
Suddenly she came upon some children who said they were going to a nice, tall ash heap to play. 
They asked her to join them. 
Louisa thought they were fine playmates, for when she grew hungry they shared some cold potatoes and bread crusts with her. 
She would not have thought this much of a lunch in her mother's dining-room, but for an outdoor picnic it did very well. 
When she tired of the ash heap she bade the children good-by, thanked them for their kindness, and hop-skipped to the Common, where she must have wandered about for hours, because, all of a sudden, it began to grow dark. 
Then she wanted to get home. 
She wanted her doll, her kitty, and her mother! 
It frightened her when she could not find any street that looked natural. She was hungry and tired, too. 
She threw herself down on some door-steps to rest and to watch the lamplighter, for you must remember this was long before there was any gas or electricity in Boston. 
At this moment a big dog came along. 
He kissed her face and hands and then sat down beside her with a sober look in his eyes, as if he were thinking: "I guess, Little Girl, you need some one to take care of you!" 
Poor tired Louisa leaned against his neck and was fast asleep in no time. 
The dog kept very still. He did not want to wake her. 
Pretty soon the town crier went by. 
He was ringing a bell and reading in a loud voice, from a paper in his hand, the description of a lost child. 
You see, Louisa's father and mother had missed her early in the forenoon and had looked for her in every place they could think of. 
Each hour they grew more worried, and at dusk they decided to hire this man to search the city. 
When the runaway woke up and heard what the man was shouting—"Lost—Lost—A little girl, six years old, in a pink frock, white hat, and new, green shoes"—she called out in the darkness: "Why—dat's ME!" 
The town crier took Louisa by the hand and led her home, where you may be sure she was welcomed with joy. 
Mr. and Mrs. Alcott, from first to last, had had a good many frights about this flyaway Louisa. 
Once when she was only two years old they were traveling with her on a steamboat, and she darted away, in some moment when no one was noticing her, and crawled into the engine-room to watch the machinery. 
Of course her clothes were all grease and dirt, and she might have been caught in the machinery and hurt. 
You won't be surprised to know that the next day after this last affair Louisa's parents made sure that she did not leave the house. 
Indeed, to be entirely certain of her where-abouts, they tied her to the leg of a big sofa for a whole day! 
Except for this one fault, Louisa was a good child, so she felt much ashamed that she had caused her mother, whom she loved dearly, so much worry. 
As she sat there, tied to the sofa, she made up her mind that she would never frighten her so again. 
No—she would cure herself of the running-away habit! 
After that day, whenever she felt the least desire to slip out of the house without asking permission, she would hurry to her own little room and shut the door tight. 
To keep her mind from bad plans she would shut her eyes and make up stories—think them all out, herself, you know. 
Then, when some of them seemed pretty good, she would write them down so that she would not forget them. 
By and by she found she liked making stories better than anything she had ever done in her life. 
Her mother sometimes wondered why Louisa grew so fond of staying in her little chamber at the head of the stairs, all of a sudden, but was pleased that the runaway child had changed into such a quiet, like-to-stay-at-home girl. 
It was a long time before Louisa dared to mention the stories and rhymes she had hidden in her desk but finally she told her mother about them, and when Mrs. Alcott had read them, she advised her to keep on writing. 
Louisa did so and became one of the best American story-tellers. 
She wrote a number of books, and if you begin with Lulu's Library, you will want to read Little Men and Little Women and all the books that dear Louisa Alcott ever wrote. 
At first Louisa was paid but small sums for her writings, and as the Alcott family were poor, she taught school, did sewing, took care of children, or worked at anything, always with a merry smile, so long as it provided comforts for those she loved. 
When the Civil War broke out, she was anxious to do something to help, so she went into one of the Union hospitals as a nurse. 
She worked so hard that she grew very ill, and her father had to go after her and bring her home. 
One of her books tells about her life in the hospital. 
It was soon after her return home that her books began to sell so well that she found herself, for the first time in her life, with a great deal of money. 
There was enough to buy luxuries for the Alcott family—there was enough for her to travel.
No doubt she got more happiness in traveling than some people, for she found boys and girls in England, France, and Germany reading the very books she herself, Louisa May Alcott, had written. 
Then, too, at the age of fifty, she enjoyed venturing into new places just as well as she did the morning she sallied forth to Boston Common in her new green shoes!
`;

var questions = [
  {q: "In which city did the girl live in?",
    a0: "Boston",
    a1: "Chicago",
    cr: '0',
    num: '1'},
  {q: "Who buttoned the girls’ dress?",
    a0: "the girl’s mother",
    a1: "the maid",
    cr: '0',
    num: '2'},
  {q: "What did the girl’s playmates shared with her when she was hungry?",
   a0: "potatoes and bread crusts",
   a1: "corns and bread crusts",
   cr: '0',
   num: '3'},
  {q: "What came to the girl when she sat on some door-steps?",
    a0: "a big dog",
    a1: "a small bird",
    cr: '0',
    num: '4'},
  {q: "What did the town crier had in his hand?",
    a0: "a paper",
    a1: "a lamp",
    cr: '0',
    num: '5'},
  {q: "When the girl’s parents hire the town crier to find her?",
    a0: "at dusk",
    a1: "around dawn",
    cr: '0',
    num: '6'},
  {q: "What was the description of the girl by the town crier?",
    a0: "in a pink frock",
    a1: "in a yellow frock",
    cr: '0',
    num: '7'},
  {q: "Why did the girl crawled into the engine-room when she was two years old?",
    a0: "to watch the machinery",
    a1: "to play with her doll",
    cr: '0',
    num: '8'},
  {q: "How did the girl feel about making her mother worry?",
    a0: "ashamed",
    a1: "proud",
    cr: '0',
    num: '9'},
  {q: "What did Mrs. Alcott do after reading the girl’s stories?",
    a0: "advised to keep writing",
    a1: "advised to stop writing",
    cr: '0',
    num: '10'},
  {q: "What did the girl do as she was anxious to do something to help during the Civil War?",
    a0: "went to hospital as a nurse",
    a1: "went to hospital as a teacher",
    cr: '0',
    num: '11'},
  {q: "When did her book begin to sell well?",
    a0: "after she returned to home",
    a1: "before she returned to home",
    cr: '0',
    num: '12'}
  ]