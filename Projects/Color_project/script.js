const body=document.querySelector("body");
const buttons=document.querySelectorAll(".buttons");

buttons.forEach(function(button){     //Using ForEach loop
button.addEventListener("click",function(e){
    // console.log(e);  //events
    // console.log(e.target);   //forgetting Target event
    
    if(e.target.id=="blue"){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=="red"){
        body.style.backgroundColor="red";
    }
    if(e.target.id=="purple"){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=="green"){
        body.style.backgroundColor=e.target.id;
    }
});
});


// const body=document.querySelector('body');
// const buttons=document.querySelectorAll('.container')[0];  
// // instead of using ForEach loop we used eventDeligation
// // we take main parent div and put eventListener so any chiled is clicked then ..

// buttons.addEventListener('click',function(e){
//     if(e.target.id=='green'){
//         body.style.backgroundColor=e.target.id;
//     }
//     if(e.target.id=='red'){
//         body.style.backgroundColor=e.target.id;
//     }
//     if(e.target.id=='purple'){
//         body.style.backgroundColor=e.target.id;
//     }
//     if(e.target.id=='blue'){
//         body.style.backgroundColor=e.target.id;
//     }
// })