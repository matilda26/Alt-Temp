const canvas = document.getElementById("myCanvas");
let dx = 4;
let dy = 4;
let y = 150;
let x = 200;
let screenHeight, screenWidth, canvasInnerH, canvasInnerW;
let context;
let circleFill = "#F5FFF1";

window.onload = window.onresize = function () {
   screenHeight = document.body.clientHeight;
   screenWidth = document.body.clientWidth;
   canvasInnerH = document.body.clientHeight - 48;
   canvasInnerW = document.body.clientWidth - 48;
   canvas.width = screenWidth
   canvas.height = screenHeight
};

function draw() {
   context = myCanvas.getContext('2d');
   context.clearRect(0, 0, screenWidth, screenHeight);
   var img = document.getElementById("logo");
   context.drawImage(img, x, y);

   if (x < 0 || x > screenWidth)
      dx = -dx;
   if (y < 0 || y > screenHeight)
      dy = -dy;
   x += dx;
   y += dy;

}
setInterval(draw, 10);


window.addEventListener('keydown', (event) => {
   if (event.keyCode === 18) {
      document.body.style.backgroundColor = '#F5FFF1';
   }
})

window.addEventListener('keyup', (event) => {
   if (event.keyCode === 18) {
      document.body.style.backgroundColor = '#202020';
   }
})