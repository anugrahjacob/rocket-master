var snowman
var ground
var snowball,gameState=0,snowmanImage
 var fireball,fireballGroup,FireballImage,snowballGroup,bgImage
function preload() 
{
  FireballImage=loadImage("astroid.png")
  bgImage=loadImage("bg.jpeg")
  snowmanImage=loadImage("space ship.png")
}
  function setup() {
  createCanvas(windowWidth,windowHeight);
  ground=createSprite(width/2,height-10,width,20)
  snowman=createSprite(750, height-50, 50, 50);
  snowman.addImage(snowmanImage)
  snowman.scale=0.4
  fireballGroup= new Group()
  
  // snowballGroup= new Group
}

function draw() {
  background(bgImage);
  

// console.log(snowman.y)
if(fireballGroup.isTouching(ground))
{
  fireballGroup.bounceOff(ground)
  
}
if(gameState===0)
{

// snowman.x=mouseX
// snowman.y=mouseY
  if(keyDown("space")&&snowman.y>=712)
  {
    snowman.velocityY=-15
  }
   snowman.velocityY+=0.8

  if(keyDown(LEFT_ARROW))
  {
    snowman.x-=2
  }
  if(keyDown(RIGHT_ARROW))
  {
    snowman.x+=2
  }
snowman.collide(ground)
spawnFireBall()
// spawnSnowBall()
if(fireballGroup.isTouching(snowman))
{
  gameState=1
  
}
}
else if(gameState===1)
{
  fireballGroup.destroyEach()
  fireballGroup.destroyEach()
  fireballGroup.destroyEach()
 
  snowman.destroy=(0)
  
  
  
  
  
}
  drawSprites();
}

function spawnFireBall()
{
  if(frameCount%50===0)
  {
    fireball=createSprite(width+10,Math.round(random(50,height-300)),20,20)
    fireball.addImage(FireballImage)
    fireball.scale=0.3
    var position=Math.round(random(1,2))
    if(position===1)
    {
      fireball.x=width+10
      fireball.velocityX=-Math.round(random(5,10))
      fireball.velocityY=Math.round(random(5,10))
      
    }
    else
    if(position===2)
    {
      fireball.x=-10 
      fireball.velocityX=Math.round(random(5,10))
      fireball.velocityY=Math.round(random(2,10))

      
    }
    fireball.lifetime=width/5
    fireballGroup.add(fireball)
    
  }
}

