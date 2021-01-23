class Slingshot {
    constructor(bodyA,pointB){
        var options={bodyA:bodyA,
            pointB:pointB,
            stifness:0.04,
            length:10}
            this.pointB=pointB;
            this.sling=Constraint.create(options);
            World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null
    }
        
   display(){
       
       if(this.sling.bodyA){
       var pointA=this.sling.bodyA.position;
       var pointB=this.pointB;
       stroke(48,22,8);
       if(pointA.x<70){
       strokeWeight(5);
       line (pointA.x,pointA.y,pointB.x+75,pointB.y-10);
       line(pointA.x,pointA.y,pointB.x+120,pointB.y-15);
       }
       else{
        strokeWeight(3);
        line (pointA.x+30,pointA.y,pointB.x+75,pointB.y-10);
        line(pointA.x+30,pointA.y,pointB.x+120,pointB.y-15);
       }
       }
   }
}