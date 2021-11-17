class Polygon{
    constructor(x,y,radius) {
    
      this.body = Bodies.circle(x,y,radius);
      this.radius = radius;
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
    display(){
      
      push()
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, 50, 50);
      pop();
    }
  };
