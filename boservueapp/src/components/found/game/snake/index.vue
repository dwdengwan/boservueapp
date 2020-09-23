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
        methods:{
            getCanvas(){
                console.log('dyk')
                let c=document.getElementById("myCanvas");
                let height = c.clientHeight;
                let width = c.clientWidth;
                let minW = parseInt(width/20);
                let minH = parseInt(width/40);
                let ctx=c.getContext("2d");
                ctx.fillStyle="rgba(0,0,0,0.5)";
                ctx.fillRect(0,0,width,height);
                for (let z=1;z<=15;z++){
                    let sX = z * minW;
                    ctx.moveTo(sX,0);
                    ctx.lineTo(sX,height);
                    ctx.strokeStyle="#27b38e";
                    ctx.lineWidth=1;
                    ctx.stroke();
                }
                for (let m=1;m<=15;m++){
                    let sY = m * minH;
                    ctx.moveTo(0,sY);
                    ctx.lineTo(width,sY);
                    ctx.strokeStyle="#27b38e";
                    ctx.lineWidth=1;
                    ctx.stroke();
                }
                for (let j=0;j<5;j++){
                    ctx.fillStyle="red";
                    ctx.fillRect((5+j)*minW,7*minH,minW,minH);
                }
                for(let d=0;d<5;d++){
                    ctx.fillStyle="#fff";
                    ctx.rect((5+d)*minW,7*minH,minW,minH);
                }

            }
        },
        mounted(){
            this.getCanvas()
        }
    }
</script>

<style scoped lang="less">
.snake-content{
    #myCanvas{
        width: 100%;
        height: 99%;
        background-color: rgba(0,0,0,0.2);
    }
}
</style>