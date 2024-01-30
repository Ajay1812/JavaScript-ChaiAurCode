const accountID = 1234565432
let accountEmail = "a.kumar01@gmail.com"
var accountPassword = "qwerty&1812"
accountCity = "Mathura"
let accountState /* Undefind */

// accountID = 232 Constant can't be change
accountEmail = "r.kumar01@hotmail.com"
accountPassword = "qwerty&1234"
accountCity = "Mumbai"

// console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity, accountState])



/*
Prefer let keyword not var 
because of issue in block scope and functional scope
*/