let ctx=document.getElementById("myCanvas").getContext("2d");
let minPadding=0;
let ballCount=150;

function resize(){
    window.GAME_WIDTH=window.innerWidth-2*minPadding;
    window.GAME_HEIGHT=window.innerHeight-2*minPadding;
    ctx.canvas.width=window.GAME_WIDTH;
    ctx.canvas.height=window.GAME_HEIGHT;
}
resize();
let balls=[];
for(let i=0;i<ballCount;i++){
    balls.push(new Ball(i));
}
console.log(balls)
function nextFrame(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    requestAnimationFrame(nextFrame)
    balls.forEach((ball,index)=>{
        ball.collision(balls);
        ball.update();
        ctx.beginPath();
        ctx.arc(Math.round(ball.position.x),Math.round(ball.position.y)
                ,Math.round(ball.radius),0,2*Math.PI);
        ctx.fillStyle=ball.color;
        ctx.fill();
    })
}
window.addEventListener("resize",resize)
requestAnimationFrame(nextFrame);
