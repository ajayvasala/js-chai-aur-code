let score = 33
let scoreString = "ab45" // NaN
let abc = null;
let xyz = undefined;
let boolean = true;


console.log(8,typeof score);  // number
console.log(9,typeof scoreString); // string
console.log(10,typeof abc);  //object
console.log(11,typeof xyz);  //undefined
console.log(12,typeof boolean);  //boolean


let valueInNumber = Number(score) // We can use this method to convert variable into number
let valueInNumber2 = Number(scoreString)
let valueInNumber3 = Number(abc)
let valueInNumber4 = Number(xyz)
let valueInNumber5 = Number(boolean)


console.log(22,typeof valueInNumber);  //number
console.log(23,typeof valueInNumber2); //number
console.log(24,typeof valueInNumber3); //number
console.log(25,typeof valueInNumber4); //number
console.log(26,typeof valueInNumber5); //number



console.log(30,valueInNumber);
console.log(31,valueInNumber2); // NaN
console.log(32,valueInNumber3); // 0
console.log(33,valueInNumber4); // NaN
console.log(34,valueInNumber5); // 1


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

//Boolean conversion
let isLoggedIn = "ajay"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(45,booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "ajay" => true


//String conversion
let someNumber = 33

let stringNumber = String(someNumber)
console.log(56,typeof stringNumber);
console.log(57,stringNumber);


//***************************** Operations ***********************************

let value = 3
let negValue = -value
console.log(64,negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%2);

let str1 = "hello"
let str2 = " ajay"

let str3 = str1 + str2
console.log(76,str3);

console.log(78, "1" + 2); 
console.log(79, 1 + "2");
console.log(80, "1" + 2 + 2);  //if we put string first in arithmatic operations then remaining numbers will count as string only - 122
console.log(81, 1 + 2 + "2"); //first numbers will add then string will add into that number - 32
console.log(82, 1 + "4" + 2); // - 142

console.log(84,  (3 + 4) * 5 - 1);


let gameCounter = 100
++gameCounter;          //prefix - If used postfix, with operator after operand (for example, x++), the increment operator              
                        // increments and returns the value before incrementing.
gameCounter++;          //postfix - If used prefix, with operator before operand (for example, ++x), the increment operator increments  and returns the value after incrementing.

console.log(102, gameCounter);


