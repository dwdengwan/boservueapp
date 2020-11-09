<!--
    游戏 底部
-->
<template>
    <div class="game-footer">
        <div class="game-footer-content">
            您已经下了 <span>{{gameFooterData.clickNum}}</span> 步
        </div>
        <div class="game-footer-rest" @touchend="rander">
            <span>重</span>
            <span>置</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "gameFooter",
        props:['gameFooterData'],
        data(){
            return {

            }
        },
        methods:{
            rander(){
                this.$emit('reset')
            }
        },
        beforeRouteEnter(to,from,next){
            next((vm) => {
                console.log(vm.gameFooterData)
            });
        },
    }
</script>

<style scoped lang="less">
.game-footer{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .game-footer-content{
        color: #27e38b;
        span{
            color:red;
            font-size: 0.4rem;
            font-weight: bold;
        }
    }
    .game-footer-rest{
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
</style>