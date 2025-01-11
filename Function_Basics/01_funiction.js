// function sayMyName(){
//     console.log("V");
//     console.log("I");
//     console.log("P");
//     console.log("U");
//     console.log("L");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


// function loginUserMessage(username = "sam"){
//     if(!username){       //it is also written as if(username === undefined)
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))

//printing multiple values by a funtion 

function printAllValues(...num1){       //while we giving num1 then it is printing only one number 
                                    //and when we use ...num1(... is rest operator) then it prints all the numbers what we are passed 
    //return(console.log(num1));
}
printAllValues(200,400,500);

//object call in function 

let user={
    username : "vipul",
    age : 18
}
function objectcall(anyobject){
   //return console.log(`username ${anyobject.username} and age is ${anyobject.age}`)
}
objectcall(user);

//array call in funtion

let array =[20,23,34,55];

function arrayCall(anyarray){
    // console.log(anyarray[0]);
    return anyarray[1];
}
// arrayCall(array);
// console.log(arrayCall(array));

function multiply(a,b){
    return (a*b);
}
x=multiply(4,5);
console.log(x);