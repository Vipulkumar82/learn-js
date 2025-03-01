        //Anonymous Function Expression 

// const user = function(n,a,r){
//     this.name=n;
//     this.age=a;
//     this.roll=r;
// }
// const u = new user("thakur",23,3)
// console.log(u);


        //Arrow Function

// const user = (n,a,r) => {
//     this.name=n;
//     this.age=a;
//     this.roll=r;
// }
// const u = new user("thakur",23,3)
// console.log(u);

//The theory of this keyword pointing to calling context is not applicable with arrow function
 
//Another Example : -→ 

// let obj ={
//     x: 30,
//     fun: () => {
//         console.log(this.x);
//     }
// }
// obj.fun();


// same same but different

let obj ={
    x: 30,
    fun(){
        y= {
            gun: () => {
                console.log(this.x)
            }
        }
        y.gun();
    }
}
obj.fun();