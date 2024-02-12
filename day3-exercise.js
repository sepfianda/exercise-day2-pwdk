// NO 1
//Write a code to display the multiplication table of a given integer.
//Example : Number → 9

const input = 9;
const limit= 10;	
    for (let i = 1; i <= limit; i++) {
	    console.log(`${input} x ${i} = ${input * i}`)
	    }

// NO 2   
// Write a code to check whether a string is a palindrome or not.
// Example : ‘madam’ → palindrome

// // const palindrome = "madam";
// const result = true;
// let j = palindrome.length - 1;

// for (let i = 0; i < j; i++) {
//   if (palindrome[i] !== palindrome[j]) {
//     result = false;
//     break;
//   }
//   j--;
// }

// console.log(result === true ? "Palindrome" : "not Palindrome");

// NO 3
//Write a code to convert centimeter to kilometer
//Example : 100000 → “1 km”
const centimeter = 100000;
const kilometer =  centimeter / 100000;
console.log(kilometer);
 
//NO 4
//Write a code to format number as currency (IDR)
//Example : 1000 → “Rp. 1.000,00”
const number4 = 1000;
console.log("Rp." + number4 + ",00")

//NO 5 
//Write a code to remove the first occurrence of a given “search string” from a string
//Example : string = “Hello world”, search string = “ell” → “Ho world”
const nama5 = "Hello World";
const removenama5 = nama5.replace("ell","");
console.log(removenama5);

//NO 6 
//Write a code to capitalize the first letter of each word in a string
//Example : “hello world” → “Hello World”
const str = "hello world"
const pisahkata = str.split(" ");
console.log(pisahkata);

//NO 7
//Write a code to reverse a string.
//Example : “hello” → “olleh”
//// let originalString = "hello";
// let newString = "";
// for (let i = originalString.length - 1; i >= 0; i--) {
//   newString += originalString[i];
// }

// console.log(newString);

//NO 8 
//Write a code to swap the case of each character from string 
//Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
const kata8 = "The QuiCk BrOwN Fox"
console.log(kata8); 

//NO 9
//Write a code to find the largest of two given integers
//Example : num1 = 42, num2 = 27 → 42
const num9 = 42
const number9 = 27
if (num9 > number9) {
	console.log("lebih besar dari");
} else {
	console.log("tidak lebih besar dari")
}

//NO 10
//Write a conditional statement to sort three numbers
//Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
//// let num1 = 42;
// let num2 = 27;
// let num3 = 18;

// if (num1 > num2) {
//   let sort = num1;
//   num1 = num2;
//   num2 = sort;
// }

// if (num1 > num3) {
//   let sort = num1;
//   num1 = num3;
//   num3 = sort;
// }

// if (num2 > num3) {
//   let sort = num2;
//   num2 = num3;
//   num3 = sort;
// }

// console.log(num1 + ', ' + num2 + ', ' + num3);

//NO 11
//Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
//Example : “hello” → 1
//// let input = "hello";
// let result = "";

// if (typeof input === "string") {
//   result = 1;
// } else if (typeof input === "number") {
//   result = 2;
// } else {
//   result = 3;
// }

// console.log(result);
// console.log(input + " -> " + result);


//NO 12
//Write a code to change every letter a into * from a string of input
//Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y
//// const str = "An apple a day keeps the doctor away";
// const modifiedStr = "*";
// let result = "";

// for (let i = 0; i < str.length; i++){
//   if (str[i] === 'a' || str[i] === "A") {
//     result += modifiedStr;
//   } else {
//     result += str[i];
//   }
// }

// console.log(result);

