<template>
    <div class="wechat">
        <div class="wechat-header">
            <div class="wechat-header-back" @click="handleClick">
                <span>&lt;</span>
            </div>
            <div class="wechat-header-dd">
                <span>...</span>
            </div>
        </div>
        <div class="wechat-content"></div>
        <div class="wechat-footer"></div>
    </div>
</template>

<script>
    export default {
        name: "wechat",
        data(){
            return{

            }
        },
        methods:{
            handleClick(){
                this.$router.push({path:'/',query:{}})
            }
        },
    }
</script>

<style scoped lang="less">
.wechat{
    width: 96%;
    height: 100%;
    .wechat-header{
        width: 100%;
        height: 6%;
        background: #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.6rem;
        padding: 0 2%;
    }
}
</style>