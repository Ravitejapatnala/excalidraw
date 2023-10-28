const canvas=document.querySelector("canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const c= canvas.getContext("2d");

const actionButtons = document.querySelectorAll("#actionbuttons > .btn");

const actions={
    freehand: false,
    circle: false,
    rectangle: false,
    eraser: false,
    line: false,
}

function onActionClick(element){
    const actionName=element.id;
    actionButtons.forEach(btn => {
        if(btn.classList.contains("active") && btn.id !== actionName)
        {
            btn.classList.remove("active");
        }
    })
    element.classList.toggle("active");

    actionButtons.forEach(btn => {
        const isActive=btn.classList.contains("active");
        actions[btn.id]= isActive;
    })
    console.log(actions);
}






















































// function onmousedown(event){
//     previous=[event.clientX, event.clientY];
//     c.lineWidth=4;
//     canvas.addEventListener("mousemove", onmousemove);
//     canvas.addEventListener("mouseup", onmouseup);
// }

// function onmousemove(event){
//     let current=[event.clientX, event.clientY];
//     c.beginPath();
//     c.moveTo(...previous);
//     c.lineTo(...current);
//     c.stroke();
//     c.closePath();
//     previous=current;
// }

// function onmouseup(event){
//     canvas.removeEventListener("mousemove", onmousemove);
// }