<template>
    <div class="all snake">
        <div class="header snake-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content snake-content">
            <canvas id="myCanvas"></canvas>
        </div>
        <div class="footer snake-footer">
            <game-footer></game-footer>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    import gameFooter from '@/components/common/gameFooter.vue';
    export default {
        name: "index",
        components:{
            goBackHeader,
            gameFooter
        },
        data(){
            return {
                timer:null,
            }
        },
        methods:{
            getCanvas(){
                let c = document.getElementById("myCanvas");
                let height = c.clientHeight;
                let width = c.clientWidth;
                let minW = parseInt(width/20);
                let minH = parseInt(width/40);
                let maxLocation = 15;
                // let left = false;//贪吃蛇运动的方向 向右
                // let top = false;
                let sW = function (n) {//最开始的x位置
                    return (n*minW + 1)
                }
                let sH = function (m) {
                    return (m*minH + 1)
                }
                let inMinW = minW - 2;//保证在格子里面
                let inMinH = minH - 2;
                let snakeLen = 5;//贪吃蛇最初的长度。
                let ctx = c.getContext("2d");
                ctx.fillStyle="rgba(0,0,0,0.2)";
                ctx.fillRect(0,0,width,height);
                //竖线
                for (let z=1;z<=maxLocation;z++){
                    let sX = z * minW;
                    ctx.moveTo(sX,0);
                    ctx.lineTo(sX,height);
                    ctx.strokeStyle="#27b38e";
                    ctx.lineWidth=1;
                    ctx.stroke();
                }
                //横线
                for (let m=1;m<=maxLocation;m++){
                    let sY = m * minH;
                    ctx.moveTo(0,sY);
                    ctx.lineTo(width,sY);
                    ctx.strokeStyle="#27b38e";
                    ctx.lineWidth=1;
                    ctx.stroke();
                }
                //贪吃蛇 最初的位置
                for (let j=0;j<snakeLen;j++){
                    ctx.fillStyle="red";
                    if (j==snakeLen-1){
                        ctx.fillStyle="#971126";
                    }
                    ctx.fillRect(sW(snakeLen+j),sH(7),inMinW,inMinH);
                }
                let nowNum = 0;
                clearInterval(this.timer)
                this.timer = setInterval(()=>{
                    // left = true;
                    //清除特定区域的画布
                    ctx.clearRect(sW(5+nowNum),sH(7),inMinW,inMinH);
                    ctx.clearRect(sW(9+nowNum),sH(7),inMinW,inMinH);
                    ctx.fillStyle="rgba(0,0,0,0.2)";
                    ctx.fillRect(sW(5+nowNum),sH(7),inMinW,inMinH);
                    ctx.fillStyle="red";
                    ctx.fillRect(sW(9+nowNum),sH(7),inMinW,inMinH);
                    nowNum ++;
                    //贪吃蛇 当前的位置
                    ctx.fillStyle="#971126";
                    ctx.fillRect(sW(9+nowNum),sH(7),inMinW,inMinH);
                    // console.log(left,top)
                },500)
                //食物
                ctx.fillStyle = 'yellow';
                ctx.fillRect(sW(2),sH(2),inMinW,inMinH)
            }

        },
        mounted(){
            this.getCanvas()
        },
        destroyed(){
            clearInterval(this.timer);
            this.timer = null;
        }
    }
</script>

<style scoped lang="less">
.snake-content{
    #myCanvas{
        width: 100%;
        height: 99%;
    }
}
</style>