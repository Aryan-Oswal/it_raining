
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var a
var drops = []
var b;
var img1, img1,img3,img4;
function preload()
{
	img1 = loadImage("thunderbolt/1.png")
	img2 = loadImage("thunderbolt/2.png")
	img3 = loadImage("thunderbolt/3.png")
	img4 = loadImage("thunderbolt/4.png")

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    a = new Stone(100 , 100)
    b = new Umbrella(150,200)
}


function draw() {
background('black')

    if(frameCount % 80 === 0 ){
        for(var i = 0; i < 100; i++){
            drops.push(new Stone(random(10 , 800), random( 0 ,100)))

        }

    }
    drops.map(drop => {
        drop.display()
        drop.update()
    })

    var rand = Math.round(random(1 , 4))
    console.log(rand)


    if(frameCount % 80 === 0 ){
        switch(rand){
        case 1:
            image(img1 , random(100, 700) , 10 , 300, 300)

            case 2:
            image(img2 , random(100, 700) , 10, 300, 300)
            case 3:
            image(img3 , random(100, 700) , 10, 300, 300)
            case 4:
            image(img4 , random(100, 700) , 10, 300, 300)
    }
    }
    
    
        
	
    Engine.update(engine)
	
     a.display()
     a.update()
     b.display()
 
}
