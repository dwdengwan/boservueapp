<template>
    <div class="all well">
        <div class="header well-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content well-content">
            <div
                class="well-content-child"
                :class="{ myself: well==9, computer: well==-1 }"
                v-for="(well,index) in wellData"
                @touchend="handleTouch(index)"
                :key="index">
                <div class="child-gou" v-show="well == 9"></div>
                <div class="child-cha" v-show="well == -1"></div>
            </div>
            <div class="well-content-fixed" v-show="showFixed">
                <div class="fixed-content">
                    <div class="fixed-top">
                        <span v-if="whoWin == 0">我方已获胜</span>
                        <span v-else-if="whoWin == 1">电脑方已获胜</span>
                        <span v-else-if="whoWin == 2">双方和局</span>
                        <span>是否重新开始？</span>
                    </div>
                    <div class="fixed-bottom">
                        <div @touchend="resetGame">yes</div>
                        <div @touchend="resetGame2">no</div>
                    </div>
                </div>
            </div>
            <div class="well-content-fixed" v-show="showAction">
                <div>电脑正在思考中。。。请勿重复点击</div>
            </div>
        </div>
        <div class="footer well-footer">
            <game-footer :gameFooterData="gameFooterData" @reset="resetGame"></game-footer>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    import gameFooter from '@/components/common/gameFooter.vue';
    export default {
        name: "index",
        components:{
            goBackHeader,gameFooter
        },
        data(){
            return {
                gameFooterData:{
                    clickNum:0,
                    gameName:'well',
                },
                wellData:[0,1,2,3,4,5,6,7,8],
                whoWin:-1,//0 我方赢 1 电脑方赢 2 和棋
                showFixed:false,
                showAction:false,
                timer:null,
            }
        },
        methods:{
            //重置
            resetGame(){
                this.timer = null;
                clearTimeout(this.timer);
                let wellData = [0,1,2,3,4,5,6,7,8];
                this.gameFooterData.clickNum = 0;
                this.$set(this,'wellData',wellData);
                this.whoWin = -1;
                this.showFixed = false;
                this.showAction = false;
            },
            resetGame2(){
                this.showFixed = false;
            },
            //我方点击
            handleTouch(i){
              if (this.timer !== null){
                  this.showAction = true;
                  return
              }
              this.timer = null;
              clearTimeout(this.timer);
              if (this.wellData[i] !== -1 && this.wellData[i] !== 9 && !this.isWin()){
                  this.gameFooterData.clickNum ++;
                  this.$set(this.wellData,i,9);
                  if(this.isWin()){
                      return
                  }
                  this.timer = setTimeout(()=>{
                      this.randNum(this.wellData);
                      this.timer = null;
                      clearTimeout(this.timer);
                      this.showAction = false;
                  },3000)
              }
            },
            //电脑方点击
            handleComputer(i){
                this.$set(this.wellData,i,-1);
                this.isWin()
            },
            //电脑方随机下一个
            randNum(arr){
                if (this.gameFooterData.clickNum == 5){
                    this.isWin()
                    return
                }
                let cIndex = Math.floor(Math.random()*arr.length);
                if (arr[cIndex] !== -1 && arr[cIndex] !== 9){
                    this.handleComputer(cIndex);
                } else{
                    this.randNum(arr)
                }
            },
            //判断输赢 我方赢还是电脑方赢
            isWin(){
                let arr = this.wellData;
                //draw true和局
                let draw = (this.$common.statisticalFieldNumber(this.wellData)['9']+this.$common.statisticalFieldNumber(this.wellData)['-1']) == 9;
                let bool = function (num) {
                    let boolFlag =
                        (arr[0] == num && arr[1] == num && arr[2] == num) ||
                        (arr[3] == num && arr[4] == num && arr[5] == num) ||
                        (arr[6] == num && arr[7] == num && arr[8] == num) ||
                        (arr[0] == num && arr[3] == num && arr[6] == num) ||
                        (arr[1] == num && arr[4] == num && arr[7] == num) ||
                        (arr[2] == num && arr[5] == num && arr[8] == num) ||
                        (arr[0] == num && arr[4] == num && arr[8] == num) ||
                        (arr[2] == num && arr[4] == num && arr[6] == num);
                    return boolFlag;
                }
                if(bool(9)){
                    this.whoWin = 0;
                    this.showFixed = true;
                    return true;
                }else if(bool(-1)){
                    this.whoWin = 1;
                    this.showFixed = true;
                    return true;
                }else if(draw){
                    this.whoWin = 2;
                    this.showFixed = true;
                    return true;
                }else {
                    return false;
                }
            },
        },
        mounted(){

        },
        destroyed(){
            this.timer = null;
            clearTimeout(this.timer);
        }
    }
</script>

<style scoped lang="less">
.well{
    .well-content{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
        position: relative;
        .well-content-child{
            width: 30%;
            height: 30%;
            margin: 2% 0;
            background-color: rgba(0,0,0,0.3);
            display: flex;
            /*justify-content: center;*/
            align-items: center;
            .child-gou{
                display: inline-block;
                width: 0.8rem;
                height:5px;
                background: #fff;
                line-height: 0;
                font-size:0;
                vertical-align: middle;
                -webkit-transform: rotate(45deg);
                margin: 0 20%;
            }
            .child-gou:after{
                content:'/';
                display:block;
                width: 1.6rem;
                height:5px;
                background: #fff;
                -webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%);
            }
            .child-cha{
                width: 1.6rem;
                display: inline-block;
                height:5px;
                background: #fff;
                line-height: 0;
                font-size:0;
                vertical-align: middle;
                -webkit-transform: rotate(45deg);
                margin: 0 20%;
            }
            .child-cha:after{
                content:'/';
                display:block;
                width: 1.6rem;
                height:5px;
                background: #fff;
                -webkit-transform: rotate(-90deg);
            }
        }
        .well-content-child.myself{
            background-color: #27e38b;
            -webkit-animation: animal 1s;
            -webkit-transform-origin: center center;
            -ms-transform-origin: center center;
            transform-origin: center center;
        }
        .well-content-child.computer{
            background-color: #bad6ff;
            -webkit-animation: animal 1s;
            -webkit-transform-origin: center center;
            -ms-transform-origin: center center;
            transform-origin: center center;
        }
        .well-content-fixed{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            .fixed-content{
                .fixed-top{}
                .fixed-bottom{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    padding: 2%;
                    div{
                        width: 20%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 2%;
                        font-weight: bolder;
                        background-color: rgba(0,0,0,0.4);
                        border-radius: 5px;
                    }
                }
            }
        }
        @-webkit-keyframes animal {
            0%{
                transform: rotateY(0deg);
                -ms-transform: rotateY(0deg);
                -webkit-transform: rotateY(0deg);
            }
            100%{
                transform: rotateY(360deg);
                -ms-transform: rotateY(360deg);
                -webkit-transform: rotateY(360deg);
            }
        }
    }
}
</style>