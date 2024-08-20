//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Vipul",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3    read for better understanding 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive type(isme copy milta hai))  and
// Heap (Non primitive (isme reference milta hai ))

let myYTname="vipul8298";

let otherYTname=myYTname
otherYTname="thakur8298"
console.log(otherYTname); //thakur8298
console.log(myYTname);   //vipul8298

let userOne={
    email: "user@gmail.com",
    upi: "user@sbi"
}

let userTwo=userOne

userTwo.email="user2@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)  
// both will be user2 emial
// because in Heap the reference will come 
// if we change in one then second will also change

