// class Product {
//     //properties → variables → data member 
//     name;
//     rating;
//     price;

//     // Behaviour → functions → member Function
//     display(){
//         console.log("Displaying a function");
//     }
// }

// const p=new Product();   // new → creates an empty plain object
// console.log(p);
// console.log(p.display());




        // Using this we enter enteties.

class product{
    constructor(n,p,r){
        this.name=n;
        this.price=p;
        this.rating=r;
        // return 50;
           //if we returning primitive data then it will unchanged in constructor
            // return {x:10,y:28};
            //but if we return non primitive data thenit will be returned
        }
    display(){
        console.log("Printing thorugh Display function:--",this.name);
    }
}

const p= new product("Vipul's pen",3000,10);

console.log(p)
p.display();