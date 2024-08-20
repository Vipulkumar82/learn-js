const name = "Vipul"
const repoCount = 50

console.log(name + repoCount + " Value");  //don't use these type only use backtiks {``}

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vipul-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Vipul    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Vipul.com/Vipul%20Thakur"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); //for removing anything like spaces in name 