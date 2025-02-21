const body=document.querySelector("body");
const buttons = document.querySelectorAll(".buttons");

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target);

        if(e.target.id==="green"){
            body.style.backgroundColor="green";
        }
        if(e.target.id==="red"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="purple"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="blue"){
            body.style.backgroundColor=e.target.id;
        }
    })
})