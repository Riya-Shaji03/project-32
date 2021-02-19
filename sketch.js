const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground, ground2, polygon, rope, backgroundImg
var score = 0
var box, box1, box2, box3, box4, box5, box6
var box7, box8, box9, box10, box11
var box12, box13, box14, box15
var box16, box17, box18, box19, box20


function preload(){
    
	getBackground()
}



function setup() {
	createCanvas(1200,600);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(530,400,350,10)
    ground2 = new Ground(900,200,250,10)

    //Pyramid1/fourth row  
    box = new Box(437,375,30,40)
    box1 = new Box(469,375,30,40)
    box2 = new Box(501,375,30,40)
    box3 = new Box(533,375,30,40)
    box4 = new Box(565,375,30,40)
    box5 = new Box(597,375,30,40)
    box6 = new Box(629,375,30,40)

    //Pyramid1/third row
    box7 = new Box(469,333,30,40)
    box8 = new Box(501,333,30,40)
    box9 = new Box(533,333,30,40)
    box10 = new Box(565,333,30,40)
    box11 = new Box(597,333,30,40)

    //Pyramid1/second row 
    box12 = new Box(501,292,30,40)
    box13 = new Box(533,292,30,40)
    box14 = new Box(565,292,30,40)

    //Pyramid1/first row
    box15 = new Box(533,249,30,40)

    //Pyramid2/third row
    box16 = new Box(836,174,30,40)
    box17 = new Box(868,174,30,40)
    box18 = new Box(900,174,30,40)
    box19 = new Box(932,174,30,40)
    box20 = new Box(964,174,30,40)

    //Pyramid2/second row
    box21 = new Box(868,133,30,40)
    box22 = new Box(900,133,30,40)
    box23 = new Box(932,133,30,40)
    
    //Pyramid2/ first row
    box24 = new Box(900,92,30,40)

    polygon = new Polygon(200,200)
    rope = new Slingshot(polygon.body,{x : 200, y : 200})

}


function draw() {
    Engine.update(engine);
    if(backgroundImg){
        background(backgroundImg)
    };
    textSize(25)
    text("Score :" + score,1050, 40)
    
    ground.display() 
    ground2.display() 
    polygon.display()  
    rope.display()

    box.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()

    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    
    box12.display()
    box13.display()
    box14.display()
    box15.display()

    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()

    box21.display()
    box22.display()
    box23.display()
    box24.display()


    box.score()
    box1.score()
    box2.score()
    box3.score()
    box4.score()
    box5.score()
    box6.score()

    box7.score()
    box8.score()
    box9.score()
    box10.score()
    box11.score()

    box12.score()
    box13.score()
    box14.score()
    box15.score()

    box16.score()
    box17.score()
    box18.score()
    box19.score()
    box20.score()

    box21.score()
    box22.score()
    box23.score()
    box24.score()

    
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased(){
    rope.fly()
}

function keyPressed(){
    if(keyCode === 32){
    rope.attach(polygon.body)
    }
}

async function getBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var jsonResponse = await response.json()
    console.log(response)
    console.log(jsonResponse)
    var dataTime = jsonResponse.datetime
    console.log(dataTime)
    var hour = dataTime.slice(11,13)
    console.log(hour)
    if(hour >= 6 && hour <= 18){
        backgroundImg = loadImage("daySky.jpg")
    }
    else{
        backgroundImg = loadImage("nightSky.jpg")
    }

}
  