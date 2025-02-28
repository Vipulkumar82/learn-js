//constructor

function user(username,age,isloggedIn){
    this.username=username
    this.age=age
    this.isloggedIn=isloggedIn
    return this
}
const userOne=user("vipul",12,true);
const userTwo=user("Thakur",33,false)  // This will overRide the object so we use New keywod
const userThree = new user("Kumar",35,true);
console.log(userOne)
console.log(userTwo)
console.log(userThree)


//when we use new Keyword then a empty Object created that is called Instance
//Step 2: Constructor Function call due to new keyword
//step 3: using This keyword we put parameters in that 
//step 4: we get the result in the function