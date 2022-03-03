// 2.3.1. Startup Nation

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Fonction de comparaison à utiliser avec .sort
function compare(a, b) {

// Défini les élements à comparer pour le tri, en uppercase
const lastA = a.last.toUpperCase();
const lastB = b.last.toUpperCase();

let comparaison = 0;
if (lastA > lastB) {comparaison = 1;}  
else if (lastA < lastB) {comparaison = -1;}
return comparaison;
}

let oldPeople = entrepreneurs.filter(item => item.year > 1969 && item.year < 1980);
let names = entrepreneurs.map(item => item.first + " " + item.last)
let age = entrepreneurs.map(item => item.first + " " + item.last + ": " + (2019 - item.year) + " ans")
let sort = entrepreneurs.sort(compare)
console.log(oldPeople)
console.log(names)
console.log(age)
console.log(sort)