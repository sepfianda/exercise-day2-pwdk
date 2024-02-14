// No 1
// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

// const number10a = 42;
// const number10b = 27;
// const number10c = 18;

// const smallest = Math.min(number10a, number10b, number10c);
// const largest = Math.max(number10a,number10b,number10c);
// const middle = number10a + number10b + number10c - smallest - largest;

// console.log(smallest);
// console.log(largest);
// console.log(middle);

// console.log(smallest,middle,largest)

// const array1 = [12, 5, 23, 18, 4, 45, 32]
// const smallest = Math.min(array1);
// const largest = Math.max(array1);

// console.log(smallest);
// console.log(largest);

// const array1 = [12, 5, 23, 18, 4, 45, 32]

// let smallest = array1 [0];
// for (let i = 0; i < array1.length; ++i) {
//     if (array1 [i] < smallest) {
//         smallest = array1[i];

//     }
// }

// let largest = array1 [0];
// for (let i = 0; i < array1.length; ++i) {
//     if (array1 [i] > smallest) {
//         largest = array1[i];

//     }
// }

// console.log(smallest);
// console.log(largest);

//NO 2
//Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.“apple,banana,cherry, and date”
// Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

const array2 = ["apple", "banana", "cherry", "date"];
array2.splice(3, 0, "and");
console.log(array2.join(" "));

//NO 3
// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

function splitString(input) {
  return input.split(" ");
}

console.log(splitString("Hello World"));

// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

const array4a = [1, 2, 3];
const array4b = [3, 2, 1];
const result4 = [];

for (let i4 = 0; i4 < array4a.length; i4++) {
  result4.push(array4a[i4] + array4b[i4]);
}

console.log(result4);

//NO 5
// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

const array5a = [1, 2, 3];
const array5b = [4];
console.log(array5a.concat(array5b));

const array5c = [1, 2, 3, 4];
const array5d = [7];
console.log(array5c.concat(array5d));

//NO6
//Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
//Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]

function removeOdd(number6) {
  return number6.filter((number6) => number6 % 2 === 0);
}
const number6 = [1, 2, 3, 4, 5, 6]
console.log(removeOdd(number6));

//NO 7
//Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The 
//array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the 
//array can only contain 5 elements). 
//Example : maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8 
// The function will return [5, 10, 24, 3, 6]

//NO 8
//Write a function that will combine 2 given array into one array
//Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6] 

const array8a = [1,2,3];
const array8b = [4,5,6];
console.log(array8a.concat(array8b)); 

//NO 9 
//Write a function to find duplicate values in an array
//Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5] 

function findDuplicate(array) {
  const duplicate = []

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && !duplicate.includes(array[i]))
        duplicate.push(array[i]);
    }
  }
  return duplicate
}

const number9 = [1, 2, 2, 2, 3, 3, 4, 5, 5];
const duplicateNumber = findDuplicate(number9);
console.log(duplicateNumber);

//NO 10
//Write a function to find the difference in 2 given array
//Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7] 

const array10a = [1, 2, 3, 4, 5];
const array10b = [3, 4, 5, 6, 7];

function findDifference(a,b,) {
  return a.filter(element => {
    return !b.includes(element);
  });
}

console.log(findDifference(array10a, array10b)); 

//NO 11
//Write a function that will return primitive data types only. let 
// arr = [1, [], undefined, {}, "string", {}, []];
// The function will return [1, undefined, “string”]

//NO 12
//Write a function from a given array of numbers and return the second smallest number
//Example : numbers = [5, 3, 1, 7, 2, 6] → 2

// const array12 = [5, 3, 1, 7, 2, 6]
// const minimumIndex = array12 => {
//   return array12.indexOf(Math.min (5, 3, 1, 7, 2, 6);
// };

// const secondMinimum = array12 => {
//   const copy = array12.slice();
//   copy.splice(minimumIndex(copy),1);
//   return copy[minimumIndex(copy)];
// }

// console.log(secondMinimum(array12));

//NO 13
//Write a function from a given array of mixed data types and return the sum of all the number
//Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

