class figure{
    constructor(ctx,c){
        this.ctx=ctx
        this.width=c.width
        this.height=c.height
    }
    drawLine(arrPoints){
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'black'
        this.ctx.lineWidth = 2
        for(let i in arrPoints){
            if(arrPoints[i].action=='moveTo'){
                this.ctx.moveTo(arrPoints[i].x, arrPoints[i].y)
            }else if(arrPoints[i].action=='lineTo'){
                this.ctx.lineTo(arrPoints[i].x, arrPoints[i].y)
            }
        }
        this.ctx.stroke()
        this.ctx.closePath();
        this.ctx.restore()
    }
    drawArc(arrPoints){
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'black'
        this.ctx.lineWidth = 2
        for(let i in arrPoints){
            this.ctx.arc(arrPoints[i].x,arrPoints[i].y,arrPoints[i].r,arrPoints[i].startAngle*Math.PI/180,arrPoints[i].endAngle*Math.PI/180)
        }
        this.ctx.stroke()
        this.ctx.closePath();
        this.ctx.restore()
    }
    figure1(arrPointsLine){
        let arrPointsArc=[
            // {x:160,y:284,r:100*Math.SQRT2,startAngle:0,endAngle:360},
            // {x:160,y:284,r:100,startAngle:0,endAngle:360},
            // {x:260,y:184,r:100,startAngle:90,endAngle:180},
            // {x:260,y:384,r:100,startAngle:180,endAngle:270},
            // {x:60,y:384,r:100,startAngle:270,endAngle:360},
            // {x:60,y:184,r:100,startAngle:0,endAngle:90},
        ]
        this.drawLine(arrPointsLine)
        this.drawArc(arrPointsArc)
    }
}

export {
    figure
}