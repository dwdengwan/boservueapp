<template>
    <div class="all search">
        <div class="header search-header">
            <div class="search-header-name">违约模拟</div>
            <div class="search-header-goback" @touchend="handleGoBack"></div>
        </div>
        <div class="content search-content">
            <div class="search-flagpool">
                <div class="search-flagpool-right">标签池</div>
                <div class="search-flagpool-left">
                    <div
                        class="search-flagpool-leftt"
                        @touchend="handleFlag(0)">主题筛选</div>
                    <div
                        class="search-flagpool-lefta"
                        v-show="!showFlag"
                        @touchend="handleFlag(0)">
                    </div>
                    <div
                        class="search-flagpool-leftb"
                        v-show="showFlag"
                        @touchend="handleFlag(0)">
                    </div>
                </div>
            </div>
            <div class="search-flagarea">
                <div class="search-flagarea-father"
                     @touchstart="handleTouchStart"
                     @touchend.stop="handleClickBack">
                    <div
                        class="search-flagarea-child"
                        v-for="(flag,index) in flagData"
                        :key="index"
                        @touchend.stop="handleSelect(index,0)"
                        :style="{'border':`1px solid ${$common.randomColor()}`,'color':$common.randomColor() }">
                        {{flag.name}}
                    </div>
                </div>
            </div>
            <div class="search-myself-flag">
                我选择的标签
            </div>
            <div class="search-myselfarea">
                <div class="search-myselfarea-father"
                     @touchstart="handleTouchStart"
                     @touchend.stop="handleClickBack">
                    <div v-for="(flag,index) in flagData" :key="index">
                        <div class="search-myselfarea-child"  v-if="flag.flag" :style="{'border':`1px solid ${$common.randomColor()}` ,'color':$common.randomColor()}">
                            <div>{{flag.name}}</div>
                            <div
                                class="search-myselfarea-child-colse"
                                :style="{'border':`1px solid ${$common.randomColor()}`}"
                                @touchend.stop="handleSelect(index,1)">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-more">
                <div class="search-more-right" @touchend="handleFlag(1)">
                    更多筛选
                </div>
                <div class="search-more-left" @touchend="handleFlag(1)" v-show="!showMoreFlag"></div>
                <div class="search-more-lefta" @touchend="handleFlag(1)" v-show="showMoreFlag"></div>
            </div>
            <div class="search-btn">
                <div class="search-btnc" :style="{'background':$common.randomColor() }">违约率分析</div>
            </div>
            <div class="search-text">
                <div v-for="(text,index) in textData" :key="index">{{text.text}}</div>
            </div>
            <div class="search-fixed flag" v-show="showFlag">
                <div class="search-fixed-child" v-for="(flag,index) in flagData" :key="index">
                    {{flag.name}}
                </div>
            </div>
            <div class="search-fixed moreFlag" v-show="showMoreFlag">
                <div class="search-fixed-child" v-for="(flag,index) in flagData" :key="index">
                    {{flag.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                flagData:[
                    {
                        id:'10001',
                        name:'时尚',
                        flag:1,
                    },
                    {
                        id:'10002',
                        name:'时尚2',
                        flag:0,
                    },
                    {
                        id:'10003',
                        name:'时尚时尚时尚最时尚3',
                        flag:1,
                    },
                    {
                        id:'10004',
                        name:'时尚4',
                        flag:0,
                    },
                    {
                        id:'10005',
                        name:'时尚5',
                        flag:1,
                    },
                    {
                        id:'10006',
                        name:'时尚6',
                        flag:0,
                    },
                    {
                        id:'10007',
                        name:'时尚7',
                        flag:1,
                    },
                    {
                        id:'10008',
                        name:'时尚8',
                        flag:0,
                    },
                    {
                        id:'10009',
                        name:'时尚9',
                        flag:1,
                    },
                    {
                        id:'10010',
                        name:'时尚10',
                        flag:0,
                    },
                    {
                        id:'10011',
                        name:'时尚11',
                        flag:1,
                    },
                    {
                        id:'10012',
                        name:'时尚12',
                        flag:0,
                    },
                    {
                        id:'10013',
                        name:'时尚13',
                        flag:1,
                    },
                    {
                        id:'10014',
                        name:'时尚14',
                        flag:1,
                    },
                    {
                        id:'10015',
                        name:'时尚15',
                        flag:0,
                    },
                    {
                        id:'10016',
                        name:'时尚16',
                        flag:0,
                    },
                    {
                        id:'10017',
                        name:'时尚17',
                        flag:1,
                    },
                    {
                        id:'10018',
                        name:'时尚18',
                        flag:0,
                    },
                    {
                        id:'10019',
                        name:'时尚19',
                        flag:0,
                    },
                    {
                        id:'10020',
                        name:'时尚20',
                        flag:0,
                    },
                ],
                textData:[
                    {
                        text:'解释说明文字：'
                    },
                    {
                        text:'1、解释说明文字。'
                    },
                    {
                        text:'2、解释说明文字。'
                    },
                    {
                        text:'3、解释说明文字。'
                    },
                ],
                longClick:0,
                timeOutEvent:0,
                showFlag:false,
                showMoreFlag:false,
            }
        },
        methods:{
            //返回上一页
            handleGoBack(){
                this.$router.go(-1);
            },
            //选择标签
            handleSelect(index,num){
                if (num){
                    //删除标签
                    this.$set(this.flagData[index],'flag',0);
                } else {
                    //添加标签
                    this.$set(this.flagData[index],'flag',1);
                }
            },
            //主题筛选
            handleFlag(num){
                if (num){
                    this.showMoreFlag = !this.showMoreFlag;
                    this.showFlag = false;
                } else{
                    this.showFlag = !this.showFlag;
                    this.showMoreFlag = false;
                }
            },
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
                    console.log('点击事件')
                }else{
                    //todo 滑动事件
                    console.log('滑动了。。。。')
                }
            },
        },
        destroyed(){
            this.timeOutEvent = 0;
            clearInterval(this.timeOutEvent)
        }
    }
