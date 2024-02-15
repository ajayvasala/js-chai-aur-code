let score = 33
let scoreString = "ab45" // NaN
let abc = null;
let xyz = undefined;
let boolean = true;


console.log(typeof score);  // number
console.log(typeof scoreString); // string
console.log(typeof abc);  //object
console.log(typeof xyz);  //undefined
console.log(typeof boolean);  //boolean


let valueInNumber = Number(score) // We can use this method to convert variable into number
let valueInNumber2 = Number(scoreString)
let valueInNumber3 = Number(abc)
let valueInNumber4 = Number(xyz)
let valueInNumber5 = Number(boolean)


console.log(typeof valueInNumber);  //number
console.log(typeof valueInNumber2); //number
console.log(typeof valueInNumber3); //number
console.log(typeof valueInNumber4); //number
console.log(typeof valueInNumber5); //number



console.log(valueInNumber);
console.log(valueInNumber2); // NaN
console.log(valueInNumber3); // 0
console.log(valueInNumber4); // NaN
console.log(valueInNumber5); // 1


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

//Boolean conversion
let isLoggedIn = "ajay"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "ajay" => true


//String conversion
let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);


//***************************** Operations ***********************************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%2);

let str1 = "hello"
let str2 = " ajay"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); 
console.log(1 + "2");
console.log("1" + 2 + 2);  //if we put string first in arithmatic operations then remaining numbers will count as string only - 122
console.log(1 + 2 + "2"); //first numbers will add then string will add into that number - 32
console.log(1 + "4" + 2); // - 142

console.log( (3 + 4) * 5 - 1);


let gameCounter = 100
++gameCounter;          //prefix - If used postfix, with operator after operand (for example, x++), the increment operator              
                        // increments and returns the value before incrementing.
gameCounter++;          //postfix - If used prefix, with operator before operand (for example, ++x), the increment operator increments  and returns the value after incrementing.

console.log(gameCounter);


