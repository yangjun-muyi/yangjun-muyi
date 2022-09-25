class dataxy {
    constructor(width, height, offsetTouch=25) {
        this.width = width
        this.height = height
        this.offsetTouch=offsetTouch//点击区域对外平均外延值
    }
    getChessPointInitArr() {
        const x_i = this.width / 10
        const y_i = this.height / 14
        const data = [{
                img: 'img/1.png',
                x: x_i,
                y: y_i
            },
            {
                img: 'img/1.png',
                x: x_i + 20,
                y: y_i
            },
            {
                img: 'img/1.png',
                x: x_i + 40,
                y: y_i
            },
            {
                img: 'img/4.png',
                x: x_i * 9 - 40,
                y: y_i * 13
            },
            {
                img: 'img/4.png',
                x: x_i * 9 - 20,
                y: y_i * 13
            },
            {
                img: 'img/4.png',
                x: x_i * 9,
                y: y_i * 13
            },
        ]
        return data
    }
    getChessPointArr() {
        const arr=this.getFigureArr()
        const data=[
            arr[0],
            arr[8],
            arr[1],
            arr[3],
            arr[9],
            arr[5],
            arr[10],
            arr[12],
            arr[11],
        ]
        return data
    }
    getFigureArr() {
        const w_i = this.width / 4;
        const h_i = this.height / 6;
        const data = [{
                action: 'moveTo',
                x: w_i,
                y: h_i
            },
            {
                action: 'lineTo',
                x: w_i * 3,
                y: h_i
            },
            {
                action: 'lineTo',
                x: w_i * 3,
                y: h_i * 5
            },
            {
                action: 'lineTo',
                x: w_i,
                y: h_i * 5
            },
            {
                action: 'lineTo',
                x: w_i,
                y: h_i
            },
            {
                action: 'lineTo',
                x: w_i * 3,
                y: h_i * 5
            },
            {
                action: 'moveTo',
                x: w_i,
                y: h_i * 5
            },
            {
                action: 'lineTo',
                x: w_i * 3,
                y: h_i
            },
            {
                action: 'moveTo',
                x: w_i * 2,
                y: h_i
            },
            {
                action: 'lineTo',
                x: w_i * 2,
                y: h_i * 5
            },
            {
                action: 'moveTo',
                x: w_i,
                y: h_i * 3
            },
            {
                action: 'lineTo',
                x: w_i * 3,
                y: h_i * 3
            },
            {
                action: 'extra',
                x: w_i * 2,
                y: h_i * 3
            },
        ]
        return data
    }
    getPlayActionArr(){
        const arr=this.getFigureArr()
        const data=[
            arr[0],
            arr[8],
            arr[1],
            arr[3],
            arr[9],
            arr[5]
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