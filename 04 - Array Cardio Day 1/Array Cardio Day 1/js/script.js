// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
    "Bernhard, Sandra",
    "Bethea, Erin",
    "Becker, Carl",
    "Bentsen, Lloyd",
    "Beckett, Samuel",
    "Blake, William",
    "Berger, Ric",
    "Beddoes, Mick",
    "Beethoven, Ludwig",
    "Belloc, Hilaire",
    "Begin, Menachem",
    "Bellow, Saul",
    "Benchley, Robert",
    "Blair, Robert",
    "Benenson, Peter",
    "Benjamin, Walter",
    "Berlin, Irving",
    "Benn, Tony",
    "Benson, Leana",
    "Bent, Silas",
    "Berle, Milton",
    "Berry, Halle",
    "Biko, Steve",
    "Beck, Glenn",
    "Bergman, Ingmar",
    "Black, Elk",
    "Berio, Luciano",
    "Berne, Eric",
    "Berra, Yogi",
    "Berry, Wendell",
    "Bevan, Aneurin",
    "Ben-Gurion, David",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bennington, Chester",
    "Bierce, Ambrose",
    "Billings, Josh",
    "Birrell, Augustine",
    "Blair, Tony",
    "Beecher, Henry",
    "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const bornin1500s = inventors.filter((inventor) => inventor.year < 1600 && inventor.year >= 1500);
console.log(bornin1500s);
console.table(bornin1500s); // to print minimalistic table in console
console.log(inventors);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const FirstLastName = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
console.log(FirstLastName);
console.log(inventors);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const fromOldtoYoung = inventors.sort((first, second) => {
    return first.year - second.year;
});
// or
const ordered = inventors.sort((a, b) => {
    if (a.year > b.year) {
        return 1;
    } else {
        return -1;
    }
});
// or with ternary operator (a.year>b.year) ? -1 : 1;
console.table(fromOldtoYoung);
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalyears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalyears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((f, s) => {
    f.passed - f.year - (s.passed - s.year) ? 1 : -1;
});
console.log(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/* const category = document.querySelector(".mw-category");
const links = [...category.querySelectorAll("a")];
const BoulvarsList = links.map((link) => link.textContent).filter((link) => link.includes("de"));
console.log(BoulvarsList); */
//^ it code need to run in console on wikipedia

// 7. sort Exercise
// Sort the people alphabetically by last name
const alphabetPeople = people.sort((lastOne, firslOne) => {
    const [alast, afirst] = lastOne.split(", ");
    const [blast, bfirst] = firslOne.split(", ");
    return alast > blast ? 1 : -1;
});
console.log(alphabetPeople);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck"];

const totalvehicle = data.reduce((obj, vehicle) => {
    if (!obj[vehicle]) {
        obj[vehicle] = 0;
    }
    obj[vehicle]++;
    return obj;
}, {});
console.log(totalvehicle);

//some add exercises
const euro = [29.76, 41.85, 46.5, 24.5, 16.9, 34.34, 45.76];
/* const above30 = euro.reduce((total, amount) => {
  if (amount > 30) {
    total.push(amount);
  }
  return total;
}, []); */
const above30 = euro.filter((number) => number > 30).map((number) => number * 2);
console.log(euro);
console.log(above30); // or we use reduce where we in one turn make it ;
