const button = document.getElementById("button");
const i = document.getElementById("i");
const i2 = document.getElementById("i2");
const i3 = document.getElementById("i3");
const text = document.getElementById("text");
let result, pick,array,z = 0;


i.addEventListener("click", ()=> {
z = 1;
play()
})
i2.addEventListener("click", ()=> {
  z = 2;
  play()

  })
  i3.addEventListener("click", ()=> {
    z = 3;
  play()
  })



function game(arr) {
button.addEventListener("click", () => {
  result = Math.ceil(Math.random() * arr.length - 1);
  text.innerText = arr[result];

})

}

function specialGame() {
  button.addEventListener("click", () => {
   pick = Math.ceil(Math.random() * 2);
    array = (pick == 1) ? questions : haveNever;
    result = Math.ceil(Math.random() * array.length - 1);
    text.innerText = array[result];

})
}


function play() {
switch(z){
case 1:
  game(questions)
  i.style.color = "blue";
  i2.style.color = "black";
  i3.style.color = "black";

break;
case 2: 
specialGame();
i2.style.color = "blue";
i.style.color = "black";
i3.style.color = "black";
break;
case 3:
  game(haveNever);
  i3.style.color = "blue";
  i2.style.color = "black";
  i.style.color = "black";

  break;
}
}


