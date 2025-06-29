const button = document.getElementById("button");


function throtlling(func, delay){
    let isClicked= true;
    return function(...args){
        if(!isClicked){
            return
        }

        func(...args);
        isClicked=false;

        setTimeout(()=>{
            isClicked=true;
        },delay)
    }
}

const clicked = function(){
    console.log("Button Clicked....")
}

button.addEventListener("click",throtlling(clicked,2000));