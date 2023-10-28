const undo= document.getElementById("undo");
const redo=document.getElementById("redo");

function onUndo(){
    if(historyIndex)
    {
        history.pop();
        historyIndex--;
        if(historyIndex===0)
        {
            c.clearRect(0, 0, canvas.width, canvas.height);
        }
        else{
            c.putImageData(history[historyIndex-1], 0, 0)
        }
    }
}


//have doubts in getting Imagedata for redo operation.
function onRedo(){
    if(redoIndex===0)
    {
        c.clearRect(0, 0, canvas.width, canvas.height);
    }
    else
    {
        c.putImageData(redoArray[redoIndex-1]);
    }
}

undo.addEventListener("click", onUndo);
redo.addEventListener("click", onRedo);