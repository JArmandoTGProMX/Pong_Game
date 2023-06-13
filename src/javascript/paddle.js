class Paddle {
    constructor(isLefth=false){
        this.w = 20;
        this.h = 100;
        this.x = isLefth ? this.w: width-this.w;
        this.y = height/2-this.h/2;
        this.step = 0;
    }

    draw() {
        rectMode(CENTER);
        rect(this.x,this.y,this.w,this.h);
    }

    update(){
        if(this.y+this.step-(this.h/2) <= 0 || this.y+this.step+(this.h/2) >= height){
            return
        }
        this.y += this.step;
    }

    move(dir){
        this.step = dir
    }
};