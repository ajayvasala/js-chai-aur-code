const accountID = 144553;
let accountEmail = "ajay@yahoo.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;

// accountID = 2;

accountEmail = "aj@ajay.com";
accountPassword = "212121";
accountCity = "Pune";

console.log(accountID);

/* prefer not to use var 
    because of issue in block scope and functional scope 
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);