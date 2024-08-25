// Immediately Invoked Function Expressions (IIFE)
//it is used to immidiately execute funtion & 
//Globaly scope ke pollution ya decleared varriable ke avoidance ke liye

(function iffe(){
    //named iffee
    console.log("this is printed in iffe 1");
})();  
//here the ; is required for printing new IIFE if we have to use two iffe 



// now we print iffe in arrow function 

( () => {
    //without named iife
    console.log("this is printed in arrow function")
})();


//how to pass the varriable in iife
(function iffe(number){
    //named iffee using varriables
    console.log(`this is printed in iffe ${number}`);
})("2 with Varriable");  


( (name) => {
    //without named iife using varriable
    console.log(`this is printed in arrow function${name}`)
})(" Vipul")