class Bullet{
    constructor(bullet,ctx,screen,x=50,y=0,offsetY=2){
        this.x=Math.random()*(screen.width-10);
        this.y=screen.height;
        this.offsetY=offsetY;
        this.bullet=bullet;
        this.ctx=ctx;
        this.heightMax=screen.height;
    }
    move(){
        this.y-=this.offsetY;
        if(this.y<0){
            this.y=this.heightMax
        }
        this.ctx.drawImage(this.bullet, 0, 0, 90,90, this.x, this.y, 10, 10);
    }
}

export {Bullet}