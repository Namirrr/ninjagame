var bg, bgImg
var guide, guideImg
var player, playerImg
var enemy, enemyImg
var p1, p1Img,  p2, p2Img, p3, p3Img
var edges
var tree1
var bouncer
var obs, obsImg
var arrow, arrowImg
var obstacle
var obstacle2
var chest, chestImg
var cloud, cloudImg
var spikes, spikesImg

var gamestate = 'play'



function preload() {
playerImg = loadAnimation("rogue Run/run1.png", "rogue Run/run2.png", "rogue Run/run3.png", "rogue Run/run4.png", "rogue Run/run5.png", "rogue Run/run6.png", "rogue Run/run7.png", "rogue Run/run8.png")
guideImg = loadAnimation("Run/run1.png", "Run/run2.png", "Run/run3.png", "Run/run4.png", "Run/run5.png", "Run/run6.png", "Run/run7.png", "Run/run8.png")

bgImg = loadImage("Background.png")

p1Img = loadImage("Tile_11.png")
p2Img = loadImage("Tile_12.png")
p3Img = loadImage("Tile_13.png")

tree1 = loadImage("1.png")

chestImg = loadImage("chest1.png")

obsImg = loadImage("6.png")

arrowImg = loadImage("pointer.png")

cloudImg = loadImage("cloud.png")

spikesImg = loadImage("spikes.png")


}

function setup() {
  createCanvas(700,400);
  edges = createEdgeSprites()
  bg = createSprite(350,200)
  bg.addImage(bgImg)
  bg.scale = 1.2

  player = createSprite(183, 200, 50, 50);
  player.addAnimation("run",playerImg)

  

  

 obstacle = createSprite(10, 110, 20, 20)
 obstacle.shapeColor = "red"
 obstacle.velocityX = 3

 obstacle2 = createSprite(10, 260, 20, 20)
 obstacle2.shapeColor = "red"
 obstacle2.velocityX = 3
 

  bouncer = createSprite(473, 290, 20, 20)
  bouncer.shapeColor = "blue"

  cloud = createSprite(220, 120)
  cloud.addImage(cloudImg)
  cloud.scale = 0.45
  
  spikes = createSprite(120, 87)
  spikes.addImage(spikesImg)
  spikes.scale = 0.15


  tree = createSprite(360, 170)
  tree.addImage(tree1)
  tree.scale = 0.75

  arrow = createSprite(213, 325)
  arrow.addImage(arrowImg)
  arrow.scale = 2

  chest = createSprite(70, 60)
  chest.addImage(chestImg)
  chest.scale = 0.06


 
  

  
  
  player.debug = true
  player.setCollider("circle", 1, 10, 25)


  p1 = createSprite(153, 350)
  p1.addImage(p1Img)

  p2 = createSprite(183, 350)
  p2.addImage(p2Img)

  p3 = createSprite(213, 350)
  p3.addImage(p3Img)
 
  p4 = createSprite(333, 350)
  p4.addImage(p1Img)

  p5 = createSprite(363, 350)
  p5.addImage(p2Img)

  p6 = createSprite(393, 350)
  p6.addImage(p3Img)

  p7 = createSprite(473, 300)
  p7.addImage(p1Img)

  p8 = createSprite(503, 300)
  p8.addImage(p2Img)

  p9 = createSprite(523, 300)
  p9.addImage(p3Img)

  p10 = createSprite(330, 220)
  p10.addImage(p1Img)

  p11 = createSprite(360, 220)
  p11.addImage(p2Img)

  p12 = createSprite(390, 220)
  p12.addImage(p3Img)

  p13 = createSprite(40, 90)
  p13.addImage(p1Img)

  p14 = createSprite(70, 90)
  p14.addImage(p2Img)

  p15 = createSprite(100, 90)
  p15.addImage(p3Img)

  

  
  
 
  
}

function draw() {
  background("black");  
  drawSprites();

console.log(player.y)

if(gamestate = 'play'){
  if(keyDown("RIGHT_ARROW")) {
    player.x = player.x + 5
    player.mirrorX(1)
  }

  if(keyDown("LEFT_ARROW")) {
    player.x = player.x - 5
    player.mirrorX(-1)
  }
 collide()

 console.log(player.y)
  if(keyDown("UP_ARROW")&& player.y >= 299){
    player.velocityY= -10
  }
player.velocityY = player.velocityY + 0.3

  if(player.isTouching(spikes) || player.isTouching(obstacle) || player.isTouching(obstacle2)) {
    gamestate = 'end'
  }
}

if(gamestate = 'end'){
  if(player.isTouching(edges[3])) {
    reset();
  } 


  if(player.isTouching(obstacle) || player.isTouching(obstacle2)) {
    reset();
  }
  if(player.isTouching(spikes)) {
    reset();
  }
}



  if(player.isTouching(obstacle) || player.isTouching(obstacle2)) {
    reset();
  }

  

if(player.isTouching(bouncer)) {
  player.x = 375
  player.y = 120
}

  

  
  obstacle.bounceOff(edges)
  obstacle2.bounceOff(edges)
}

function reset() {
  player.velocityX = 0
  player.velocityY = 0
  player.x = 163
  player.y = 280
}

function collide(){
  player.collide(p1)
  player.collide(p2)
  player.collide(p3)
  player.collide(p4)
  player.collide(p5)
  player.collide(p6)
  player.collide(p7)
  player.collide(p8)
  player.collide(p9)
  player.collide(p10)
  player.collide(p11)
  player.collide(p12)
  
  
  player.collide(tree)

  player.collide(cloud)
}