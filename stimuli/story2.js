
var story2_split = [`A clear and joyous day it was and out on the wide, open sea\n
thousands upon thousands of sparkling water-drops excited\n
by getting to play in the ocean danced all around. One of\n
these was a merry little fellow named Aqua who danced on\n
the silver backs of the fishes as they plunged up and down\n
in the waves, and, no matter how high he sprung, he always\n
came down again into his mother's lap. His mother, you\n
know, was the Ocean, and very beautiful she looked that\n
summer day in her dark blue dress and white ruffles. By and\n
by, the happy water-drop tired of his play, and looking up\n`,
`to the clear sky above him, thought he would like to have a\n
sail on one of the white, marshmallow-like clouds, instead\n
of spending his whole life in the ocean. Of the sky, little\n
Aqua had always been afraid, but he decided to finally face\n
his demons and suggested a solution involving the Sun\n
carrying him up to the sky would be ideal. The Sun\n
understood Aqua’s request came from his heart, so he\n
acquiesced and also took ever so many other drops, so that\n
Aqua might not be lonesome on the way. It was only the sun\n
that knew this, however, for all the other drops had been\n`,
`changed into fine mist or vapor and Aqua could not see\n
them. Do you know what vapor is? If you breathe into the\n
air, when it is cold enough, you will see it coming out of\n
your mouth thick and fast like steam. When the vapor is\n
quite near the earth, we call it "fog." Into vapor the\n
water drops that danced in the ocean had been changed\n
because in their own shape they were too heavy for the\n
sunbeams that the sun let out to carry. Higher and higher\n
they sailed, and though it was grand, Aqua and his friends\n
were like fish out of water, so they grew quite dizzy. They\n`,
`enjoyed looking down on the world below, while the wind\n
scattered them across the four corners of the earth, but\n
after a while it grew nearly time for the Sun to go to bed.\n
He became very red in the face, and began to sink lower and\n
lower, until suddenly he went clear out of sight! Poor\n
little Aqua frightened by the impending cold and darkness\n
wished he could sleep not in the sky, but somewhere closer\n
to earth. Then, Aqua heard the wind blow and conjectured\n
that maybe the wind could take him back down to the ocean.\n
Indeed, the wind took pity on him and fanned him, together\n`,
`with all of his brothers and sisters, into a heavy gray\n
cloud, after which he blew them apart and told them to\n
hurry down, fast and furious to the earth so they could\n
have a fighting chance of reaching the ocean. Down they\n
went, rolling over each other until with a patter and\n
clatter and spatter they touched the ground, and all the\n
people that the raindrops fell on cried, "It’s raining",\n
and took out their umbrellas. Some of the drops that were\n
the most fortunate, including Aqua, fell on a mountainside,\n
and down the rocky cliff they ran. Together they plunged\n`,
`into a mountain brook, which came foaming and dashing\n
along, leaping over rocks and rushing down the hillside,\n
until in the valley below they heard the strangest\n
clattering noise. The little water-drops were then able to\n
make out a flourmill that was standing on the bank. Inside\n
the mill the water-drops saw two great stones, which the\n
big wheel kept whizzing round and round. The stones\n
smoothed by the spinning, were busy grinding the wheat into\n
flour and the corn into golden meal. But what giant do you\n
suppose it was who could turn and swing that tremendous\n`,
`wheel? No giant at all. It was just our tiny little water\n
drops, who sprang on it by hundreds and thousands, and\n
whirled it over and over. It was lucky for the water-drops\n
that the brook where they were swimming next emptied into a\n
beautiful pond where ducks and geese were living\n
peacefully. Aqua liked to play hide and seek in this pond,\n
and it was his brother water drop who he fooled by swimming\n
to a big pool of water and pretending to hide there, but\n
then sneaking under a rock into an obscured little puddle.\n
His brother had blatantly peaked and even followed Aqua as\n`,
`he entered the big pool of water, so when he searched there\n
and could not find him, he was extremely surprised and gave\n
up. Aqua liked this pond where he could play all day, so he\n
stayed a good while, sailing up and down, taking the ducks'\n
backs for ships and the frogs for horses, but after a time\n
he tired of the dull life, and he and his brothers floated\n
under a bridge for a long distance, until they saw another\n
brook tumbling down a hillside. Come, let's join hands!\n
cried Aqua and because the water drops were all together,\n
overcoming the brook was child’s play. It was by the help\n`,
`of Aqua and his brothers that the bewitching river was able\n
to float heavy ships, though not so long ago it was only a\n
little stream. As the river grew wider and he could almost\n
see the ocean, Aqua realized his journey was almost over\n
and he had come full circle. Back in the ocean, he felt\n
right at home. For him, this was the safest, sweetest place\n
in the whole wide world. During the warm summer evenings,\n
if you take a walk on the sea beach, you will hear the\n
gentle rippling swash of the waves and some say that it\n
must be the gurgling voices of Aqua and his brother water\n`,
`drops telling each other about their wonderful journey\n
around the world.`];



var story2_questions = [
  {q: "Who was Aqua's mother?",
    a0: "The ocean",
    a1: "The sky",
    cr: '0'},
  {q: "What did Aqua want to try?",
    a0: "Getting to the bottom of the ocean",
    a1: "Riding on a cloud",
    cr: '1'},
  {q: "How did the Sun react to Aqua’s request?",
   a0: "Supported his request",
   a1: "Declined his request",
   cr: '0'},
  {q: "How did Aqua and his friends feel when they sailed higher into the sky?",
    a0: "Refreshed",
    a1: "Dizzy",
    cr: '1'},
  {q: "Why did the Sun go out of sight?",
    a0: "To see his family",
    a1: "To go to bed",
    cr: '1'},
  {q: "Who took pity on Aqua when he was frightened by the cold and darkness as the Sun set?",
    a0: "The wind",
    a1: "A cloud",
    cr: '0'},
  {q: "Where on the earth did Aqua and his friends fall?",
    a0: "On a mountainside",
    a1: "In a river",
    cr: '0'},
  {q: "Where did the mountain brook empty into?",
    a0: "A river",
    a1: "A pond",
    cr: '1'},
  {q: "How many great stones did the water drops see inside the mill?",
    a0: "Two",
    a1: "Three",
    cr: '0'},
  {q: "Who did Aqua play with in the pond?",
    a0: "His brother",
    a1: "His sister",
    cr: '0'},
  {q: "Where did Aqua hide to fool his brother water drop?",
    a0: "Under a tree",
    a1: "Under a rock",
    cr: '1'},
  {q: "How did Aqua get back into the ocean at the end of the journey?",
    a0: "Via a river",
    a1: "Fell from a cloud in the form of rain",
    cr: '0'}
  ]
