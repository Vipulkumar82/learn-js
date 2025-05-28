const naam="vipul";
// console.log(naam.length); //5 

const naaam="vipul     ";
// console.log(naaam.length); // 10 
// console.log(naaam.trim().length) //5
/*
and we want to remove the spaces count 
without using naam.trim().length 
..Make a .trueLength named method for this work 
*/

String.prototype.trueLength = function(){
    // console.log(this);
    // console.log(`True length is ${this.trim().length}`)
    return this.trim().split(" ").join('').length;
};

naaam.trueLength()
console.log("hitesh Sir  ".trueLength())

//this is how we create our method using prototype 
// and if we make the method direct to Object.prototype 
// Then it will working in all like string array object function ..
