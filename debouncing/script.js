const inputSearch = document.getElementById("inputSearch");

function debouncing(func, delay){
    let timeOut;
    return function(...args){
        clearTimeout(timeOut);
        timeOut=setTimeout(()=>{
            func(...args);
        },delay)
    }
}

const myFunction = function(event){
    const query = event.target.value;
    console.log("Search for",query);
//     fetch(`https://api.example.com/search?query=${query}`)
//         .then((response)=> response.json())
//        .then((data)=>{
//     console.log(data)
// });
}

inputSearch.addEventListener("input", debouncing(myFunction, 500));