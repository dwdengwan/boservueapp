<template>
    <!--带有返回功能的头部-->
    <div class="friend-back" @click="handleClickBack">
        <span class="friend-goback">&lt;</span>
        <span class="friend-name">朋友圈</span>
    </div>
</template>

<script>
    export default {
        name: "goBackHeader",
        data(){
            return {}
        },
        methods:{
            handleClickBack(){
                let query = {};
                this.$router.push({path:'/found',query})
            }
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
    .friend-goback{}
    .friend-name{
        margin-left: 2%;
        margin-right: 2%;
    }
}
</style>