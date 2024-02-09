//Write a code to convert celsius to fahrenheit
//Example: 60 Celcius → 140 Fahrenheit
const celcius = 60;
const fahrenheit = (celcius * 9) / 5 + 32;
console.log(fahrenheit);

//Write a code to check whether the number is odd or even
//Example: 25 → odd number, 2 → even number
const number = "2";
if (number % 2 == 0) {
  console.log("genap");
} else {
  console.log("ganjil");
}

//jika disederhanakan pakai ternary

console.log(number % 2 === 0 ? "genap" : "ganjil");

//Write a code to check whether the number is prime number or not
//Example: 7 → 7 is a prime number
//Example: 6 → 6 is not a prime number
const angka = "7";
if ((angka / 2) % 1) {
  console.log("prima");
} else {
  console.log("bukan prima");
}

//jika disederhanakan 
console.log(((angka /2) % 1) ? "prima" : "bukan prima"); 

//cara lain
const angka1 = 7
let isPrime = true;

for (let ii = 2; ii = angka1; ii++) {
  if (angka1 % ii == 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime); 


//Write a code to find the sum of the numbers 1 to N
//Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
//Example: 3 → 1 + 2 + 3 = 7
const number2 = 3;
let sum = 0,
  i = 1;
while (i <= number2) {
  sum += i;
  i++;
}
console.log(sum);

//cara lain 
const number1 = 5; 
let jumlah = 0;
let message= ""; 

for (let i2 = 1; i2 <= number1; i2) {
  jumlah += i2;

  message += i2 + (i2 !==number ? " + " : "");
}

console.log(jumlah);
console.log(message + "=" +sum); 


//Write a code to find factorial of a number
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 4 x 3 x 2 x 1 = 720
let angka2 = 6;
let k = 1;
let fact = 1;
for (k = 1; k <= angka2; k++) {
  fact = fact * k;
}

console.log(fact);

// Write a code to print the first N fibonacci numbers
// Example: 15 → 610
// rumus fibonacci => Fn = F(n-1) + F(n-2)

// statement 1 = inisialisasi variabel
// statement 2 = define kondisi looping
// stetement 3 = kode yang dieksekusi di akhir

let sukupertama = 0;
let sukukedua = 1;
let sukun = 15;

for (let j = 0; j < sukun; j++)
{
  sukudicari = sukupertama + sukukedua;
  sukukedua = sukupertama;
  sukupertama = sukudicari;
  console.log(sukudicari);
}
