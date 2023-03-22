
var story1_split = [`If you were to journey to the North of England, you would\n
come to a valley that is surrounded by moors as high as\n
mountains. It is in this valley where you would find the\n
city of Bradford, where once a thousand spinning-jennies\n
that hummed and clattered spun wool into money for the\n
long-bearded mill owners. That all mill owners were\n
generally busy as beavers and quite pleased with themselves\n
for being so successful and well off was known to the\n
residents of Bradford, and if you were to go into the city\n
to visit the stately City Hall, you would see there the\n`,
`Crest of the City of Bradford, which those same mill-owners\n
created to celebrate their achievements. It shows a\n
sinister looking boar's head sitting on top of a well which\n
seems puzzling at first, but the reason for this symbol is\n
a matter of legend. There was once, legend has it, a\n
fearsome boar, which lived in a wood located just outside\n
the manor of Bradford. A source of great trouble to the\n
local folk the boar was, bringing terror to the peaceful\n
flocks and ravaging the countryside around. Even worse,\n
however, the boar most liked to go to the well that was in\n`,
`the wood and drink its fresh water, so that the people of\n
Bradford had second thoughts about visiting the well. That\n
the people of Bradford bore the brunt of the beast’s\n
ferocity was unfair in the eyes of the people of the\n
region. Eventually, the issue reached the ears of the\n
kindly Lord of the Manor who the people had often asked for\n
help. The Lord saw the severity of the problem the people\n
faced and suggested a contest could solve the problem. He\n
said that whoever could kill the boar and bring as proof\n
its head to the Manor House, would be rewarded with land\n`,
`and fame. It was the people of Bradford and the people who\n
knew them who rejoiced at this proclamation but one\n
question remained: who would kill the boar? By the handsome\n
reward many felt tempted, but the thought of the boar with\n
its deadly tusks and face like thunder soon put an end to\n
their ambitions. However, there was one huntsman, who was\n
still wet behind the ears, who decided the prize was worth\n
a shot in spite of the boar's reputation. The huntsman\n
discovered the boar preferred to come out in the middle of\n
the day. So, he went to the wood by the well with his good\n`,
`bow, to bide his time. Around noontime, the boar, feared by\n
the locals, came out, as slow as a snail, from among the\n
trees, just as the huntsman had predicted. The huntsman\n
leaped from his hiding place and through the heart with his\n
fine arrows shot the boar. Now the problem was no longer to\n
kill the boar. It was to find a way to carry the boar back.\n
The head was too heavy for the little huntsman to carry\n
back to the Manor House, but the huntsman, who was as\n
quick-witted and cunning as ever, asked himself, “What\n
else can I do to prove I killed the boar?” The next\n`,
`instance he opened the boar's mouth and cut out its tongue,\n
taking that as proof for the Lord. He set out for the Manor\n
House as quickly as he could and he had only been gone a\n
few minutes when a second huntsman, not so bold as the\n
first but a little more cunning, came on the scene. Seeing\n
the slain carcass of the boar, the huntsman rejoiced in his\n
good fortune. The second huntsman knew a shortcut to the\n
Manor House was just around the nearby pond, and, being a\n
bigger man than the first, was able to pick up the boar's\n
head and carry it through the wood towards the prize that\n`,
`awaited him. The Lord of the Manor was seated in his hall\n
when the second huntsman burst through the door and began\n
to spin a line. The woes of Bradford are ended! he\n
announced. With my own hand I have slain the boar! And,\n
with that, at the feet of his lord he dropped the boar's\n
enormous head. Then you will be rewarded, as I promised.\n
But first, let me examine the head of this monster, said\n
the Lord of the Manor. To not examine the head in advance\n
had not been very clever on the part of the huntsman. Right\n
away, the Lord noticed the tongue of the boar was missing\n`,
`and exclaimed, "What is this? A boar with no tongue?" He\n
looked at the huntsman, dubiously. How come this creature\n
has no tongue? he demanded. All eyes were on the huntsman.\n
The huntsman questioned by the Lord replied, "I cannot say,\n
my Lord." He was suddenly realizing his tricky situation\n
could end badly for him. Through the door at this moment,\n
the first huntsman burst. The woes of Bradford are ended!\n
he cried. I have slain the boar the people of Bradford\n
dreaded! All eyes turned to the man who now stood in the\n
doorway. The reward is already given, said the Lord of the\n`,
`Manor. The man here has brought to me the boar's head. Then\n
where is its tongue? the first huntsman replied. And, so\n
saying, he drew out the boar's tongue he had put in his\n
hunting pouch and related how he had ambushed the creature\n
in the wood and cut out its tongue as proof of his victory.\n
Listening to the tale, the Lord of the Manor tried to\n
discern which huntsman was telling him the truth and what\n
the two huntsmen were thinking as they waited for him to\n
make a decision. Almost instantly, the Lord saw that the\n
second huntsman had fed him a pack of lies and it was the\n`,
`first huntsman who was the true savior of Bradford. The\n
Lord believed the second huntsman had tried to steal the\n
first huntsman’s prize and so proclaimed the first\n
huntsman the true victor. The Lord wondered for a moment\n
why he always encountered so much chicanery in his everyday\n
interactions. The huntsman who had earned his prize fair\n
and square received as his reward a piece of land just\n
outside the town, known thereafter as Hunt Yard. His fame\n
was indeed assured, but it was not nearly as lasting as\n
that of the fearsome Bradford Boar.`];

var story1_questions = [
  {q: "What is depicted on the Crest of the City of Bradford?",
    a0: "A spinning jenny",
    a1: "Boar's head",
    cr: '1'},
  {q: "What did the boar do at the well?",
    a0: "Dive into the well",
    a1: "Drink water from the well",
    cr: '1'},
  {q: "Who suggested a possible solution for the boar problem?",
   a0: "Lord of the Manor",
   a1: "The people of Bradford",
   cr: '0'},
  {q: "What did people think about the rewards suggested by the Lord of the Manor?",
    a0: "Many people were tempted",
    a1: "No one was tempted",
    cr: '0'},
  {q: "When did the boar usually come out?",
    a0: "In the middle of the day",
    a1: "When the sun goes down",
    cr: '0'},
  {q: "How did the huntsman kill the boar?",
    a0: "Using a bow and arrows",
    a1: "Using a big knife",
    cr: '1'},
  {q: "Where was the shortcut to the Manor House located?",
    a0: "Around the hill",
    a1: "Around the pond",
    cr: '1'},
  {q: "Which huntsman was lying to the Lord of the Manor?",
    a0: "The one who cut out the boar's tongue",
    a1: "The one who carried the boar to the Manor House",
    cr: '1'},
  {q: "Who examined the head of the dead Boar after the boar was killed?",
    a0: "The Lord of the Manor",
    a1: "The huntsman who brought the boar’s head",
    cr: '0'},
  {q: "What did the huntsman who brought the head of the boar do when he was questioned about the Boar’s tongue?",
    a0: "He made up the reason why the tongue is gone",
    a1: "He did not give an answer",
    cr: '1'},
  {q: "What did the huntsman who killed the boar receive as a reward?",
    a0: "a piece of land",
    a1: "an honorable title",
    cr: '0'},
  {q: "How long did the true huntsman’s fame last?",
    a0: "It lasted longer than the fame of the fearsome Boar",
    a1: "It was not as lasting as the fame of the fearsome Boar",
    cr: '1'}
  ]
