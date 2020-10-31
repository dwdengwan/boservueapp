<template>
    <!--华容道-->
    <div class="all test">
        <div class="header">
            <go-back-header></go-back-header>
        </div>
        <div class="content">
            <div class="box">
                <transition-group name="cell" tag="div" class="container">
                    <div
                        @touchend.prevent="clickBlock(index)"
                        v-for="(puzzle,index) in puzzles"
                        :key="puzzle"
                        v-text="puzzle"
                        :class="puzzle === ''? 'cell cells':'cell'">
                    </div>
                </transition-group>
            </div>
        </div>
        <div class="footer test-footer">
            <div class="test-footer-content">
                您已经下了 <span>{{clickNum}}</span> 步
            </div>
            <div class="test-footer-rest" @touchend="rander">
                <span>重</span>
                <span>置</span>
            </div>
        </div>
        <div class="test-fixed" v-show="showFixed">
            <div class="fixed-info">您赢了，游戏已结束。</div>
            <div class="fixed-info">您一共用了<span>{{clickNum}}</span>步</div>
            <div class="fixed-info isrest">是否重新开始？</div>
            <div class="fixed-btn">
                <div class="fixed-btn-yes" @touchend="result(1)">yes</div>
                <div class="fixed-btn-no" @touchend="result(0)">no</div>
            </div>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    export default {
        name: "test",
        components:{
            goBackHeader,
        },
        data(){
            return {
                puzzles: [],
                clickNum:0,
                showFixed:false,
                isPass:false,
            }
        },
        methods:{
            rander() {
                let arr = [1,2,3,4,5,6,7,8];
                for(let i = 0,len = arr.length; i < len; i++){
                    let currentRandom = parseInt(Math.random() * (len - 1));
                    let current = arr[i];
                    arr[i] = arr[currentRandom];
                    arr[currentRandom] = current;
                }
                this.puzzles = arr;
                this.puzzles.push('')
                // this.puzzles = [1,2,3,4,5,6,7,'',8];
                this.clickNum = 0;
                this.showFixed = false;
                this.isPass = false;
            },
            // 点击方块
            clickBlock(index) {
                if(this.isPass){this.showFixed = true;return}
                let curIndex = this.puzzles[index];
                let leftIndex = this.puzzles[index - 1];
                let rightIndex = this.puzzles[index + 1];
                let topIndex = this.puzzles[index - 3];
                let bottomIndex = this.puzzles[index + 3];

                if (leftIndex === '' && index % 3) {
                    this.$set(this.puzzles, index - 1, curIndex);
                    this.$set(this.puzzles, index, '');
                    this.clickNum ++;
                } else if (rightIndex === '' && 2 !== index % 3) {
                    this.$set(this.puzzles, index + 1, curIndex);
                    this.$set(this.puzzles, index, '');
                    this.clickNum ++;
                } else if (topIndex === '') {
                    this.$set(this.puzzles, index - 3, curIndex);
                    this.$set(this.puzzles, index, '');
                    this.clickNum ++;
                } else if (bottomIndex === '') {
                    this.$set(this.puzzles, index + 3, curIndex);
                    this.$set(this.puzzles, index, '');
                    this.clickNum ++;
                }
                this.pass();
            },
            pass() {
                if (this.puzzles[8] === '') {
                    const newPuzzles = this.puzzles.slice(0, 8);
                    this.isPass = newPuzzles.every((e, i) => e === i + 1);
                    if (this.isPass) {
                        this.showFixed = true;
                    }
                }
            },
            result(num){
                if(num){
                    this.rander()
                }else{
                    this.showFixed = false;
                }
            }
        },
        mounted(){
            this.rander();
        },
        created(){

        }
    }
</script>

<style scoped lang="less">
    .test{
        width: 100%;
        position: relative;
        .box {
            width: 100%;
            height: 100%;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            justify-content: space-around;
        }
        .cell {
            color: #fff;
            font-size: 20px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 30%;
            height: 30%;
            margin: 1%;
            -moz-box-shadow: 0px 0px 3px #333;
            -webkit-box-shadow: 0px 0px 3px #333;
            box-shadow: 0px 0px 3px #333;
            background-color: #966;
        }
        .cells {
            background-color: #fff;
            -moz-box-shadow: 0px 0px 0px #333;
            -webkit-box-shadow: 0px 0px 0px #333;
            box-shadow: 0px 0px 0px #333;
            z-index: -999;
        }
        .cell-move {
            transition: transform 0.5s;
        }
        .test-footer{
            display: flex;
            justify-content: space-around;
            align-items: center;
            .test-footer-content{
                color: #27e38b;
                span{
                    color:red;
                    font-size: 0.4rem;
                    font-weight: bold;
                }
            }
            .test-footer-rest{
                padding: 1% 0;
                background: #27e38b;
                color:#fff;
                border-radius: 10px;
                width: 20%;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
        }
        .test-fixed{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .fixed-info{
                color:#27e38b;
                font-size: 0.4rem;
                padding: 2% 0;
                display: flex;
                align-items: center;
                span{
                    color:#971126;
                    font-size: 0.8rem;
                    font-weight: bold;
                }
            }
            .isrest{
                color:#971126;
            }
            .fixed-btn{
                width: 50%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                div{
                    color:#fff;
                    padding: 2%;
                    border-radius: 10px;
                    width: 20%;
                    text-align: center;
                }
                .fixed-btn-yes{
                    background-color: #27e38b;
                }
                .fixed-btn-no{
                    background-color: #971126;
                }
            }
        }
    }
</style>