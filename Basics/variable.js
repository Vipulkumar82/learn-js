/*today we are learing about varriables:- const,let,var
NOTE:->
Prefer not to use var because of issue in block scope
 and funtional scope
*/

const accountId=34178965
let accountemail="vipul@google.com"
var accountpass="12345"
accountcity="Bihar"
let accountstate;
// accountId=1234235 (this is const it cannot be changed)

// console.log(accountId);

accountemail="vipulthakur@gmail.com"
// console.log(accountemail);

accountpass="2342322"
// console.log(accountpass);

accountcity="jaipur"
// console.log(accountcity);


//for consoling all the varriables in a single table 
console.table([accountId, accountemail,accountpass,accountcity,accountstate])

