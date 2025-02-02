"use strict";
const timeNodes = [...document.querySelectorAll("[data-time]")];

const seconds = timeNodes
    .map((node) => node.dataset.time) // get time from data attribute
    .map((timeCode) => {
        const [mins, secs] = timeCode.split(":").map(parseFloat); //next we split mins sec and turn them to float
        return mins * 60 + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);
let secondsLeft = seconds;
const hours = Math.floor(seconds / 3600);
secondsLeft %= 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

console.log(`${hours} h, ${mins} min, ${secondsLeft} sec`);

//task 1 //*completed
const numbers = [1, 2, 34, 5, 12, 34, 67, 45, 23, 45];
const squareNumbers = numbers.map((number) => number * number);
console.log(squareNumbers);
//task 2 Sum of every positive element //*completed
const input = [1, -4, 12, 0, -3, 29, -150];
const positiveSum = input.filter((num) => (num > 0 ? num : 0)).reduce((total, num) => total + num);
console.log(positiveSum);
const input1 = [12, 46, 32, 64, 78, 23];
const mathValues = { med: 0, mean: 0 };
input1.sort((a, b) => (a > b ? 1 : -1));
console.log(input1);
mathValues.mean = input1.reduce((total, num, index, input1) => {
    total += num;
    if (index === input1.length - 1) {
        total /= input1.length;
    }
    if (input1.length % 2 === 0) {
        mathValues.med = Math.round((input1[input1.length / 2 - 1] + input1[input1.length / 2]) / 2);
    } else {
        mathValues.med = input1[input1.length / 2 - 0.5];
    }
    return total;
});
//task 3 Age difference from the youngest and oldest //*completed
const input2 = [
    {
        name: "John",
        age: 13,
    },
    {
        name: "Mark",
        age: 56,
    },
    {
        name: "Rachel",
        age: 45,
    },
    {
        name: "Nate",
        age: 67,
    },
    {
        name: "Jennifer",
        age: 65,
    },
];
const ages = input2.map((elm) => elm.age);
let max = Math.max(...ages);
let min = Math.min(...ages);
let mean = max - min;
const differenceAges = [min, max, mean];

console.log(differenceAges);
