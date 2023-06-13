class Ball{
    constructor(){
        this.r = 10;
        this.reset();
        this.a = 0.05;
    }

    draw(){
        ellipse(this.x,this.y,this.r*2);
    }

    move(){
        this.x += this.stepX;
        this.y += this.stepY;
    }

    edge(){
        if(this.y-this.r <= 0 || this.y+this.r >= height){
            this.stepY = -this.stepY;
        }
        if(this.x-this.r <= 0 || this.x -this.r >= width){
            this.reset()
        }
    }

    reset(){
        const SPEED = 3;
        this.stepX = SPEED * random([-1,1]);
        this.stepY = SPEED * random([-1,1]);
        this.x = width/2-this.r/2;
        this.y = height/2-this.r/2;
    }
}