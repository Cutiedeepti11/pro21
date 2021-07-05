class Ball{
constructor(x,y,radius){
    var option={
        restitution: 0.5
    }
this.body=Bodies.circle(x,y,radius,option);
World.add(world,this.body);
this.radius=radius;
}
display(){
var pos=this.body.position;
ellipseMode(RADIUS);
ellipse(pos.x,pos.y,this.radius)
}
}