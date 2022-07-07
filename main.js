canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
color="blue";
ctx.beginPath();
ctx.strokeStyle =color;
ctx.lineWidth=2;
ctx.arc(200,210,70,0,2 *Math.PI);
ctx.stroke();

color="black";
ctx.beginPath();
ctx.strokeStyle =color;
ctx.lineWidth=2;
ctx.arc(350,210,70,0,2 *Math.PI);
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle =color;
ctx.lineWidth=2;
ctx.arc(500,200,70,0,2 *Math.PI);
ctx.stroke();

color="yellow";
ctx.beginPath();
ctx.strokeStyle =color;
ctx.lineWidth=2;
ctx.arc(270,300,70,0,2 *Math.PI);
ctx.stroke();

color="green";
ctx.beginPath();
ctx.strokeStyle =color;
ctx.lineWidth=2;
ctx.arc(440,290,70,0,2 *Math.PI);
ctx.stroke();

