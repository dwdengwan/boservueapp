import goshopping from "../../router/goshopping";
<template>
    <div class="all goshopping">
        <div class="content goshopping-content" @scroll="handleScroll" ref="goshoppingcontent">
            <router-view :notop="notop"></router-view>
        </div>
        <div class="footer goshopping-footer">
            <div
                class="goshopping-footer-child"
                :class="activeIndex == index?'ative':''"
                v-for="(footer,index) in footerData"
                :key="index"
                @touchend="handleGoBack(footer,index)">
                <span class="footer-child-icon"></span>
                <span class="footer-child-title">{{footer.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        components:{

        },
        data(){
            return {
                footerData:[
                    {
                        name:'首页',
                        path:'/found/goshopping'
                    },
                    {
                        name:'分类',
                        path:'/found/goshopping/class'
                    },
                    {
                        name:'直播',
                        path:'/found/goshopping'
                    },
                    {
                        name:'购物车',
                        path:'/found/goshopping'
                    },
                    {
                        name:'我的',
                        path:'/found/goshopping'
                    },
                ],
                activeIndex:0,
                notop:false,
            }
        },
        methods:{
            handleGoBack(item,index){
                this.activeIndex = index;
                this.$router.push({path:item.path,query:{name:'购物'}})
            },
            handleScroll(){
                let scrollTop = this.$refs.goshoppingcontent.scrollTop;
                console.log('1126',scrollTop);
                if (scrollTop > 1){
                    this.notop = true;
                } else{
                    this.notop = false;
                }
                console.log(this.notop)
            }
        }
    }
</script>

<style scoped lang="less">
    .goshopping{
        width: 100%;
        height: 100%;
        .goshopping-content{
            height: 90%;
        }
        .goshopping-footer{
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .goshopping-footer-child{
                width: 20%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                .footer-child-icon{
                    width: 0.7rem;
                    height: 0.7rem;
                    border-radius: 50%;
                    background-color: #fff;
                }
                .footer-child-title{
                    font-size: 0.4rem;
                    color: #fff;
                }
            }
            .goshopping-footer-child.ative{
                .footer-child-icon{
                    width: 0.8rem;
                    height: 0.8rem;
                    background-color: #418045;
                }
                .footer-child-title{
                    font-size: 0.45rem;
                    color:var(--font-color);
                    font-weight: bold;
                }
            }
        }
    }
</style>