import './js/libs/weapp-adapter'
import {
    figure
} from "./js/figure"
import {
    chess
} from "./js/chess"
import {
    buttons
} from "./js/buttons"
import {
    dataxy
} from "./js/dataxy"
import {
    music
} from "./js/music"
import {
    background
} from "./js/background"

var c = canvas
var ctx = canvas.getContext('2d');
// var Background=new background(c,ctx)
var Dataxy = new dataxy(c.width, c.height)



const arrPointsLine = Dataxy.getFigureArr()
const chessPointArr = Dataxy.getChessPointInitArr()
const buttonsArr = Dataxy.getButtonArr()
const PlayActionArr = Dataxy.getPlayActionArr()

const GetChessPointArr = Dataxy.getChessPointArr()
let chessArr = []
let nextArrXY = []
let clickArr = {}
let currentChessReady=0//0代表上方玩家，1代表下方玩家
let againCome = 0

function reset() {
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.restore();
}

function drawFigure() {
    let Figure = new figure(ctx, c)
    Figure.figure1(arrPointsLine)
}

function drawChessInit() {
    for (let i in chessPointArr) {
        let Chess = new chess(ctx, chessPointArr[i].img,  chessPointArr[i].x, chessPointArr[i].y, i)
        Chess.drawChess()
        chessArr.push(Chess)
    }
}

function drawChessMove(detailArrs, n) {
    for (let i in chessArr) {
        chessArr[i].moveStep(chessArr[i].x, chessArr[i].y, detailArrs[i].x, detailArrs[i].y, n)
    }
}

function drawButtons() {
    let Buttons = new buttons(ctx, c)
    Buttons.drawStartButton(buttonsArr)
}

function touchEventHandler(e) {
    const x = e.touches[0].clientX
    const y = e.touches[0].clientY
    if (buttonsArr.play.startX < x && buttonsArr.play.endX > x && buttonsArr.play.startY < y && buttonsArr.play.endY > y) {
        playMoveInitAction()
    } else {
        findStartEnd(x, y)
        if (nextArrXY.length) {
            playMoveAction(nextArrXY)
            nextArrXY = []
            clickArr = {}
        }
    }
}
//判断是否有一方获胜
function judgeWin(){
    let k=PlayActionArr.length
    let arr_0=PlayActionArr.slice(0,k/2)
    let arr_1=PlayActionArr.slice(-k/2)
    let arr_c0=chessArr.slice(0,k/2)
    let arr_c1=chessArr.slice(-k/2)
    let winnerNum=0
    for(let m in arr_c1){
        for(let n in arr_0){
            if(Math.abs(arr_0[n].x-arr_c1[m].x)<Dataxy.offsetTouch&&Math.abs(arr_0[n].y-arr_c1[m].y)<Dataxy.offsetTouch){
                winnerNum++
                break
            }
        }
    }
    if(winnerNum==k/2){
        wx.showModal({
            title: '游戏结束',
            content: "下方赢",
            showCancel:false
        })
    }
    winnerNum=0
    for(let m in arr_c0){
        for(let n in arr_1){
            if(Math.abs(arr_1[n].x-arr_c0[m].x)<Dataxy.offsetTouch&&Math.abs(arr_1[n].y-arr_c0[m].y)<Dataxy.offsetTouch){
                winnerNum++
                break
            }
        }
    }
    if(winnerNum==k/2){
        wx.showModal({
            title: '游戏结束',
            content: "上方赢",
            showCancel:false
        })
    }
}
//判断下一步规则以及找到下一步需要绘制棋子的坐标
function findStartEnd(x, y) {
    if (clickArr.start) {
        for (let i in GetChessPointArr) {
            const x0 = GetChessPointArr[i].x - Dataxy.offsetTouch / 2
            const x1 = GetChessPointArr[i].x + Dataxy.offsetTouch / 2
            const y0 = GetChessPointArr[i].y - Dataxy.offsetTouch / 2
            const y1 = GetChessPointArr[i].y + Dataxy.offsetTouch / 2
            if (x > x0 && x < x1 && y > y0 && y < y1) {
                clickArr.end=GetChessPointArr[i]
            }
        }
        //判断下一步是否在棋盘点上
        if(!clickArr.end){
            return
        }
        //判断下一步是否斜着走
        if(Math.abs(clickArr.start.x - clickArr.end.x)>Dataxy.offsetTouch && Math.abs(clickArr.start.y - clickArr.end.y)>Dataxy.offsetTouch){
            clickArr.end=false
            return
        }
        //判断下一步是否相差一格
        if(Math.abs(clickArr.start.y - clickArr.end.y) > Dataxy.h_i + Dataxy.offsetTouch || Math.abs(clickArr.start.x - clickArr.end.x) > Dataxy.w_i + Dataxy.offsetTouch){
            clickArr.end=false
            return
        }
        //点两次同一个棋子
        for(let i in chessArr){
            if(Math.abs(clickArr.end.x-chessArr[i].x)<Dataxy.offsetTouch&&Math.abs(clickArr.end.y-chessArr[i].y)<Dataxy.offsetTouch){
                clickArr.end==false
                clickArr.start=chessArr[i]
                return
            }
        }
        if(clickArr.start.index<chessArr.length/2){
            currentChessReady=1
        }else{
            currentChessReady=0
        }
        nextArrXY = chessArr.concat()
        nextArrXY[clickArr.start.index] = clickArr.end
    } else {
        for (let i in chessArr) {
            const x0 = chessArr[i].x - Dataxy.offsetTouch / 2
            const x1 = chessArr[i].x + Dataxy.offsetTouch / 2
            const y0 = chessArr[i].y - Dataxy.offsetTouch / 2
            const y1 = chessArr[i].y + Dataxy.offsetTouch / 2
            if (x > x0 && x < x1 && y > y0 && y < y1) {
                //判断当前移动棋子的玩家是否正确
                if((currentChessReady==0&&i<chessArr.length/2)||(currentChessReady==1&&i>=chessArr.length/2)){
                    clickArr.start =  chessArr[i]
                }else{
                    wx.showToast({
                        title: `${currentChessReady?"下方玩家正在行棋":"上方玩家正在行棋"}`,
                        icon: 'none'
                    })
                }
            }
        }
    }
}

//初始化摆棋盘方法
function playMoveInitAction(n = 0) {
    let canid = requestAnimationFrame(
        function () {
            reset();
            drawFigure();
            drawButtons();
            n++
            drawChessMove(PlayActionArr, n)
            if (n >= chessArr[0].stepNum) {
                cancelAnimationFrame(canid)
            } else {
                playMoveInitAction(n)
            }
        }
    )
}
//下棋中移动棋子
function playMoveAction(detailArrs, n = 0) {
    let canid = requestAnimationFrame(
        function () {
            reset();
            drawFigure();
            drawButtons();
            n++
            drawChessMove(detailArrs, n)
            if (n >= chessArr[0].stepNum) {
                cancelAnimationFrame(canid)
                judgeWin()
            } else {
                playMoveAction(detailArrs, n)
            }
        }
    )
}
wx.onShow(() => {
    againCome++;
    if (againCome == 1) {
        reset();
        drawFigure();
        drawChessInit();
        drawButtons();
        canvas.addEventListener('touchstart', touchEventHandler)
    } else {
        reset();
        drawFigure();
        playMoveAction(chessArr)
        drawButtons();
    }
    var Music=new music()
})
wx.onHide(function (res) {
    againCome++
})
