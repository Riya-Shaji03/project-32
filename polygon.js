class Polygon{
    constructor(x,y){
        var options = {
            restitution : 0.8,
            density : 0.5,
            friction : 0.3
        }
        this.body = Bodies.circle(x,y,20,[options]);
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
        
    }
    display(){
        push()
        fill("white");
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 80, 80);
        pop();
    }
};