// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
import emojipedia from "./emojipedia";

const meaning = emojipedia.map(function (dummy) {
  return dummy.meaning.slice(0, 100);
});

console.log(meaning);

// function truncate(words) {
//   return words.slice(0, 100).concat("...");
// }

// const final = emojipedia.meaning.filter(trucate);

// console.log(final);
