var canvas = document.getElementById("hi");
if (canvas.getContext) 
{
 var ctx = canvas.getContext('2d');
 ctx.lineWidth = "3";
 ctx.strokeStyle = "red";
 ctx.strokeRect(5, 5, 300, 250);
 ctx.lineWidth = "25";
 ctx.lineJoin = "bevel";
 ctx.strokeStyle = "blue";
 ctx.strokeRect(150, 200, 300, 150);
 ctx.lineJoin = "round";
 ctx.lineWidth = "45";
 ctx.strokeStyle = "green";
 ctx.strokeRect(250, 50, 150, 250);
}