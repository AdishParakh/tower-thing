class Block{
    constructor(x,y,width,height){
        var options={
            friction:0.3,
            restitution:0.8,
            density:0.4
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position
        rectMode(CENTER);
        push();
        translate(pos.x,pos.y);
        rect(0,0,this.width,this.height);
        pop();
       
    }

}