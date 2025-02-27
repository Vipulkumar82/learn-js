const body=document.querySelector('body');
const start=document.querySelector('#start');
const stopped=document.querySelector('#stop');

function randomColor(){
    const hex="123456789ABCDEF"
    let color="#"
    for(let i=0; i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};

let intervalId;
const startChanging = function(){
    if(!intervalId){
        intervalId=setInterval(changeBGcolor,1000);
    }
    function changeBGcolor(){
        body.style.backgroundColor=randomColor();
    }
}
const stopChanging =function(){
    clearInterval(intervalId);
    intervalId=null;
};

start.addEventListener('click',startChanging)
stopped.addEventListener('click',stopChanging)


