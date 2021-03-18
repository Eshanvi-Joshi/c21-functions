var fixedRect, movingRect;

function setup(){
  createCanvas (400, 400);
  fixedRect = createSprite(300,200,50,300);
  movingRect = createSprite(200,200,100,30);
  
  car1 = createSprite(100, 100, 30, 30);
  car1.velocityX = 3;

  car2 = createSprite(100, 200, 30, 30);
  car2.velocityX = 3;
  movingRect.debug = true;
  fixedRect.debug = true;
  
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";
}



function draw() {
  
  background("white");

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  //calling function with argument
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }


  //collide algorithm
  collide (fixedRect, car1);
 
  //bouncOff algorithm
  bounceOff (fixedRect, car2);

  drawSprites()
}

//functions with parameters

function isTouching(object1,object2){
  if(object1.x - object2.x <= object1.width/2 + object2.width/2 &&
    object2.x - object1.x <= object1.width/2 + object2.width/2 &&
    object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object1.height/2 + object2.height/2)
    {
      return true;
    }
    else{
      return false;
    }
}

function collide(object1,object2){
  if(object1.x - object2.x <= object1.width/2 + object2.width/2)
    {
     object2.velocityX = 0; 
    } 
}

function bounceOff(object1, object2){
  if(object1.x - object2.x <= object1.width/2 + object2.width/2)
  {
   object2.velocityX = object2.velocityX * (-1); 
  } 

}