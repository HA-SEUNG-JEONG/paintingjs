const canvas=document.getElementById("jsCanvas");
const ctx=canvas.getContext("2d");
const colors=document.getElementsByClassName("jsColor");
const range=document.getElementById("jsRange")
const mode=document.getElementById("jsMode");


canvas.width=700;
canvas.height=700;

ctx.strokeStyle="#2c2c2c"; /*색상이나 스타일을 라인에 추가*/
ctx.lineWidth=2.5;

let painting=false;
let filling=false;


function StopPainting(){
    painting=false;
}

function startPainting(){
    painting=true;
}

function onMouseMove(event){
    const x=event.offsetX;
    const y=event.offsetY;
    if(!painting){
        ctx.beginPath();    //클릭하지 않고 마우스를 움직였을 때는 path 시작
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();   //마우스를 움직이는 내내 발생
    }
}


function handleColorClick(event){
    const color=event.target.style.backgroundColor;
    ctx.strokeStyle=color;
}

function handleRangeChange(event){
    const size=event.target.value
    ctx.lineWidth=size;
}

function handleModeClick(){
    if(filling===true){
        filiing=false;
        mode.innerText="Fill"
    }else{
        filling=true;
        mode.innerText="Paint"
    }
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",StopPainting);
    canvas.addEventListener("mouseleave",StopPainting);
}

Array.from(colors).forEach(color=>color.addEventListener("click",handleColorClick))


if(range){
    range.addEventListener("input",handleRangeChange)
}

if(mode){
    mode.addEventListener("click",handleModeClick)
}