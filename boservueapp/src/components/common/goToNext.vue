<!--
    跳转去下个界面
-->
<template>
    <div>
        <div class="myself-child"
             v-for="(myself,index) in myselfData"
             :key="myself.id">
            <div
                class="myself-child-content"
                @touchstart="handleTouchStart(myself,index,$event)"
                @touchend.stop="handleGoBack(myself)">
                <div class="myself-child-left">
                    <div class="myself-child-img" :style="{'background':$common.randomColor()}"></div>
                    <div class="myself-child-name">
                        {{myself.name}}
                    </div>
                </div>
                <div class="myself-child-right">
                    <div class="myself-child-back"></div>
                </div>
            </div>
            <div class="myself-kongge" v-if="myself.iskongge == '1'"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goToNext",
        props:['myselfData'],
        data(){
            return {
                longClick:0,
                timeOutEvent:0,
            }
        },
        methods:{
            handleTouchStart(){
                this.longClick=0;//设置初始为0
                this.timeOutEvent = setTimeout(()=>{
                    //此处为长按事件-----在此显示遮罩层及删除按钮
                    this.longClick=1;//假如长按，则设置为1
                },300);
            },
            handleGoBack(item){
                clearTimeout(this.timeOutEvent);
                if(this.timeOutEvent!=0 && this.longClick==0){//点击事件
                    let path = item.url;
                    let query = {
                        name : item.name
                    }
                    this.$router.push({path,query})
                }
            }
        },
        created(){

        },
        mounted(){

        },
    }
</script>

<style scoped lang="less">
.myself-child{
    .myself-child-content{
        padding: 2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 96%;
        border-bottom: 1px solid #eee;
        .myself-child-left{
            width: 50%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .myself-child-img{
                width: 1.2rem;
                height: 1.2rem;
                border-radius: 10px;
                background: green;
            }
            .myself-child-name{
                margin-left: 5%;
                margin-right: 5%;
            }
        }
        .myself-child-right{
            font-size: 0.5rem;
            width: 50%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .myself-child-img{
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 6px;
                background: green;
                margin-left: 5%;
                margin-right: 5%;
            }
            .myself-child-back{
                width: 0.25rem;
                height: 0.25rem;
                border-top: 2px solid var(--font-color);
                border-right: 2px solid var(--font-color);
                transform: rotate(45deg);
                display: inline-block;
            }
        }
    }
    .myself-kongge{
        width: 100%;
        height: 0.4rem;
        background: #eee;
    }
}
</style>