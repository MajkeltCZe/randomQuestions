
const button = document.getElementById('button');
const text = document.getElementById('text');
let result;


let questions = [
"string","word","sdsad","test","sdswaDDDDDDDD","hdfdf","daisyMeROlling"
]
    
button.addEventListener('click',  () => {
    result = Math.ceil(Math.random() * questions.length - 1)
text.innerText= questions[result]

});


















