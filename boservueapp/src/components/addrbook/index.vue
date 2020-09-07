<template>
    <!--@touchstart="handleTouchStart"-->
    <!--@touchmove="handleTouchMove"-->
    <!--@touchend="handleTouchEnd"-->
    <div class="all addrbook">
        <div class="header addrbook-header">
            <header-html></header-html>
        </div>
        <div class="content addrbook-content" ref="addrbookcontent" @click="handleClickContent" @scroll="handleScroll">
            <div class="addrbook-child" v-for="item in addrbookData" :key="item.orderCode" ref="addrbookchild">
                <div class="addrbook-kongge" v-if="item.orderCode !== ''">{{item.orderCode}}</div>
                <div class="addrbook-auther"
                     v-for="(bitem,bindex) in item.orderArr"
                     :key="bindex"
                     @click="handleGoBack(bitem.id,$event)">
                    <span class="addrbook-child-img" :style="{background:$common.randomColor()}"></span>
                    <span class="addrbook-name">{{bitem.name}}</span>
                </div>
            </div>
            <div class="addrbook-fixed">
                <ul>
                    <li
                        @click="handleClick(index,$event)"
                        v-for="(item,index) in items"
                        :key="index"
                        :class="activeIndex == index?'active':''">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer addrbook-footer">
            <footer-html></footer-html>
        </div>
    </div>
</template>

<script>
    import footerHtml from '../common/footerHtml';
    import headerHtml from '../common/headerHtml';
    export default {
        name: "addrbook",
        components:{
            footerHtml,headerHtml
        },
        data(){
            return {
                addrbookData:[],
                items:[],
                activeIndex:-1,
                timer:null,
                scrollHeight:0,//当前滚动条的高度
                height:0,//点击元素至内容区的总高度
            }
        },
        methods:{
            handleClick(i,e){
                e.stopPropagation();
                if (localStorage.getItem('aScrollHeight')!==null){
                    this.scrollHeight = parseInt(localStorage.getItem('aScrollHeight'));
                }
                this.activeIndex = i;
                clearInterval(this.timer)
                for (let z=0;z<i+1;z++){
                    this.height += this.$refs.addrbookchild[z].offsetHeight
                }
                this.timer = setInterval(()=>{
                    if (this.scrollHeight < this.height){
                        this.scrollHeight ++;
                    } else{
                        this.scrollHeight --;
                    }
                    this.$refs.addrbookcontent.scrollTop = this.scrollHeight;
                    localStorage.setItem('aScrollHeight',this.scrollHeight)
                    if (this.scrollHeight == this.height){
                        clearInterval(this.timer)
                    }
                },10)
                console.log(this.height)
            },
            handleGoBack(id,e){
                e.stopPropagation();
                this.$router.push({path:'/wechat',query:{id,type:'1'}})
            },
            handleTouchStart(){

            },
            handleTouchMove(){
                let params = {
                    that:this,
                    nowNum:1,
                }
                this.$store.commit('moveLeftRight',params)
            },
            handleTouchEnd(){
                this.$store.state.countNum = 0;
            },
            handleClickContent(){
                clearInterval(this.timer)
            },
            handleScroll(){
                let height = 0;
                // let height0 = this.$refs.addrbookchild[0].offsetHeight;
                let len = this.$refs.addrbookchild.length;
                for (let z=0;z<len;z++){
                    height += this.$refs.addrbookchild[z].offsetHeight
                }
                console.log(this.$refs.addrbookcontent.scrollTop,height);
            },
        },
        mounted(){

        },
        created(){
            for(let i=0;i<26;i++){
                let bigStr = String.fromCharCode(65+i)
                this.items.push(bigStr);//输出A-Z 26个大写字母
                let bookobj = {
                    orderCode:bigStr,
                    orderArr:[],
                }
                let obj = {
                    id:'',
                    name: '',
                }
                for (let j=0;j<3;j++){
                    obj.id = (i + 1) + '' + j;
                    obj.name = bigStr + '豆豆' + j;
                    bookobj.orderArr.push(obj)
                }
                this.addrbookData.push(bookobj)
            }
            this.addrbookData.unshift({
                orderCode:'',
                orderArr:[
                    {
                        id:'01',
                        name:'中国电信客服'
                    },
                    {
                        id:'02',
                        name:'中国移动客服'
                    },
                    {
                        id:'03',
                        name:'中国联调客服'
                    },
                ]
            });
        },
    }
</script>

<style scoped lang="less">
    .addrbook{
        width: 100%;
        height: 100%;
        background: #eee;
        .addrbook-content{
            width: 100%;
            height: 84%;
            position: relative;
            .addrbook-fixed{
                /*position: absolute;*/
                position: fixed;
                margin-top: 5%;
                top: 5%;
                right: 0;
                padding: 2%;
                font-size: 0.45rem;
                ul{
                    text-align: center;
                    li.active{
                        background: green;
                        color:#fff;
                        border-radius: 5px;
                    }
                }
            }
            .addrbook-child{
                width: 100%;
                .addrbook-kongge{
                    height: 2%;
                    width: 96%;
                    background: #eee;
                    font-size: 0.4rem;
                    padding: 1% 2%;
                }
                .addrbook-auther{
                    width: 96%;
                    padding: 2%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    .addrbook-child-img{
                        width: 1.2rem;
                        height: 1.2rem;
                        border-radius: 10px;
                        background: green;
                        display: inline-block;
                    }
                    .addrbook-name{
                        font-size: 0.4rem;
                        padding: 0 2%;
                    }
                }
            }
        }
    }
</style>