</script>

<style scoped lang="less">
.search{
    padding: 0 2%;
    width: 96%;
    .search-header{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .search-header-name{
            color:var(--backfriend-name);
        }
        .search-header-goback{
            position: absolute;
            width: 0.35rem;
            height: 0.35rem;
            border-bottom: 2px solid var(--backfriend-name);
            border-left: 2px solid var(--backfriend-name);
            transform: rotate(45deg);
            top: 30%;
            left: 0;
        }
    }
    .search-content{
        height: 94%;
        position: relative;
        .search-flagpool{
            height: 6%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .search-flagpool-left{
                display: flex;
                justify-content: flex-end;
                width: 50%;
                align-items: center;
                .search-flagpool-leftt{

                }
                .search-flagpool-lefta,
                .search-flagpool-leftb{
                    margin: 0 5%;
                    width: 0.35rem;
                    height: 0.35rem;
                    transform: rotate(45deg);
                }
                .search-flagpool-lefta{
                    border-bottom: 2px solid var(--backfriend-name);
                    border-right: 2px solid var(--backfriend-name);
                }
                .search-flagpool-leftb{
                    border-top: 2px solid var(--backfriend-name);
                    border-left: 2px solid var(--backfriend-name);
                }
            }
        }
        .search-flagarea{
            width: 100%;
            overflow-x: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            .search-flagarea-father{
                /*overflow-x: auto;*/
                width: 150%;
                margin-left: 50%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;
                .search-flagarea-child{
                    margin: 0.1rem;
                    flex-shrink: 0;
                    border: 1px solid #940619;
                    border-radius: 10px;
                    text-align: center;
                    padding: 0.15rem;
                }
            }
        }
        /*隐藏滚动条*/
        .search-flagarea::-webkit-scrollbar {
            display: none;
        }
        .search-myself-flag{
            height: 6%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .search-myselfarea{
            width: 100%;
            overflow-x: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            .search-myselfarea-father{
                width: 150%;
                margin-left: 50%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;
                .search-myselfarea-child{
                    margin: 0.1rem;
                    flex-shrink: 0;
                    border: 1px solid #940619;
                    border-radius: 10px;
                    text-align: center;
                    padding: 0.15rem;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    .search-myselfarea-child-colse {
                        position: relative;
                        width: 0.4rem;
                        height: 0.4rem;
                        border-radius: 50%;
                        border: 1px solid red;
                        margin-left: 0.2rem;
                    }

                    .search-myselfarea-child-colse::before,
                    .search-myselfarea-child-colse::after {
                        position: absolute;
                        content: ' ';
                        background-color: #fff;
                        left: 0.2rem;
                        width: 1px;
                        height: 0.4rem;
                    }

                    .search-myselfarea-child-colse::before {
                        transform: rotate(45deg);
                    }

                    .search-myselfarea-child-colse::after {
                        transform: rotate(-45deg);
                    }
                }
            }
        }
        /*隐藏滚动条*/
        .search-myselfarea::-webkit-scrollbar {
            display: none;
        }
        .search-more{
            height: 6%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .search-more-left,
            .search-more-lefta{
                margin: 0 5%;
                width: 0.35rem;
                height: 0.35rem;
                transform: rotate(45deg);
            }
            .search-more-left{
                border-bottom: 2px solid var(--backfriend-name);
                border-right: 2px solid var(--backfriend-name);
            }
            .search-more-lefta{
                border-top: 2px solid var(--backfriend-name);
                border-left: 2px solid var(--backfriend-name);
            }
        }
        .search-btn{
            height: 6%;
            display: flex;
            justify-content: center;
            align-items: center;
            .search-btnc{
                width: 80%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 1rem;
            }
        }
        .search-text{
            width: 96%;
            padding: 2%;
            div{
                padding: 1% 0;
                font-size: 0.35rem;
            }
        }
        .search-fixed{
            position: absolute;
            left: 0;
            background-color: rgba(0,0,0,0.2);
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            align-content: flex-start;
            .search-fixed-child{
                background-color: rgba(255,255,255,0.2);
                padding: 2%;
                margin: 2%;
            }
        }
        .flag{
            top: 6%;
        }
        .moreFlag{
            bottom: 10%;
        }
    }
}
</style>