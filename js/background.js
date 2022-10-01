class background{
    constructor(c,ctx,img='img/bg.png'){
        this.img=wx.createImage()
        this.img.src=img
        this.width=c.width
        this.height=c.height
        this.ctx=ctx
        this.drawBackground()
    }
    drawBackground(){
        this.img.onload=()=>{
            this.ctx.save()
            this.ctx.drawImage(this.img,0,0,this.width,this.height)
            console.log(4)
            this.ctx.restore()
        }
    }
}

export {
    background
}