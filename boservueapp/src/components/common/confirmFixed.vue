<!--
    公共组件 确认返回的遮罩层
-->
<template>
    <div class="confirm-fixed" v-show="showGameFixed">
        <div class="confirm-content">
            <div class="content-top">
                <span class="content-top-right">是否退出</span>
                <span class="content-top-left">{{gameName}}小游戏。？</span>
            </div>
            <div class="content-button">
                <div class="content-button-left" @touchend="comfirm(1)">yes</div>
                <div class="content-button-right" @touchend="comfirm(0)">no</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "confirmFixed",
        props:['result'],
        data(){
            return {
                showGameFixed:false,
                gameName:'华容道'
            }
        },
        methods:{
            goBack(){
                if (this.result == 'goshopping'){
                    this.$router.push({path:'/found'})
                    return
                }
                let nameStr = window.location.href.split('?')[0];
                let inGame = window.location.href.split('?')[0].includes('game');
                let flag = 0;
                if (inGame) {
                    flag = nameStr.split('game')[1] == '' ? 0 : 1;
                    let gameName = nameStr.split('game')[1];
                    let nameChina = '';
                    switch (gameName){
                        case '/well':
                            nameChina = '井子棋'
                            break;
                        case '/tetris':
                            nameChina = '俄罗斯方块'
                            break;
                        case '/snake':
                            nameChina = '贪吃蛇'
                            break;
                        case '/huarongdao':
                            nameChina = '华容道'
                            break;
                        case '/buildBlocks':
                            nameChina = '积木'
                            break;
                        case '/kline':
                            nameChina = 'k折线图'
                            break;
                        case '/music':
                            nameChina = '音乐达人'
                            break;
                        case '/chess':
                            nameChina = 'dw象棋'
                            break;
                    }
                    this.gameName = nameChina;
                }
                if (flag) {
                    this.showGameFixed = true;
                } else {
                    this.showGameFixed = false;
                    this.$router.back(-1);
                }
            },
            comfirm(flag){
                if (flag){
                    this.$router.back(-1);
                }
                this.showGameFixed = false;
            }
        },
        created(){

        },
    }
</script>

<style lang="less" scoped>
    .confirm-fixed{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1126;
        .confirm-content{
            font-size: 0.5rem;
            font-weight: bolder;
            .content-top{
                .content-top-left{
                    color:#00c800;
                }
                .content-top-right{
                    color:#940619;
                }
            }
            .content-button{
                display: flex;
                align-items: center;
                justify-content: space-around;
                color:#fff;
                padding: 10% 0;
                div{
                    width: 20%;
                    border-radius: 10px;
                    text-align: center;
                    padding: 2%;
                }
                .content-button-left{
                    background-color: #971126;
                }
                .content-button-right{
                    background-color: #00c800;
                }
            }
        }
    }
</style>