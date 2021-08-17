canvas = document.getElementById("myCanvas"); 
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "lime";
ctx.lineWidth=4;
ctx.arc(250 , 250 , 80 , 0 , 2*Math.PI);
ctx.stroke();