class pea{
    constructor(){
        this.body = Bodies.circle(displayWidth/2,600,5);
        World.add(world,this.body);
    }
    display(){
    push();
    translate(width / 2, height / 2+200);
    angleMode(DEGREES); 
    let a = atan2(mouseY - height / 2, mouseX - width / 2);
    rotate(a);
    fill("grey");
    ellipseMode(RADIUS);
    ellipse(70,0,5,5);
    this.body.velocity.a = 3;
    pop();
    }
}