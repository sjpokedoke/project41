const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var umbrella, createdthunder;
var maxDrops = 100;
var drops = [];
var thunder, thunder1img, thunder2img, thunder3img, thunder4img;
function preload(){
    thunder1img = loadImage("images/thunderbolt/1.png");
    thunder2img = loadImage("images/thunderbolt/2.png");
    thunder3img = loadImage("images/thunderbolt/3.png");
    thunder4img = loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(400, 700)
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200, 600)

   for (var i = 0; i < maxDrops; i++) {
       drops.push(new Drop(random(0, 400), random(0, 400)))
   }
}

function draw(){
    background(0)
    Engine.update(engine);

    if (frameCount%80===0) {
        thunder = createSprite(random(0, 400), 50)
        rand = Math.round(random(1,4))
        createdthunder = frameCount
        switch (rand) {
                case 1: thunder.addImage("thunder", thunder1img)
                break;
                case 2: thunder.addImage("thunder", thunder2img)
                break;
                case 3: thunder.addImage("thunder", thunder3img)
                break;
                case 4: thunder.addImage("thunder", thunder4img)
                break;
                default:thunder.addImage("thunder", thunder1img)
                break;
        }
        randomscale = random(0.2, 0.8)
        thunder.scale = randomscale;
    }
    if (createdthunder+10===frameCount) {
        thunder.destroy();
    }
    umbrella.display();
    for (var i = 0; i < maxDrops; i++) {
        drops[i].show();
        drops[i].update();
    }
    drawSprites();
} 