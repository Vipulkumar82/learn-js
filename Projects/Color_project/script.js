const body=document.querySelector("body");
const buttons=document.querySelectorAll(".container")[0];

buttons.addEventListener("click",function(e){
        e.stopPropagation();
        
        // console.log(e);  //events
        // console.log(e.target);   //forgetting Target event
        
        if(e.target.id=="blue"){
            body.style.backgroundColor=e.target.id;
            console.log("blue");
        }
        if(e.target.id=="red"){
            body.style.backgroundColor="red";
            console.log("red");
        }
        if(e.target.id=="purple"){
            body.style.backgroundColor=e.target.id;
            console.log("purple");
        }
        if(e.target.id=="green"){
            body.style.backgroundColor=e.target.id;
            console.log("Green");
        }
        console.log("hi");
},true);
    
body.addEventListener("click",function(e){
    console.log("body clicked");
    body.style.backgroundColor="white";
});