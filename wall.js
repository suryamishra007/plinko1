class Wall{
    constructor(x,y,width,height)
    {
        var option = {
            isStatic:true,

        }

        this.height = height
        this.width = width
        this.x = x
        this.y = y

        this.body = Bodies.rectangle(x,y,this.width,this.height,option)
        World.add(world,this.body)

    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push() 
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("black")
        rect(0,0,this.width,this.height)
        pop() 
    }
}