//exercise number 1

//problem : write a code to find area of rectangle 
//Example : length = 5, width = 3 → 15

//hint : 
// 1. mencari cara menghitung luas persegi panjang
// 2. menentukan rumus luas persegi panjang (rumus sebagai variabel)
// 3. memasukkan value ke variabel

//solution : 
// rumus persegi panjang 
// luas rectangle = length * width
const length = 5;
const width = 3;
console.log (length * width);

//exercise number 2

//problem : write a code to find perimeter of rectangle 
//Example : length = 5, width = 3 → 16

//hint : 
// 1. mencari cara menghitung keliling persegi panjang
// 2. menentukan rumus keliling persegi panjang (rumus sebagai variabel)
// 3. memasukkan value ke variabel

//solution : 
// rumus persegi panjang 
// keliling rectangle = 2 * (length + width)
const length2 = 5;
const width2 = 3;
const x = (length2 + width2);
 console.log (x);
 console.log (2*x);

 //exercise number 3

//problem : Write a code to find diameter, circumference and area of a circle
//Example : radius = 5, Output : diameter = 10, circumference = 31.4159, area = 78.539

//hint : 
// 1. mencari cara menghitung diameter,keliling dan luas lingkaran
// 2. menentukan rumus diameter, keliling, luas lingkaran (rumus sebagai variabel)
// 3. memasukkan value ke variabel

//solution : 
// rumus diameter lingkaran
// diameter lingkaran = 2 * jari-jari
const radius = 5;
const r = radius;
const D = (2*r); 
console.log (D);

//solution : 
// rumus keliling lingkaran
// keliling lingkaran = pi * diameter 
const diameter = 10; 
const d = diameter; 
const pi = 3.14; 
const k = (pi*d); 
console.log (k); 

 //solution 
 //rumus luar lingkaran
 //luas lingkaran = pi * r * r
 console.log (pi*r*r);

 //exercise number 4
 //Write a code to find angles of triangle if two angles are given.
 //Example : a = 80, b = 65 ->35 

//hint : 
// 1. mencari cara menghitung sudut lingkaran
// 2. memasukkan value ke variabel

//solution:
// jumlah sudut segitiga = 180
const a = 80;
const b = 65;
const jumlah = 180;
console.log (jumlah-a-b);

//exercise number 5
//Write a code to get difference between dates in days
 const date1 = new Date("2022-01-20");
 const date2 = new Date("2022-01-22");
 const difference = (date2 - date1);
 const day0 = difference / (24*60*60*1000);
console.log(day0); 

//exercise number 6
//Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days). 
//Example : 400 days → 1 year, 1 month, 5 days
//Example: 366 days → 1 year, 0 month, 1 day

const day1 = 400
const year1 = parseInt (day1 / 365);
const month1 = parseInt ((day1 % 365) / 30);
const day2 = parseInt ((day1 % 365)% 30); 
console.log (year1 + "year", month1 + "month", day2 + "day")

const day3 = 366
const year2 = parseInt (day3 / 365);
const month2 = parseInt ((day3 % 365) / 30);
const day4 = parseInt ((day3 % 365) % 30);
console.log (year2 + "year", month2 + "month", day4 + "day");


