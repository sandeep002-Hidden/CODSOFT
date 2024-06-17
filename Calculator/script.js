const resultDiv = document.getElementById("result");
const input = document.getElementById("input");
function changeMode() {
  const mode = document.getElementById("mode");
  const mainBody = document.getElementById("main");
  const buttons = document.querySelectorAll("button");

  if (mode.innerText === "Light") {
    mainBody.style.backgroundColor = "black";
    mainBody.style.color = "white";
    mode.innerText = "Dark";
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "black";
      buttons[i].style.color = "white";
    }
    resultDiv.style.backgroundColor = "rgb(25, 25, 25)";
    input.style.backgroundColor = "rgb(25, 25, 25)";
  } else {
    resultDiv.style.backgroundColor = "rgb(179, 168, 168)";
    input.style.backgroundColor = "rgb(179, 168, 168)";
    mainBody.style.backgroundColor = "white";
    mainBody.style.color = "black";
    mode.innerText = "Light";
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "white";
      buttons[i].style.color = "black";
    }
  }
}
const FirstInt = 0;
const secondInt = 0;
function set(value) {
    input.innerText+=value;
}
function findValue(){
    const value=input.innerText;
    resultDiv.innerText=eval(value)
    input.innerText=""
}
function allClear(){
    input.innerText=""
    resultDiv.innerText=""
}
function del(){
    const value=input.innerText;
    input.innerText=""
    for(let i=0;i<value.length-1;i++){
        input.innerText+=value[i]
    }
}