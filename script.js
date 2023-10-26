const canvas=document.querySelector("canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const c= canvas.getContext("2d");

let previous=null;

function onmousedown(event){
    previous=[event.clientX, event.clientY];
    c.lineWidth=4;
    canvas.addEventListener("mousemove", onmousemove);
    canvas.addEventListener("mouseup", onmouseup);
}

function onmousemove(event){
    let current=[event.clientX, event.clientY];
    c.beginPath();
    c.moveTo(...previous);
    c.lineTo(...current);
    c.stroke();
    c.closePath();
    previous=current;
}

function onmouseup(event){
    canvas.removeEventListener("mousemove", onmousemove);
}