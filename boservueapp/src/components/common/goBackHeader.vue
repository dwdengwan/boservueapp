<template>
    <!--带有返回功能的头部-->
    <div class="friend-back">
        <span style="width: auto;display: inline-block;" @click="handleClickBack">
            <span class="friend-goback">&lt;</span>
            <span class="friend-name">朋友圈</span>
        </span>
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
        margin: 0 0.3rem;
    }
}
</style>