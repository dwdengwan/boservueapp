<template>
    <!--带有返回功能的头部-->
    <div class="friend-back">
        <span style="width: auto;display: inline-block;" @click="handleClickBack">
            <span class="friend-goback"></span>
            <span class="friend-name">{{name}}</span>
        </span>
    </div>
</template>

<script>
    export default {
        name: "goBackHeader",
        data(){
            return {
                name:"朋友圈"
            }
        },
        methods:{
            handleClickBack(){
                // let query = {};
                this.$router.back(-1);
                // this.$router.push({path:'/found',query})
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
        border-bottom: 2px solid #666;
        border-left: 2px solid #666;
        transform: rotate(45deg);
        display: inline-block;
    }
    .friend-name{
        margin: 0 0.3rem;
    }
}
</style>