// add solution here
const members = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments =["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and a boy scout",
    "He hated the sound of his own voice"
];

function theBeatlesPlay(members, instruments) {
    var membersAndInstruments = [];
    var string;
    for (var i = 0; i < instruments.length; i++) {
        string = `${members[i]} plays ${instruments[i]}`;
        membersAndInstruments.push(string);
    }
    return membersAndInstruments
}

function johnLennonFacts(facts) {
    var i = 0;
    while (i < facts.length) {
        facts[i] = facts[i] + '!!!';
        i++;
    }
    return facts;
}

function iLoveTheBeatles(n) {
    var array = [];
    do {
        array.push("I love the Beatles!");
        n++;
    } while (n < 15)
    return array;
}
