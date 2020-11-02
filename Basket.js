class Basket{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            density: 1.0
        }
        this.width = width;
        this.height = height-10;
        this.body = Bodies.rectangle(x, y, width, height, options);
        //this.image = loadImage("Pics/dustbingreen.png");
        World.add(world, this.body);
    }
    display(){
        //rectMode(CENTER);
        //push();
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        //image(this.image, 650, 650, 200,200);
        //pop();
    }
}
