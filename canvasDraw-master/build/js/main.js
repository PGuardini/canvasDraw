function fallBackground(){document.getElementById("fall").classList.add("close")}var width=900,height=500,canvas=document.getElementById("canvas");canvas.setAttribute("width",width),canvas.setAttribute("height",height);var ctx=canvas.getContext("2d"),drawing=!1;function clean(){ctx.clearRect(0,0,width,height),ctx.beginPath()}canvas.onmousedown=function(evt){ctx.moveTo(evt.clientX,evt.clientY),drawing=!0},canvas.onmouseup=function(){drawing=!1},canvas.onmousemove=function(evt){drawing&&(ctx.lineTo(evt.clientX,evt.clientY),ctx.stroke())};