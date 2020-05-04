var r1,r2,r3,r4,r5,r6,r7,r8,r9,r10;

function setup() {
  createCanvas(800,400);
  r1 = createSprite(50,170,20,230);
  r2 = createSprite(90,200,50,200);
  r3 = createSprite(150,220,50,180);
  r4 = createSprite(210,270,50,130);
  r5 = createSprite(270,290,50,110);
  r6 = createSprite(330,260,50,140);
  r7 = createSprite(390,220,50,180);
  r8 = createSprite(450,200,50,200);
  r9 = createSprite(510,180,50,270);
  r10 = createSprite(550,160,20,240);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}