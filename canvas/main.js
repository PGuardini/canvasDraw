    var width = 500;//getElementById('width').value;
    var height = 300;//getElementById('height').value;

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