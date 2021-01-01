class Bobs{
    constructor(x,y){
        var ballOption={
            isStatic:false,
            frictionAir:0.02,
           // slop:1,
            //inertia:Infinity
        }
        this.body=Bodies.circle(x,y,20,ballOption)
        this.x=x;
        this.y=y;
        //this.color=color;
        World.add(world,this.body)
    
     } 
 
 display(){
      var angle=this.body.angle;
      var pos=this.body.position;
      push()
      translate(pos.x,pos.y)
     // rotate(angle)
     
     ellipseMode(RADIUS)
      fill("black")
      stroke("white")
        ellipse(0,0,20,20) 
        pop()
 }
 
 }