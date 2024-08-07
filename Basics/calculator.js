let a=10;
let b=40;
let operator = '*';
let result ;

switch(operator){
    case '+':
        console.log(`addition = ${a+b}`);
        break;
    case '-':
        console.log(`substraction = ${a-b}`);
        break;
    case '*':
        console.log(`multiplication = ${a*b}`);
        break;
    case '/':
        console.log(`division = ${a/b}`);
        break;
    default:
        console.log("invalid operation please enter + or - or * or /");
        break;
}

/*                   CALCULATOR USING   " ARROW FUNCTION "

normal function
function addition (a,b) {
    return a+b;
}

// arrow function
// 1
let substraction = (a,b) => {
    return a-b;
}

// 2
let multiplication = (a,b) => a*b;

// 3
let print = a => console.log(a)




make a code for applying +,-,*,/ using array function with if else statement 

let a=50;
let b=2;
let operator="*";
let result;

// addition function defination using arrow function
let addition=(a,b)=>a+b;

// substraction function defination using arrow function
let substraction=(a,b) => a-b;

// multiplication function defination using arrow function
let multiplication=(a,b)=>a*b;

// division function defination using arrow function
let division=(a,b)=>a/b;

// modular division function defination using arrow function
let modular=(a,b)=>a%b;

// for printing result funtion is:-
let print=result=>console.log(result);

// make a calculator using if else or if else if else 
if(operator=="+"){
    result=addition(a,b);
    print(result);
}
if(operator=="-"){
    result=substraction(a,b);
    print(result);
}
if(operator=="*"){
   result=multiplication(a,b);
   print(result);
}
if(operator=="/"){
    result=division(a,b);
    print(result);
}
if(operator=="%"){
    result=modular(a,b);
    print(result);
}

General Informations

while
do while
for
let n = 1;
while(n<=50){
    if(n%2==0){
        console.log(`${n}`)
    }
    n++;
}


for(let i =0;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
}


if(2>3){
    console.log('true is printed')
}else if(3>4){
    console.log('not printed')
}else{

}


let myName = 'vipul';
myName[0]='b';
console.log(myName)


for(let i = 0;i<myName.length;i++){
    console.log(myName[i]);
    
}

let names = [4,5,23,6,23]

function defination using arrow function
const addition = (a,b) => a+b
function calling
let result = addition(2,4)
console.log(result);


function addition (){}

for(let i = 0;i<names.length;i++){
    console.log(names[i])
}


const c = names.map(value=>value*3)
console.log(c);
*/