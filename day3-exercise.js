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
//pake built in method
const kata2 = "madam";
const isPalindrome = kata2 ===kata2.split("").reverse().join("");

console.log(kata2.split(""));
console.log(kata2.split("").reverse()); //reverse untuk membalik huruf dari belakang kedepan
console.log(kata2.split('').reverse().join("")); //join untuk menggabung dari split

console.log(isPalindrome); 

//tanpa built in method
const kata22 = "jogja";
let reverse = "";

//reverse = "ajgoj"

for (let i = kata22.length - 1; i >= 0; i-- ) {
reverse += kata22[i];
console.log(kata22[i]);
	}

console.log(kata22.length)
console.log(reverse)

// NO 3
//Write a code to convert centimeter to kilometer
//Example : 100000 → “1 km”
const centimeter = 100000;
const kilometer =  centimeter / 100000;
console.log(kilometer + "km");
 
//NO 4
//Write a code to format number as currency (IDR)
//Example : 1000 → “Rp. 1.000,00”
const number4 = 1000;
console.log("Rp." + number4 + ",00");

//cara lain
const harga = 10000
const rupiah = new Intl.NumberFormat('id-ID', {
	style :"currency",
	currency : "IDR",
	maximumFractionDigits : 0,
});

console.log(rupiah.format(harga));

//NO 5 
//Write a code to remove the first occurrence of a given “search string” from a string
//Example : string = “Hello world”, search string = “ell” → “Ho world”
const nama5 = "Hello World";
const removenama5 = nama5.replace("ell","");
console.log(removenama5);

//cara lain
const nama52 = "Hello World";
const search = "ell";
const replaceWith = "";

const remove = nama52.replace(search, replaceWith);

console.log(remove);

//NO 6 
//Write a code to capitalize the first letter of each word in a string
//Example : “hello world” → “Hello World”

const input6 = "hello world"; 
console.log(input6[0]);

let words = input6.split(" ");
console.log(words.length);
console.log(words);

for (let i1 = 0; i1 < words.length; i1++) {
	words[i1] = words[i1] [0].toUpperCase() + words[i1].slice(1)

	console.log(words[i1].slice(1)); //kalo bingung isinya apa

}

console.log(words);
console.log(words.join(" "))

//NO 7
//Write a code to reverse a string.
//Example : “hello” → “olleh”

//cara 1 build in method

const kata7 = "helllo";
const reverse7 = kata7.split("").reverse().join("")

console.log(kata7 + "->" + reverse7 );

//cara tanpa build in method
const str = "hello";
let message7 = "";

console.log(str.length -1);

for (let i7 = str.length -1; i7 >=0; i7--){
	message7 += str [i7];
}

console.log(message7);

//NO 8 
//Write a code to swap the case of each character from string 
//Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

const inputString8 = "The QuiCk BrOwN Fox";
let swappedString = "";

for (let i8 = 0; i8 < inputString8.length; i8++) {
	const char = inputString8[i8];

	console.log(char);

	if (char === inputString8[i8].toUpperCase()){
		swappedString += char.toLowerCase();}
		else {
			swappedString += char.toUpperCase();
		}
	}

console.log (swappedString);


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

const number10a = 42;
const number10b = 27;
const number10c = 18;

const smallest = Math.min(number10a, number10b, number10c);
const largest = Math.max(number10a,number10b,number10c); 
const middle = number10a + number10b + number10c - smallest - largest;

console.log(smallest);
console.log(largest);
console.log(middle);

console.log(smallest,middle,largest)

//NO 11
//Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// Example : “hello” → 1

let input11 = "hello";
let type;

if (typeof input11 === "string"){
	type = 1;
} else if (typeof input11 === 'number'){
	type = 2;
} else {
	type = 3;
}

console.log(type);

//NO 12
//Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w

const inputString = "An apple a day keeps the doctor away".toLowerCase();
console.log(inputString);

const replaceWord = "a";
let modifiedString = "";

for (let j = 0; j < inputString.length; j++) {
if (inputString[j] === replaceWord) {
	modifiedString = modifiedString + "*";
} else {
	modifiedString = modifiedString + inputString[j];
}
}

console.log(modifiedString);