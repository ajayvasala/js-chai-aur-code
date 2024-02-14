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
