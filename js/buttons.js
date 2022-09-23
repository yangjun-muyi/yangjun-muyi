class buttons{
    constructor(ctx,c){
        this.ctx=ctx
        this.width=c.width
        this.height=c.height
    }
    drawStartButton(buttonsArr){
        let img=wx.createImage()
        img.src=buttonsArr.play.src
        img.onload=()=>{
            this.ctx.save()
            this.ctx.drawImage(img,buttonsArr.play.x,buttonsArr.play.y,buttonsArr.play.width,buttonsArr.play.height)
            this.ctx.restore()
        }
    }
    
    
}

export {
    buttons
}