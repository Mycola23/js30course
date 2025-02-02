"use strict";
// start with strings, numbers and booleans
/* let number1 = 1;
let number2 = number1;
number1 = 333;
console.log(number1, number2);
const name1 = "Rockie";
const name2 = name1;
name1 === name2 ? console.log(true) : console.log(false);
const bool1 = true;
const bool2 = bool1;
bool1 === bool2 ? console.log(true) : console.log(false); */
//^in^ this cases we copy variable but not link like with arrays and objects

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

// or create a new array and concat the old one in
const team2 = players.slice();
const team3 = [...players];
console.log(players.join() === team3.join());

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: "Wes Bos",
    age: 80,
};
//^for oblect the same spread method
const man = { ...person };
console.log(man, person);

// and think we make a copy:

// how do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
//^not reccomended way to deep clone, but it works )

const mouse = {
    name: "Rafael",
    age: 2,
    characteristic: {
        splinter: true,
        character: "furious unstoppable",
    },
};
const cloneMouse = JSON.parse(JSON.stringify(mouse));
console.log(mouse, cloneMouse);
