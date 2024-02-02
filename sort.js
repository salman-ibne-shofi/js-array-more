const persons = ['rakib', 'nokib', 'sakib', 'Pkib', 'dakib', 'Anis'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

// sort -->
// const numbers = [4, 7, 2, 8, 3, 6];
// const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

/**
 * Ascending ------> smaller to larger
 * Descending -----> larger to smaller
 */ 

const numbers = [4, 7, 12, 8, 43, 6, 1];
// const numbers_asc = numbers.sort(); not working
const numbers_asc = [...numbers].sort(function(a, b){return a - b});
const numbers_dsc = [...numbers].sort(function(a, b){return b - a});
console.log(numbers_asc);
console.log(numbers_dsc);