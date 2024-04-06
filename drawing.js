let initialPosition=null;
let startIndex;

const history=[];
let historyIndex=-1;

const redoArray=[];
let redoIndex=0;

function onMouseDown(e){
    if(!(actions.freehand || actions.circle || actions.rectangle || actions.eraser || actions.line))
    {
        return;
    }
    initialPosition = {x: e.clientX, y: e.clientY};
    startIndex=history.length-1;
    c.strokeStyle="black";
    c.lineWidth="4";

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
}

function onMouseMove(e){
    const currentPosition = {x: e.clientX, y: e.clientY};
    if(actions.freehand){
        drawFreeHand(currentPosition);
    }
    else if(actions.circle){
        resetToOriginalImage();
        drawCircle(currentPosition);
    }
    else if(actions.rectangle){
        resetToOriginalImage();
        drawRectangle(currentPosition);
    }
    else if(actions.line){
        resetToOriginalImage();
        drawLine(currentPosition);
    }
    else if(actions.eraser){
        handleEraser(currentPosition);
    }
}

function onMouseUp(e){
    history.push(c.getImageData(0, 0, canvas.width, canvas.height));
    historyIndex++;
    canvas.removeEventListener("mousemove", onMouseMove);
    canvas.removeEventListener("mouseup", onMouseUp);
}

canvas.addEventListener("mousedown", onMouseDown);

function resetToOriginalImage(){
    if(startIndex!==-1)
    {
        c.putImageData(history[startIndex], 0, 0);
    }
    else
    {
        c.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function drawFreeHand(currentPosition){
    c.beginPath();
    c.moveTo(initialPosition.x, initialPosition.y);
    c.lineTo(currentPosition.x, currentPosition.y);
    c.lineCap="round";
    c.lineJoin="round";
    c.stroke();
    c.closePath();
    initialPosition = currentPosition;
    history.push(c.getImageData(0, 0, canvas.width, canvas.height));
    historyIndex++;
}

function drawCircle(currentPosition) {
    c.beginPath();
    const radius = Math.sqrt((currentPosition.x - initialPosition.x)**2 + (currentPosition.y - initialPosition.y)**2); // Corrected typo here
    c.arc(initialPosition.x, initialPosition.y, radius, 0, 2 * Math.PI, true);
    c.stroke();
    history.push(c.getImageData(0, 0, canvas.width, canvas.height));
    historyIndex++;
}

function drawRectangle(currentPosition){
    c.beginPath();
    let width = currentPosition.x - initialPosition.x;
    let height = currentPosition.y - initialPosition.y;
    c.strokeRect(initialPosition.x, initialPosition.y, width, height);
    history.push(c.getImageData(0, 0, canvas.width, canvas.height));
    historyIndex++;
}

function drawLine(currentPosition){
    c.beginPath();
    c.moveTo(initialPosition.x, initialPosition.y);
    c.lineTo(currentPosition.x, currentPosition.y);
    c.stroke();
    history.push(c.getImageData(0, 0, canvas.width, canvas.height));
    historyIndex++;
}

function handleEraser(currentPosition){
    c.clearRect(currentPosition.x, currentPosition.y, 15, 15);
    history.push(c.getImageData(0, 0, canvas.width, canvas.height));
    historyIndex++;
}


































































// const pencil=document.getElementById("pencil");
// let ispencilactive=false;

// pencil.addEventListener("click", onpencilclick);

// function onpencilclick(){
//     ispencilactive= !ispencilactive;
//     if(ispencilactive)
//     {
//         canvas.addEventListener("mousedown", onmousedown);
//     }
//     else
//     {
//         canvas.removeEventListener("mousedown", onmousedown);
//     }
// }