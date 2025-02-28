//Generally we create a function for any work it will display another function because of setTimeout 
//but Using Promise we can done that work in .then function ...

// setTimeout(function(){
//     console.log("first console");
// },2000)

// function another(){
//     console.log("Second console")
// }
// another();




// const promise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         if(Math.random()<0.5){
//             rej("promise is reject")
//         }else{
//             res("promise is resolve")
//         }
//     },2000)
// })


// promise.then((data)=>console.log(data)).catch((err)=>console.log(err))


const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve();
        // console.log("good Morning")
    },2000)
})
promiseOne.then(function(){
    // console.log("after noon");
})



            //data Consumption

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Vipul Thakur",email: "Vipul@gmail.com"})
    },2000)
})

promiseTwo.then(function(user){
    // console.log(user)
})


            //Use of reject or .catch()
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Vipul Thakur",email: "Vipul@gmail.com"})
        }else{
            reject("Error: Something Went Wrong");
        }
    },2000)
})

promiseThree.then(function(user){
    return user.username;
    
})
.then(function(username){
    // console.log(username)
})
.catch(function(error){
    // console.log(error)
})
// .finally( () => console.log("Finally lasts"))



                // Asnc & Await

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Vicky Thakur",email: "Vicky@gmail.com"})
        }else{
            reject("Error: Something Went Wrong");
        }
    },1000)
})

async function consumePromiseFour(){
    try{
        const response = await promiseFour;
        // console.log(response)
    }catch(error){
        // console.log(error)
    }
}

// consumePromiseFour();



// Now we fetch data from the object json using Async Await

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E:',error)
//     }
// }
// fetchData()


// 2nd method for same thing using .then .cath


fetch('https://jsonplaceholder.typicode.com/users')
.then (function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log("Error: ",error)
})


//Another Question

// function add(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 console.log(a+b+c+d);
//             }
//         }
//     }
// }

// add(3)(4)(5)(5)


const obj1 = {
    name:"vicky",
    age:23,
    gender:"Male",
    courseInrolled:[{
        "c++":90,
        "java":34
    }],
    dateOfInrolled:new Date('21-mar-2024 08:00 AM'),
}
// console.log(obj1)

// const obj2 = obj1;
// console.log(obj2)