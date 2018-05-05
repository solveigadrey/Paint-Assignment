var canvas = document.createElement('div');
canvas.classList.add("canvasHolder");
document.body.appendChild(canvas);

var colors = document.createElement('div');
colors.classList.add("colorHolder");

document.body.appendChild(colors);

var Paint95 = {};
var choiceOfColors = ["lightblue", "pink", "lightcoral", "MediumAquaMarine", "burlywood"];
var size = 5;


function newPallet() {
  for (var i = 0; i < choiceOfColors.length; i++) {
    var changecolor = document.createElement('div');
    changecolor.id = choiceOfColors[i];
    changecolor.style.backgroundColor = choiceOfColors[i];
    changecolor.className = "choosenColor";
    colors.appendChild(changecolor);
  };
};

newPallet();


for (var i = 0; i < choiceOfColors.length; i++) {
  document.getElementById(choiceOfColors[i]).addEventListener('click', (event) => {
    var selectedColor = event.target;
    selectedColor = selectedColor.style.backgroundColor;
    //console.log(selectedColor);
    drawIt(selectedColor);
  });
}

function drawIt(selectedColor) {
canvas.addEventListener('mousemove',(event)=>{

console.log("test");
  var x = event.clientX;
  var y = event.clientY;
  newDiv(x,y,selectedColor);
});
};


drawIt();

function newDiv(x, y, selectedColor) {
  //console.log(selectedColor);
  var thediv = document.createElement('div');
  thediv.style.position = 'absolute';
  thediv.style.left = x + 'px';
  thediv.style.top = y + 'px';
  thediv.style.backgroundColor = selectedColor;
  thediv.style.width = size + 'px';
  thediv.style.height = size + 'px';
  canvas.appendChild(thediv);
}
newDiv();
