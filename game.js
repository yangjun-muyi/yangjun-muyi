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

var c = canvas
var ctx = canvas.getContext('2d');
var Dataxy = new dataxy(c.width, c.height)

const arrPointsLine = Dataxy.getFigureArr()
const chessPointArr = Dataxy.getChessPointInitArr()
const buttonsArr = Dataxy.getButtonArr()
const PlayActionArr = Dataxy.getPlayActionArr()
const GetChessPointArr=Dataxy.getChessPointArr()
let chessArr = []
let currentArrXY=[],nextArrXY=[]
let clickArr={}

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
        let Chess = new chess(ctx, chessPointArr[i].img, chessPointArr[i].x, chessPointArr[i].y)
        Chess.drawChess()
        chessArr.push(Chess)
    }
}
function drawChessMove(detailArrs,n){
    for (let i in chessArr) {
        chessArr[i].moveStep(chessArr[i].x, chessArr[i].y,detailArrs[i].x,detailArrs[i].y,n)
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
        currentArrXY=PlayActionArr
    } else {
        findStartEnd(x,y)
        if(nextArrXY.length){
            console.log(currentArrXY,nextArrXY)
            playMoveAction(nextArrXY)
            currentArrXY=nextArrXY.concat()
            nextArrXY=[]
        }
    }
}
function findStartEnd(x,y){
    if(clickArr.start){
        for(let i in GetChessPointArr){
            const x0=GetChessPointArr[i].x-Dataxy.offsetTouch/2
            const x1=GetChessPointArr[i].x+Dataxy.offsetTouch/2
            const y0=GetChessPointArr[i].y-Dataxy.offsetTouch/2
            const y1=GetChessPointArr[i].y+Dataxy.offsetTouch/2
            if(x>x0&&x<x1&&y>y0&&y<y1){
                clickArr.end={index:i,data:GetChessPointArr[i]}
                nextArrXY=currentArrXY.concat()
                nextArrXY[clickArr.start.index]=GetChessPointArr[i]
            }
        }
    }else{
        for(let i in currentArrXY){
            const x0=currentArrXY[i].x-Dataxy.offsetTouch/2
            const x1=currentArrXY[i].x+Dataxy.offsetTouch/2
            const y0=currentArrXY[i].y-Dataxy.offsetTouch/2
            const y1=currentArrXY[i].y+Dataxy.offsetTouch/2
            if(x>x0&&x<x1&&y>y0&&y<y1){
                clickArr.start={index:i,data:currentArrXY[i]}
            }
        }
    }
    
}

//初始化摆棋盘方法
function playMoveInitAction( n = 0) {
    let canid = requestAnimationFrame(
        function () {
            reset();
            drawFigure();
            drawButtons();
            n++
            drawChessMove(PlayActionArr,n)
            if (n >= chessArr[0].stepNum) {
                cancelAnimationFrame(canid)
            }else{
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
            drawChessMove(detailArrs,n)
            if (n >= chessArr[0].stepNum) {
                cancelAnimationFrame(canid)
            }else{
                playMoveAction(n)
            }
        }
    )
}

setTimeout(() => {
    reset();
    drawFigure();
    drawChessInit();
    drawButtons();
    canvas.addEventListener('touchstart', touchEventHandler)
}, 1000);
