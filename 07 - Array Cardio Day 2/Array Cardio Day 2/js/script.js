// ## Array Cardio Day 2

const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
];

const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
const isElderPerson = people.some((person) => {
    return new Date().getFullYear() - person.year >= 19;
});
const isEachElderPerson = people.every((person) => new Date().getFullYear() - person.year >= 19);
console.log(isElderPerson);
console.log(isEachElderPerson);
//^each of build -in methods return bool,for some if (at least one is correct like logical || ),for every if(all right like logical &&)
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const personId = 823423;
const findComment = comments.find((person) => person.id === personId);
console.log(findComment); //^ retun only one finded object

// Array.prototype.findIndex()//^retun index of element in array
// Find the comment with this ID
const index = comments.findIndex((person) => person.id === personId);
console.log(index);
// delete the comment with the ID of 823423
//delete comments[findComment2];
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];

console.table(newComments);
