<template>
    <div
        class="all homepage"
        ref="homepage"
        @scroll="handleScroll"
        @touchstart="handleTouchStart"
         @touchend.stop="handleClickBack">
        <!--v-show="notop"-->
        <div
            :class="notop ? 'notop' : ''"
            class="header goshopping-header">
            <go-back-header result="goshopping"></go-back-header>
        </div>
        <div class="header goshopping-search">
            <input type="text" v-focus>
            <div>search</div>
        </div>
        <div
            :class="notop ? 'notop' : ''"
            class="goshopping-content">
            111111111111111111111
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    export default {
        name: "index",
        props:['notop'],
        components:{
            goBackHeader,
        },
        data(){
            return {
                // notop:false,
                longClick:0,
                timeOutEvent:null,
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
            handleClickBack(){
                clearTimeout(this.timeOutEvent);
                if(this.timeOutEvent!=0 && this.longClick==0){//点击事件
                    console.log('click')
                }else{
                    console.log('scroll')
                }
            },
            handleScroll(){
                this.$refs.homepage.scrollTop;
                console.log('dyk kyd');
            }
        }
    }
</script>

<style scoped lang="less">
    .homepage{
        width: 100%;
        height: 100%;
        .goshopping-header{
            height: 8%;
            transition: height 1s ease;
        }
        .goshopping-header.notop{
            height: 0;
        }
        .goshopping-search{
            height: 8%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            input{
                width: 60%;
                height: 70%;
                border-radius: 20px;
            }
            div{
                width: 20%;
                height: 70%;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                background-color: var(--main-bg-color);
                align-items: center;
            }
        }
        .goshopping-content{
            width: 100%;
            height: 100%;
            overflow-y: auto;
            background-color: #418045;
            transition: height 1s ease;
        }
        .goshopping-content.notop{
            height: 92%;
        }
    }
</style>