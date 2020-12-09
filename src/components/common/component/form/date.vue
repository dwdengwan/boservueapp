<template>
    <div class="date">
        <div class="date-top">
            <div class="date-t-right" @touchend="handleClick(0)"></div>
            <div class="date-t-middle" @touchend="handleSelect">{{year}}年{{month}}月</div>
            <div class="date-t-left" @touchend="handleClick(1)"></div>
        </div>
        <div>
            <div class="date-middle">
                <div v-for="(day,index) in dayData" :key="index">{{day}}</div>
            </div>
            <div class="date-bottom">
                <div
                        v-for="(monthItem,index) in monthData"
                        :key="index"
                        :class="{'currday':(monthItem == new Date().getDate())&&(index < 37 && index > 7),'oldday':(index > 37 || index < 7)}">
                    {{monthItem}}
                </div>
            </div>
        </div>
        <div class="date-fixed" v-show="showDate" ref="datefixed">
            <div
                class="data-fixed-year content"
                ref="yearcontent">
                <div
                    :class="{
                        'curryYear':curryYear == y.split('年')[0],
                        'activeYear':activeYearIndex == index,
                        'data-fixed-yearc':true,
                    }"
                    ref="yearchild"
                    @touchstart="handleTouchStart"
                    @touchend.stop="handleClickBack(index,0)"
                    v-for="(y,index) in yDate"
                    :key="index">
                    {{y}}
                </div>
            </div>
            <div
                class="data-fixed-month content"
                ref="monthcontent">
                <div
                    v-for="(m,index) in mDate"
                    ref="monthchild"
                    :class="{
                        'curryMoth':curryMoth == m.split('月')[0],
                        'activeMoth':activeMothIndex == index && m !== '',
                        'data-fixed-monthc':true,
                    }"
                    @touchstart="handleTouchStart"
                    @touchend.stop="handleClickBack(index,1)"
                    :key="index">
                    {{m}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "date",
        data(){
            return {
                dayData:["日",'一','二','三','四','五','六',],
                monthData:[],
                year:new Date().getFullYear(),
                month:new Date().getMonth() + 1,
                day:new Date().getDate(),
                curryYear:new Date().getFullYear(),
                curryMoth:new Date().getMonth() + 1,
                activeYearIndex:-1,
                activeMothIndex:-1,
                showDate:false,
                longClick:0,
                timeOutEvent:0,
                scrollTimer:0,
                scrollTimer2:0,
                mDate:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                yDate:['2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年','2020年','2021年','2022年','2023年','2024年','2025年','2026年','2027年','2028年','2029年','2030年']
            }
        },
        methods:{
            //左右按钮的点击
            handleClick(num){
                if (num){
                    this.month ++;
                    if (this.month > 12){
                        this.month = 1;
                        this.year ++;
                    }
                } else{
                    this.month --;
                    if (this.month < 1){
                        this.month = 12;
                        this.year --;
                    }
                }
                console.log(this.getMonthDay(this.year,this.month),this.getWeekDay(this.year,this.month));
                console.log(this.getMonthDate(this.year,this.month));
                this.$set(this,'monthData',this.getMonthDate(this.year,this.month))
            },
            //2020年11月 的点击
            handleSelect(){
                this.showDate = !this.showDate;
                this.activeYearIndex = -1;
                this.activeMothIndex = -1;
                this.$refs.yearcontent.scrollTop = 0;
                this.$refs.monthcontent.scrollTop = 0;
                if (this.showDate){
                    this.handleScroll()
                }
            },
            //年 月的点击
            handleClickYear(index,num){
                clearInterval(this.scrollTimer);
                clearInterval(this.scrollTimer2);
                if(num){
                    this.activeMothIndex = index;
                }else{
                    this.activeYearIndex = index;
                    this.activeMothIndex = 0;
                    let scrollTop2 = this.$refs.monthcontent.scrollTop;
                    this.scrollTimer2 = setInterval(()=>{
                        scrollTop2 --;
                        this.$refs.monthcontent.scrollTop = scrollTop2;
                        if (!scrollTop2){
                            clearInterval(this.scrollTimer2);
                        }
                    },20)
                }

            },
            handleTouchStart(){
                this.longClick=0;//设置初始为0
                this.timeOutEvent = setTimeout(()=>{
                    //此处为长按事件-----在此显示遮罩层及删除按钮
                    this.longClick=1;//假如长按，则设置为1
                },300);
            },
            handleClickBack(index,num){
                clearTimeout(this.timeOutEvent);
                if(this.timeOutEvent!=0 && this.longClick==0){//点击事件
                    this.handleClickYear(index,num);
                    if (num){
                        this.month = this.mDate[index].split('月')[0];
                    } else{
                        this.year = this.yDate[index].split('年')[0];
                        this.month = this.mDate[0].split('月')[0];
                    }
                }else{
                    //todo 滑动事件
                    clearInterval(this.scrollTimer);
                    clearInterval(this.scrollTimer2);
                    console.log('滑动了。。。。')
                }
            },
            //年 月的滚动
            handleScroll(){
                clearInterval(this.scrollTimer);
                clearInterval(this.scrollTimer2);
                this.$nextTick(()=>{
                    let index = this.yDate.findIndex((item)=> item.split('年')[0] == this.curryYear)
                    let index2 = this.mDate.findIndex((item)=> item.split('月')[0] == this.curryMoth)
                    let len = index + 3;
                    let len2 = index2 + 3;
                    let allHeight = this.$refs.yearchild[0].clientHeight * len;
                    let allHeight2 = this.$refs.monthchild[0].clientHeight * len2;
                    let curryTop = this.$refs.yearcontent.scrollTop;
                    let curryTop2 = this.$refs.monthcontent.scrollTop;
                    let dateHeight = this.$refs.datefixed.clientHeight;
                    this.scrollTimer = setInterval(()=>{
                        if (curryTop < allHeight - dateHeight){
                            curryTop ++
                        } else {
                            clearInterval(this.scrollTimer)
                        }
                        this.$refs.yearcontent.scrollTop = curryTop;
                    },20);
                    this.scrollTimer2 = setInterval(()=>{
                        if (curryTop2 < allHeight2 - dateHeight){
                            curryTop2 ++
                        } else {
                            clearInterval(this.scrollTimer2)
                        }
                        this.$refs.monthcontent.scrollTop = curryTop2;
                    },20)
                })
            },
            //获取指定月份的天数
            getMonthDay(y,m){
                let d = new Date(y, m, 0);
                return d.getDate();
            },
            //获取指定月份的第一天是周几
            getWeekDay(y,m){
                let day = new Date(`${m}/1/${y}`).getDay();
                return day
            },
            /**
             * 1、六周 monthDay 长度为42
             * 2、获取指定月的天数 curryMonth:[]
             * 3、获取指定月份第一天是周几和指定月份上一个月份的天数 例如 指定月份第一天是周三 上一月份31天  beforeMonth:[29(周日),30（周一）,31（周二）]
             * 4、获取指定月份下一月份数据 nextMonth.length = 42 - curryMonth.length - beforeMonth.length === 6 nextMonth:[1,2,3,4,5,6]
             * 5、monthDay = beforeMonth.concat(curryMonth).concat(nextMonth);
             * 6、入参y 指定月份的年份 m 指定月份
             * */
            getMonthDate(y,m){
                let monthDay = [];
                let curryMonth = [];
                let curryDay = this.getMonthDay(y,m);
                console.log(this.getWeekDay(y,m))
                let weekDay = this.getWeekDay(y,m)==0?7:this.getWeekDay(y,m);
                let beforeDay = 0;
                let beforeMonth = [];
                let nextMonth = [];
                let nextLen = 0;
                if (m == 1){
                    beforeDay = this.getMonthDay(y-1,12)
                } else{
                    beforeDay = this.getMonthDay(y,m-1)
                }
                for(let i = 0;i< curryDay;i++){
                    curryMonth.push(i+1)
                }
                for (let j = 0;j < weekDay;j++){
                    beforeMonth.push(beforeDay - weekDay + j + 1);
                }
                nextLen = 42 - curryDay - weekDay;
                for (let k = 0;k< nextLen;k++){
                    nextMonth.push(k + 1)
                }
                monthDay = beforeMonth.concat(curryMonth).concat(nextMonth);
                return monthDay;
            }
        },
        created(){
            this.$set(this,'monthData',this.getMonthDate(this.year,this.month))
        },
        destroyed(){
            clearTimeout(this.timeOutEvent);
            clearInterval(this.scrollTimer);
            clearInterval(this.scrollTimer2);
        },
    }
