function setup() {
  createCanvas(1200,800); 
  fixedrect = createSprite(200, 200, 50, 80);
  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor = "green";
  fixedrect.shapeColor ="green";

}

function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
    fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 && 
    movingrect.y- fixedrect.y< movingrect.width/2 + fixedrect.width/2  &&
    fixedrect.y - movingrect.y < movingrect.width/2 + fixedrect.width/2 ){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "blue";
  }
  else{
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }
  drawSprites();
}
