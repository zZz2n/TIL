const numbers = [1,2,3,4];

// numbers.forEach((num) => {
//   console.log(num);
// });

// const doubled = numbers.map((num) => {
//   return num * 2;
// });

// console.log(doubled);

// const evenNumbers = numbers.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(evenNumbers);

const movies = [
  {title: "matrix", isAdult: false},
  {title: "kingsman", isAdult: true},
  {title: "zootopia", isAdult: false},
]; 

// let baby = movies.filter(movie => movie.isAdult === false).map((movie) => movie.title);
let baby = movies.reduce(function(acc, movie){
  if (!movie.isAdult) {acc.push(movie.title)}
  return acc
}, [])

console.log(baby);

