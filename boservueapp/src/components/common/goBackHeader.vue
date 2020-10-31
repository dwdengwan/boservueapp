<template>
    <!--带有返回功能的头部-->
    <div class="friend-back">
        <span style="width: auto;display: inline-block;" @touchend="handleClickBack">
            <span class="friend-goback"></span>
            <span class="friend-name">{{name}}</span>
        </span>
        <confirm-fixed ref="confirmFixed"></confirm-fixed>
    </div>
</template>

<script>
    import confirmFixed from './confirmFixed'
    export default {
        name: "goBackHeader",
        components:{
            confirmFixed
        },
        data(){
            return {
                name:"朋友圈"
            }
        },
        methods:{
            handleClickBack(){
                this.$refs.confirmFixed.goBack();
            }
        },
        created(){
            this.name = this.$route.query.name;
        }
    }
</script>

<style scoped lang="less">
.friend-back{
    width: 96%;
    height: 100%;
    padding: 0 2%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .friend-goback{
        width: 0.25rem;
        height: 0.25rem;
        border-bottom: 2px solid var(--font-color);
        border-left: 2px solid var(--font-color);
        transform: rotate(45deg);
        display: inline-block;
    }
    .friend-name{
        margin: 0 0.3rem;
    }
}
</style>