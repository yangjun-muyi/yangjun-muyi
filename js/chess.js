class chess{
    constructor(ctx,img,x,y,selfOffsetX=25,selfOffsetY=25){
        this.img=wx.createImage()
        this.img.src=img
        this.ctx=ctx
        this.x=x
        this.y=y
        this.selfWidth=25
        this.selfHeight=25
        this.stepLengthX=false
        this.stepLengthY=false
        this.stepNum=15
    }
    drawChess(){
        this.img.onload=()=>{
            console.log(123);
            this.ctx.save()
            this.ctx.drawImage(this.img,this.x-this.selfWidth/2,this.y-this.selfHeight/2,this.selfWidth,this.selfHeight)
            this.ctx.restore()
        }
    }
    moveStep(startX,startY,endX,endY,loop){
        if(startX==endX||startY==endY){
            this.x=endX
            this.y=endY
        }else{
            if(!this.stepLengthX){
                this.stepLengthX=(endX-startX)/this.stepNum
                this.stepLengthY=(endY-startY)/this.stepNum
            }
            this.x=startX+this.stepLengthX
            this.y=startY+this.stepLengthY
        }
        this.ctx.save()
        this.ctx.drawImage(this.img,this.x-this.selfWidth/2,this.y-this.selfHeight/2,this.selfWidth,this.selfHeight)
        this.ctx.restore()
        if(loop==this.stepNum){
            this.stepLengthX=false
            this.stepLengthY=false
        }
    }
}

export {
    chess
}