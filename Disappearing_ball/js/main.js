var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");


var x= 100;
var y=70;
var r=50;

var draw = function() {


context.fillStyle="orange";
context.beginPath();
context.arc(mouseX, mouseY, r, 0, 2*Math.PI);
context.fill();

}
draw();
