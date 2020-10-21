<template>
    <!--@touchstart="handleTouchStart"-->
    <!--@touchmove="handleTouchMove"-->
    <!--@touchend="handleTouchEnd"-->
    <div class="all addrbook">
        <div class="header addrbook-header">
            <header-html></header-html>
        </div>
        <div class="content addrbook-content" ref="addrbookcontent" @touchend="handleClickContent" @scroll="handleScroll">
            <div class="addrbook-child" v-for="item in addrbookData" :key="item.orderCode" ref="addrbookchild">
                <div class="addrbook-kongge" v-if="item.orderCode !== ''">{{item.orderCode}}</div>
                <div class="addrbook-auther"
                     v-for="(bitem,bindex) in item.orderArr"
                     :key="bindex"
                     @touchstart="handleTouchStart(bitem,bindex,$event)"
                     @touchend="handleGoBack(bitem,bindex,$event)">
                    <span class="addrbook-child-img" :style="{background:$common.randomColor()}"></span>
                    <span class="addrbook-name">{{bitem.name}}</span>
                </div>
            </div>
            <div class="addrbook-fixed">
                <ul>
                    <li
                        @touchend="handleClick(index,$event)"
                        v-for="(item,index) in items"
                        :key="index"
                        :class="{ active: activeIndex == index, scroll:ascroll == index }">
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
                activeIndex:-1,//点击位置的下标
                timer:null,
                scrollHeight:0,//当前滚动条的高度
                ascroll:0,
                longClick:0,
                timeOutEvent:0,
            }
        },
        methods:{
            handleClick(i,e){
                e.stopPropagation();
                let height = 0;
                // let zmj = 0;//进过的位置下标
                let heightArr = [];
                this.activeIndex = i;
                clearInterval(this.timer)
                for (let z=0;z<i+1;z++){
                    height += this.$refs.addrbookchild[z].offsetHeight;
                    heightArr.push(height)
                }
                localStorage.setItem('heightArr',heightArr)
                this.oldScrollLocation()
                this.timer = setInterval(()=>{
                    if (this.scrollHeight < height){
                        this.scrollHeight ++;
                    } else{
                        this.scrollHeight --;
                    }
                    this.$refs.addrbookcontent.scrollTop = this.scrollHeight;
                    if (this.scrollHeight == height){
                        clearInterval(this.timer)
                        this.ascroll = -1;
                    }
                },2)
            },
            handleGoBack(item,i,e){
                clearTimeout(this.timeOutEvent);
                if(this.timeOutEvent!=0 && this.longClick==0){//点击事件
                    e.stopPropagation();
                    let name = item.name;
                    sessionStorage.setItem('userName',name);
                    console.log(item.name,i)
                    this.$router.push({path:'/wechat',query:{name,type:'1'}})
                }
            },
            handleTouchStart(){
                this.longClick=0;//设置初始为0
                this.timeOutEvent = setTimeout(()=>{
                    //此处为长按事件-----在此显示遮罩层及删除按钮
                    this.longClick=1;//假如长按，则设置为1
                },300);
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
                //滚动条滚动经过的位置 指示器变化
                let height = 0;
                let scrollHeight = this.$refs.addrbookcontent.scrollTop;
                localStorage.setItem('ascrollHeight',scrollHeight)
                let scrollHeightArr = [];
                let len = this.$refs.addrbookchild.length;
                for (let z=0;z<len;z++){
                    height += this.$refs.addrbookchild[z].offsetHeight;
                    scrollHeightArr.push(height)
                }
                for (let m=0;m<scrollHeightArr.length;m++){
                    if (scrollHeight>scrollHeightArr[m-1]&&scrollHeight<scrollHeightArr[m]&&m!==0){
                        this.ascroll = m-1;
                    }
                }
            },
            oldScrollLocation(){
                if (localStorage.getItem('ascrollHeight')==null){
                    this.scrollHeight = 0;
                } else {
                    this.scrollHeight = parseInt(localStorage.getItem('ascrollHeight'))
                }
            },
            addDataPush(name){//数据的追加
                for(let i=0;i<26;i++){
                    let bigStr = String.fromCharCode(65+i);
                    let j = 3;
                    if (name !== undefined){
                        j = name.split('')[0].toUpperCase() == bigStr ? 4:3;
                    }
                    this.items.push(bigStr);//输出A-Z 26个大写字母
                    let bookobj = {
                        orderCode:bigStr,
                        orderArr:[],
                    }
                    for (let k=0;k<j;k++){
                        let obj = {
                            id:'',
                            name: '',
                        }
                        obj.id = (i + 1) + '' + k;
                        if ( k < 3){
                            obj.name = bigStr + '豆豆' + k;
                        } else if (k == 3){
                            obj.name = name;
                        }
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
                            name:'中国联通客服'
                        },
                    ]
                });
            }
        },
        mounted(){
            this.oldScrollLocation()
            this.$refs.addrbookcontent.scrollTop = this.scrollHeight;
        },
        created(){
            console.log(this.$route.query)
            sessionStorage.setItem('isWeChat',1)
            let name = this.$route.query.name;
            this.addDataPush(name);
            console.log(name)
        },
        destroyed(){
            //页面离开时，清除定时器
            clearInterval(this.timer)
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
                position: fixed;
                margin-top: 5%;
                top: 5%;
                right: 0;
                padding: 2%;
                font-size: 0.45rem;
                ul{
                    text-align: center;
                    li{

                        font-size:0.4rem;
                        border-radius: 5px;
                    }
                    li.scroll{
                        background: rgba(22, 200, 67, 0.5);
                        color:#fff;
                    }
                    li.active{
                        background: green;
                        color:#fff;
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