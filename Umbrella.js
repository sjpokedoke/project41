class Umbrella {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
      this.image = loadImage("images/Walking Frame/walking_1.png")
      this.body = Bodies.circle(x,y,50, options);
      this.radius = 50;
      World.add(world, this.body);
    }
    display(){
    imageMode(CENTER)
    image(this.image, this.body.position.x, this.body.position.y+20, 200, 200);
}
}