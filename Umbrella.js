class Umbrella {
    
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0.5,
            density: 0.6,
           
	}
        this.body = Bodies.circle(x, y, 82, options)
        this.image = loadImage('/,,/walking_1.png')
        World.add(world , this.body)
    }
    display() {
        push()
        strokeWeight(0)
        var pos = this.body.position
        
        ellipseMode(RADIUS)
        translate(pos.x, pos.y)
        
        image(this.image , 0 , 0 , 300 ,300)
        pop()
    }

   
}