</script>

<style scoped lang="less">
.date{
    padding: 2%;
    margin: 0 3%;
    width: calc(90% - 2px);
    border: 1px solid #eee;
    border-radius: 10px;
    position: relative;
    .date-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2%;
        width: 96%;
        .date-t-right,
        .date-t-left{
            width: 0.25rem;
            height: 0.25rem;
            transform: rotate(45deg);
        }
        .date-t-right{
            border-bottom: 2px solid var(--font-color);
            border-left: 2px solid var(--font-color);
        }
        .date-t-left{
            border-top: 2px solid var(--font-color);
            border-right: 2px solid var(--font-color);
        }
    }
    .date-middle,
    .date-bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        div{
            padding: 2% 0;
            width: 14%;
            text-align: center;
        }
    }
    .date-bottom{
        flex-wrap: wrap;
        justify-content: flex-start;
        .currday{
            background-color: #00c800;
            color:#fff;
            border-radius: 10px;
        }
        .oldday{
            color:#999;
        }
    }
    .date-fixed{
        position: absolute;
        top: 15%;
        width: 95%;
        height: 82%;
        border-radius: 10px;
        background-color: rgba(255,255,255,0.5);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .data-fixed-year{
            width: calc(50% - 1px);
            /*border-right: 1px dashed #eee;*/
            height: 100%;
            overflow-y: auto;
            .data-fixed-yearc{
                height: 20%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .activeYear{
                background-color: #76c877;
                color: #fff;
            }
            .curryYear{
                background-color: #00c800;
                color: #fff;
            }
        }
        .data-fixed-month{
            width: calc(50% - 1px);
            /*border-left: 1px dashed #eee;*/
            height: 100%;
            overflow-y: auto;
            .data-fixed-monthc{
                height: 20%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .activeMoth{
                background-color: #76c877;
                color: #fff;
            }
            .curryMoth{
                background-color: #00c800;
                color: #fff;
            }
        }
    }
}
</style>