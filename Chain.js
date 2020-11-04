class Chain{
    constructor(bodyA, ponte){
        var options = {
            bodyA: bodyA,
            pointB: ponte,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = ponte 
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
       fly(){
           this.chain.bodyA = null;
       }
    display(){
        if(this.chain.bodyA != null){

        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
}