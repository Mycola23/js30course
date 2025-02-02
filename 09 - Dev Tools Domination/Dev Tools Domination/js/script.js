const dogs = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 },
];
const p = document.querySelector("p");
function makeGreen() {
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
    p.style.fontWeight = 800;
}
p.addEventListener("click", makeGreen);

// Regular
console.log(p);

// Interpolated

// Styled

// warning!
console.warn("It start may create ERROR");

// Error :|
console.error("Custom error created");
// Info
console.info("addictive information ...");
// Testing
console.assert(1 === 2, "wrong"); // if false it will be shown in console
// clearing
//console.clear();
// Viewing DOM Elements
console.dir(p);
// Grouping together
dogs.forEach((dog) => {
    console.group(`${dog.name}`);
    console.log(`Dog name : ${dog.name}`);
    console.log(`Age on the earth: ${dog.age}`);
    console.groupEnd(`${dog.name}`);
}); // for beter view in console
// counting
console.count("Joe");
console.count("Joe");
console.count("Joe");
console.count("Joe");
console.count("Joe");
// timing
console.time("ff"); // + timeEnd useful hack to our project to know some time of process
console.timeEnd("ff");
