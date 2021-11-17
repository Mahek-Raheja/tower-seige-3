const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,polygon;


function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,30);
    stand1 = new Ground(390,300,250,10);
    stand2 = new Ground(700,200,200,10);

    block1 = new Box(300,275,30,40);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);


    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);


    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);

    block16 = new Box(390,155,30,40);

    b1 = new Box(640,175,30,40);
    b2 = new Box(670,175,30,40);
    b3 = new Box(700,175,30,40);
    b4 = new Box(730,175,30,40);
    b5 = new Box(760,175,30,40);


    b6 = new Box(670,135,30,40);
    b7 = new Box(700,135,30,40);
    b8 = new Box(730,135,30,40);


    b9 = new Box(700,95,30,40);

    polygon = new Polygon(50,200,20);
    slingshot = new SlingShot(polygon.body,{x:200,y:200});
  
}

function draw(){
    gettime();
    if(background)
    if(hour<0600 && hour>2000){
        background("greyQ");
    }
    else{
        background("white");
    }
    

    Engine.update(engine);
    //strokeWeight(4);
   
    ground.display();
    stand1.display();
    stand2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    polygon.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    
    slingshot.display();

    
   

}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}

async function gettime(){
    var time = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var jsontime = await time.json();
    var datetime = jsontime.datetime;
    var hour = datetime.slice(11,15);
    console.log(hour);

    

}