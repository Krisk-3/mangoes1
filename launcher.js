class launcher {
    constructor(bodyA,pointB){
       var options = {
           bodyA : bodyA,
           pointB : pointB,
           length : 10,
           stiffness :0.05
       }
       this.pointB = pointB
       this.Sling = Constraint.create(options)
       World.add(world,this.Sling)
      
    }
    fly(){
       this.Sling.bodyA = null   
      }
    attach(body){
       this.Sling.bodyA=body
    }
    display(){
    if(this.Sling.bodyA){
    var pointA = this.Sling.bodyA.position
    var pointB = this.pointB
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
   }
}
