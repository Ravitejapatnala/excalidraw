const pencil=document.getElementById("pencil");
let ispencilactive=false;

pencil.addEventListener("click", onpencilclick);

function onpencilclick(){
    ispencilactive= !ispencilactive;
    if(ispencilactive)
    {
        canvas.addEventListener("mousedown", onmousedown);
    }
    else
    {
        canvas.removeEventListener("mousedown", onmousedown);
    }
}