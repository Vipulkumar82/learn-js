const form=document.querySelector('.form-container');
console.log(form);

form.addEventListener("submit",function(e){
    
    e.preventDefault();

    const length=parseInt(document.querySelector("#length").value);
    const breadth=parseInt(document.querySelector("#breadth").value);
    const results=document.querySelector("#results");

    if (length==='' || length<=0 || isNaN(length)){
        results.innerHTML=`Please Enter a valid Length ${length}.`;

    }else if(breadth==='' || breadth<=0 || isNaN(breadth)){
        results.innerHTML=`Please Enter a valid Breadth ${breadth}.`;

    }else{
        const area=(length*breadth);
        results.innerHTML=`<span>Area of Rectangle is ${area}</span>`;
    }

})