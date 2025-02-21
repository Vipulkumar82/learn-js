/*   DOM document Object Model
 
let element = document.querySelector('.fdiv');
                                     
undefined
element
<div class=​"fdiv">​…​</div>​
element.textContent;
' first div\n        first Para\n        second div\n            Second para\n        \n    '
element.innerte
undefined
element.innerText
'first div\n\nfirst Para\n\nsecond div\n\nSecond para'


let heading = document.createElement('h1');
undefined
heading
<h1>​</h1>​
heading.textContent= "THAKUR";
'THAKUR'
let bodyTag= document.querySelector('body');
undefined
bodytag
VM2189:1 Uncaught ReferenceError: bodytag is not defined
    at <anonymous>:1:1
(anonymous) @ VM2189:1Understand this errorAI
bodyTag
<body>​…​</body>​<div class=​"fdiv">​…​</div>​<script src=​"script.js">​</script>​<!-- Code injected by live-server --><script>​…​</script>​"fheading"<h1>​my Name is Vipul​</h1>​</body>​

Whenever we append child it will shifted as last element

bodyTag.appendChild(heading);
<h1>​THAKUR​</h1>

                    INSRT ADJACENT ELEMENT ()  

POSITION : 1. beforeBegin 2. afterBegin 3. beforeEnd 4. afterEnd
HTML CONTENT : the content we want to add*/

let newElement = document.createElement('span');
newElement.textContent='LOVE Vipul';

let fdiv = document.querySelector(".fdiv");

// fdiv.appendChild(newElement);

// fdiv.insertAdjacentElement('beforebegin',newElement);
fdiv.insertAdjacentElement('beforeend',newElement);
// fdiv.insertAdjacentElement('afterbegin',newElement);
// fdiv.insertAdjacentElement('afterend',newElement);


// Removal of child
let parent = document.querySelector('.fdiv')
let child = document.querySelector('#fpara');
parent.removeChild(child);
