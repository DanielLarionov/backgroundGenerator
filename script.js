var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var backgroundcolor = document.getElementById("backgroundcolor");
var randomColors = document.getElementById("random");
var imageBackground = document.getElementById("imageChoose");


function setGradient(){
	backgroundcolor.style.background="linear-gradient(to right, "+
	color1.value+
	","
	+color2.value+
	")";
	css.textContent = backgroundcolor.style.background + ";";
}
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }
randomColors.addEventListener("click",randomColorsFunc)
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
setGradient();

function randomColorsFunc(){
	color1.value =  getRandomColor();
	color2.value =  getRandomColor();
	setGradient();
}