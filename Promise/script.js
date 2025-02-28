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
console.log(obj1)

const obj2 = obj1;
console.log(obj2)