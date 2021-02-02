class Stone {
    
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0.5,
            density: 0.6,
           
	}
        this.body = Bodies.circle(x, y, 3, options)
        World.add(world , this.body)
    }
    display() {
        push()
        strokeWeight(0)
        var pos = this.body.position
        
        ellipseMode(RADIUS)
        translate(pos.x, pos.y)
        fill("blue")
        ellipse(pos.x , pos.y , 3 ,3)
        pop()
    }

    update() {
        if(this.body.position.y > 700){
            Matter.Body.setPosition(this.body , {x: random(10, 800) , y: random(0 ,100)})
        }
    }
}