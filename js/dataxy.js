class dataxy {
    constructor(width, height, offsetTouch=60) {
        this.width = width
        this.height = height
        this.w_i=width/ 5
        this.h_i=height / 6
        this.offsetTouch=offsetTouch//点击区域对外平均外延值
    }
    getChessPointInitArr() {
        const x_i = this.width / 10
        const y_i = this.height / 14
        const data = [
            { img: 'img/1.png',x: x_i, y: y_i},
            {img: 'img/1.png',x: x_i + 25,y: y_i},
            {img: 'img/1.png',x: x_i + 50,y: y_i},
            {img: 'img/1.png',x: x_i + 75,y: y_i},
            {img: 'img/4.png',x: x_i * 9 - 75,y: y_i * 13},
            {img: 'img/4.png',x: x_i * 9 - 50,y: y_i * 13},
            {img: 'img/4.png',x: x_i * 9 - 25,y: y_i * 13},
            {img: 'img/4.png',x: x_i * 9,y: y_i * 13},
        ]
        return data
    }
    getChessPointArr() {
        const w_i = this.w_i
        const h_i = this.h_i
        const data=[
            {x:w_i,y:h_i},{x:w_i*2,y:h_i},{x:w_i*3,y:h_i},{x:w_i*4,y:h_i},
            {x:w_i,y:h_i*2},{x:w_i*2,y:h_i*2},{x:w_i*3,y:h_i*2},{x:w_i*4,y:h_i*2},
            {x:w_i,y:h_i*3},{x:w_i*2,y:h_i*3},{x:w_i*3,y:h_i*3},{x:w_i*4,y:h_i*3},
            {x:w_i,y:h_i*4},{x:w_i*2,y:h_i*4},{x:w_i*3,y:h_i*4},{x:w_i*4,y:h_i*4},
            {x:w_i,y:h_i*5},{x:w_i*2,y:h_i*5},{x:w_i*3,y:h_i*5},{x:w_i*4,y:h_i*5},
        ]
        return data
    }
    getFigureArr() {
        const w_i = this.w_i
        const h_i = this.h_i
        const data = [
            {
                action: 'moveTo',
                x: w_i,
                y: h_i
            },
            {
                action: 'lineTo',
                x: w_i*4,
                y: h_i
            },
            {
                action: 'moveTo',
                x: w_i,
                y: h_i*2
            },
            {
                action: 'lineTo',
                x: w_i*4,
                y: h_i*2
            },
            {
                action: 'moveTo',
                x: w_i,
                y: h_i*3
            },
            {
                action: 'lineTo',
                x: w_i*4,
                y: h_i*3
            },
            {
                action: 'moveTo',
                x: w_i,
                y: h_i*4
            },
            {
                action: 'lineTo',
                x: w_i*4,
                y: h_i*4
            },
            {
                action: 'moveTo',
                x: w_i,
                y: h_i*5
            },
            {
                action: 'lineTo',
                x: w_i*4,
                y: h_i*5
            },
            {
                action: 'moveTo',
                x: w_i,
                y: h_i
            },
            {
                action: 'lineTo',
                x: w_i,
                y: h_i*5
            },
            {
                action: 'moveTo',
                x: w_i*2,
                y: h_i
            },
            {
                action: 'lineTo',
                x: w_i*2,
                y: h_i*5
            },
            {
                action: 'moveTo',
                x: w_i*3,
                y: h_i
            },
            {
                action: 'lineTo',
                x: w_i*3,
                y: h_i*5
            },
            {
                action: 'moveTo',
                x: w_i*4,
                y: h_i
            },
            {
                action: 'lineTo',
                x: w_i*4,
                y: h_i*5
            },
        ]
        return data
    }
    getPlayActionArr(){
        const w_i = this.w_i
        const h_i = this.h_i
        const data=[
            {x:w_i,y:h_i},{x:w_i*2,y:h_i},{x:w_i*3,y:h_i},{x:w_i*4,y:h_i},
            {x:w_i,y:h_i*5},{x:w_i*2,y:h_i*5},{x:w_i*3,y:h_i*5},{x:w_i*4,y:h_i*5},
        ]
        return data
    }
    getButtonArr() {
        const data = {
            play: {
                src: 'img/start.png',
                x: this.width / 7-this.offsetTouch,
                y: this.height / 15 * 14-this.offsetTouch,
                width: 50,
                height: 25,
                startX: this.width / 7 - this.offsetTouch,
                startY: this.height / 15 * 14 - this.offsetTouch,
                endX: this.width / 7 + this.offsetTouch,
                endY: this.height / 15 * 14 + this.offsetTouch
            }
        }
        return data
    }

}
export {
    dataxy
}