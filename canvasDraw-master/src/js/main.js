function fallBackground(){
    var background = document.getElementById('fall');
    background.classList.add('close');
}
var width = 900;//getElementById('width').value;
var height = 500;//getElementById('height').value;

var canvas = document.getElementById("canvas");
// "width = attribute name"
canvas.setAttribute("width", width);
canvas.setAttribute("height", height);

var ctx = canvas.getContext('2d');

var drawing = false;

canvas.onmousedown = function(evt){
    ctx.moveTo(evt.clientX, evt.clientY);
    drawing = true;
}
canvas.onmouseup = function(){
    drawing = false;
}
canvas.onmousemove = function(evt){
    if(drawing){
        ctx.lineTo(evt.clientX, evt.clientY);
        ctx.stroke();
    }
}
function clean(){
    ctx.clearRect(0,0,width,height);
    ctx.beginPath();
}
//change color

function color(){
	ctx.beginPath();
	var color = document.getElementById("color");
	var hex = color.value;
	ctx.strokeStyle = hex;
	ctx.closePath();
}

function eraser(){
	ctx.beginPath();
	ctx.strokeStyle = "#F5F5DC";
	ctx.closePath();
}

//see later http://perfectionkills.com/exploring-canvas-drawing-techniques/