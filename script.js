contentArea = document.querySelector(".content");
const modeButtons = document.getElementsByName("mode");
const sizeField = document.querySelector("#size_field");
document.querySelector(".center-content").ondragstart = () => false;
document.querySelector("#resize_button").addEventListener("click", () => {
  let input;
  let num;
  do {
    input = prompt("Enter the side length for the square grid between 2-64");
    if(input == null) return;
    num = Number(input)
    if(!Number.isInteger(num) || num < 2 || num > 64){
      alert("Please enter an integer value between 2-64.");
    } else {
      break;
    } 
  } while (true);
  populateGrid(input,contentArea);
});

document.querySelector("#clear_button").addEventListener("click", () => {
  for(filledcell of document.querySelectorAll(".grid-point.filled")){
    filledcell.className="grid-point";
  }
});

// Creates an nxn grid in containerElement
const populateGrid = function(n, containerElement){
  containerElement.replaceChildren();
  const basisValue = 100/n;
  console.log(basisValue);
  for(let row = 0; row < n; row++){
    for(let col = 0; col < n; col++){
      gridPoint = document.createElement("div");
      gridPoint.className="grid-point";
      gridPoint.style.flexBasis=`${basisValue}%`;
      gridPoint.id=`square${row*n+col}`;
      containerElement.appendChild(gridPoint);
    }
  }
  sizeField.textContent=`${n}x${n}`;
}

const drawGridPoint = function(elm, modeButtons) {
  if(modeButtons[0].checked){
    elm.className="grid-point filled";
  } else if(modeButtons[1].checked){
    elm.className="grid-point";
  }
}

populateGrid(16,contentArea);

contentArea.addEventListener("mouseover", (e) => {
  if(e.buttons == 1){
    drawGridPoint(e.target,modeButtons);
  }
});
contentArea.addEventListener("mousedown", (e) =>{
  if(e.buttons == 1){
    drawGridPoint(e.target,modeButtons);
  }
});


