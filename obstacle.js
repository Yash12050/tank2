class Obstacle {
  constructor(){
    var options = {
      isStatic:false
    }
    
    this.body = Bodies.circle(random(400,900),50,30,options);
    World.add(world,this.body);
  }

  display() {
  ellipseMode(RADIUS);
  fill("grey");
  ellipse(this.body.position.x,this.body.position.y,30,30);
  }
}
