const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
fetch(endpoint, { method: "GET" })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        cities.push(...data);
        console.log(cities);
    });

function findMathes(wordToMatch, cities) {
    return cities.filter((place) => {
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex) || place.rank.match(regex);
    });
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function displayMatches() {
    const mathArray = findMathes(this.value, cities);
    const html = mathArray
        .map((place) => {
            const regex = new RegExp(this.value, "gi");
            const cityName = place.city.replace(regex, `<span class ="hl">${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class ="hl">${this.value}</span>`);
            const rank = place.rank.replace(regex, `<span class ="hl">${this.value}</span>`);
            return `
        <li>
            <span class ="name">${cityName}, ${stateName}</span>
            <span class ="population">${numberWithCommas(place.population)}</span>
            <span class ="rank">rank: ${rank}</span>
        </li>
        `;
        })
        .join("");
    suggestions.innerHTML = html;
}
searchInput.addEventListener("input", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
