var story3_split = [`Once upon a time the birds took it into their heads that\n
they would like a master, and that one of their number must\n
be chosen king. A meeting of all the birds was called and\n
though they understood the birds who were from the most\n
distant lands would be unable to come, many birds came from\n
far away meadows and woods. The eagle, who already thought\n
himself the de facto king, arrived fashionably late. It was\n
a hawk who was most excited about the meeting, because he\n
was the dark horse for king. The small fry came too, and\n
the robin, the bluebird, the owl, the lark, and the\n`,
`sparrow, who had only a chance in a million to be king,\n
were all present at the meeting. The cuckoo who was almost\n
not invited because his call so annoyed the other birds,\n
came too. It was the very little bird who had no name at\n
all, however that would end up overturning the balance of\n
power among the birds. That there would be great confusion\n
and noise among the birds at the meeting was to be expected\n
given the sheer numbers of birds that have gathered. There\n
was piping, hissing, and clacking, but finally it was\n
decided that the bird that could fly the highest should be\n`,
`king. The little bird lay low near the eagle at first, but\n
the eagle did not notice the bird hopping onto his back\n
right as the competition was about to commence. Into the\n
air in a great flock all the birds flew when the signal was\n
given. The air was full of dust, and it seemed as if a\n
black cloud were floating over the field. You could hear\n
the birds chirping and flapping from fields that were miles\n
away. The little birds that soon grew tired fell back\n
quickly to earth. The fact that the larger ones held out\n
longer, and flew higher and higher, but the eagle flew\n`,
`highest of any, surprised no one. Could anyone stop the\n
eagle that seemed to be flying straight into the sun? The\n
other birds gave out one by one and when the eagle saw this\n
he thought, "What is the use of flying any higher? This\n
victory is in the bag and I am king!" Then the birds below\n
called with one accord, "Come back, come back! It is you\n
who must be our king because no one can fly as high as\n
you." Except me! cried a shrill, shrill voice, and out of\n
the blue the little bird without a name rose from the\n
eagle's back, where he had lain hidden in the feathers. His\n`,
`guile was the ace up his sleeve and he laughed to himself\n
at how easy it had been to outwit the other birds. Higher\n
and higher he mounted until he was lost to sight, and then\n
folding his wings together, he sank to earth crying\n
shrilly, "I am king! I am king!" The eagle tricked by the\n
little bird had not sensed the bird in his feathers and so\n
had not at all expected the bird to come flying out like\n
that. The birds back on earth were all up in arms. You, and\n
not the eagle, our king!? the birds cried, fuming with\n
anger. You have done this by breaking every rule in the\n`,
`book, so we will not have you, who are simply tricky and\n
cunning, to reign over us. The bird without a name then\n
decided to clear the air and said, “Then let everyone\n
start with a clean slate and perform a new challenging\n
task. Then we can decide who should be the real king.”\n
Then the birds gathered together again and decided the case\n
would be resolved by making a new condition, which was that\n
he should be king who could go the deepest into the earth.\n
So the little bird who the other birds despised was now\n
back to square one. Confident, he remained, however, that\n`,
`if he played his cards right, he could be king. How the\n
goose wallowed in the sand, and the duck strove to dig a\n
hole for the new task! All the other birds tried to hide\n
themselves in the ground, too, until they were practically\n
blue in the face. The nameless little bird that was as bold\n
as brass found a pitch dark mouse's hole, and creeping in\n
cried, "I am king! I am king!" but it was of no avail. You,\n
our king!? all the remaining birds who the littlest bird\n
had outwitted cried again, even more angrily than before.\n
Do you think we would reward your cunning in this way? No,\n`,
`no! You shall stay in the earth till you die of hunger! So\n
they shut up the little bird in the mouse's hole that the\n
mouse gave up most unwillingly, and bade the owl watch him\n
carefully night and day. Then all the birds went home to\n
bed, for they were very tired, but the owl assigned by the\n
birds to stand guard found his job was lonely and wearisome\n
because he was just sitting alone staring at the mouse's\n
hole. I can close one eye and watch with the other, he\n
thought. So he closed one eye and stared steadfastly with\n
the other, but before he knew it he forgot to keep that one\n`,
`open, and both eyes were fast asleep. Then the little bird\n
guarded by the owl peeped out, and when he saw the owl's\n
two eyes tight shut, he slipped from the hole and flew\n
away. He wanted to shout, “I am king” so that the owl\n
could hear him as he flew, but thought better of it. From\n
this time on the owl fooled by the little bird has not\n
dared to show himself by day for fear the birds should beat\n
the living daylights out of him. He flies about only at\n
night-time, hating and pursuing not the bird, but the mouse\n
for having made the hole into which the little bird crept.\n`,
`And the little bird also keeps out of sight, for he fears\n
that the other birds should punish him for his cunning. The\n
rejection by the other birds was a bitter pill to swallow\n
for the nameless bird the owl had let slip away. He hides\n
in the hedges, and when he thinks himself quite safe, he\n
sings out, "I am king! I am king!" And the other birds in\n
mockery call out, "Yes, yes, the hedge-king! the\n
hedge-king!"`];



var story3_questions = [
  {q: "Which birds were expected not to come to the meeting?",
    a0: "the birds who were least likely to be selected as a king",
    a1: "the birds who were from the most distant",
    cr: '1'},
  {q: "Which bird thought himself the de facto king?",
    a0: "the hawk",
    a1: "the eagle",
    cr: '1'},
  {q: "Which bird's call was annoying to the other birds?",
   a0: "the crow",
   a1: "the cuckoo",
   cr: '1'},
  {q: "During the first competition, what was the air full of?",
    a0: "dust",
    a1: "sound",
    cr: '0'},
  {q: "How did the little bird manage to fly higher than the eagle?",
    a0: "flew on eagle's back",
    a1: "flew right below the eagle",
    cr: '0'},
  {q: "Which bird suggested doing another competition?",
    a0: "the little bird",
    a1: "the eagle",
    cr: '0'},
  {q: "What was the second competition about?",
    a0: "digging the deepest into the earth",
    a1: "flying the highest",
    cr: '1'},
  {q: " How did the little bird feel about the second competition?",
    a0: "nervous",
    a1: "confident",
    cr: '1'},
  {q: "Who was put on guard to watch the little bird after he was punished for his trickery?",
    a0: "an owl",
    a1: "a mouse",
    cr: '0'},
  {q: "After having a bird on guard to watch the little bird, what did the other birds do?",
    a0: "Went to bed",
    a1: "Went to have a meal",
    cr: '0'},
  {q: "Who was the owl angry at in the end?",
    a0: "a mouse",
    a1: "the bird",
    cr: '0'},
  {q: "What was the reason for the little bird staying out of sight?",
    a0: "fear of the punishment from the mouse",
    a1: "fear of the punishment from the other birds",
    cr: '1'}
  ]
