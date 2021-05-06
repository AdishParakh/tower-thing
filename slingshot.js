class Slingshot{
	constructor(body1,pointB)
	{

		var options={
			bodyA:body1,
			pointB:pointB,

		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}
fly (){
	this.rope.bodyA=null
}
attach (){
	this.rope.bodyA=bodyA
}
display()
	{
		if (this.rope.bodyA){
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.pointB

		strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
	}
	}
}