class Box {
    constructor(x, y, width, height){
        var options = {
            isStatic : false,
            'restitution':0.2,
            'friction': 0.5,
            'density':0.0015
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.Visiblity = 200
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        if(this.body.speed < 3){
        //var angle = this.body.angle;
        push();
        rotate(this.body.angle)
        translate(this.body.position.x, this.body.position.y)
        strokeWeight(2);
        fill(this.color)
        rectMode(CENTER);
        rect(0 ,0 ,this.width, this.height);
        pop();
        }
        else{
        World.remove(world, this.body);  
        push()  
        this.Visiblity = this.Visiblity - 2;
        tint(255,this.Visiblity);
        pop()
        }
      }
      score(){
        if(this.Visiblity < 0 && this.Visiblity >- 50)
        score++
    }
  }
  
  
