"use strict"  //treat all JS code as  newer version

//alert (3 + 3);   //can not use in node js, we can use this in console and bind with html file in browser

console.log(3 
    + 
    3);     // code readability is should be high

let name = "Ajay"
let age = 32
let isLoggedIn = true
let state;
let temperature = null //(ex: if i want to know temperature from server and for some reason server unable to find the temperature and returns 0 then in this case 0 is also temperature. So, we can assign null data type in this case)

//Primitive Data types
// string => ""
// number => to the range of 2 to power of 53
// bigint
// boolean => true/false
// undefined => varibale declared but not assigned any value to it
// null => standalone value
// symbol => to find uniqueness


//Reference Data types
// Object

console.log(typeof undefined); //undefined
console.log(typeof null); //object
