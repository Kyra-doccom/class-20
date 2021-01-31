var fixRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixRect = createSprite(200, 200, 80, 50);
movingRect= createSprite(500,200,50,80);
fixRect.shapeColor="purple";
movingRect.shapeColor = "purple";
}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(movingRect.x - fixRect.x < movingRect.width/2 + fixRect.width/2 &&
    fixRect.x - movingRect.x <movingRect.width/2 + fixRect.width/2 &&
    movingRect.y - fixRect.y < movingRect.height/2 + fixRect.height/2 &&
    fixRect.y - movingRect.y < movingRect.height/2 + fixRect.height/2){
    fixRect.shapeColor="blue";
    movingRect.shapeColor = "blue";
  }
else{
  fixRect.shapeColor="purple";
  movingRect.shapeColor = "purple";
}
  drawSprites();
}