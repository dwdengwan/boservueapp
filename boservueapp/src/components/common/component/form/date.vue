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
                        v-for="(month,index) in monthData"
                        :key="index"
                        :class="{'currday':(month == 28)&&(index < 37 && index > 7),'oldday':(index > 37 || index < 7)}">
                    {{month}}
                </div>
            </div>
        </div>
        <div class="date-fixed" v-show="showDate">
            <div class="data-fixed-year content">
                <div class="data-fixed-yearc" v-for="(y,index) in yDate" :key="index">
                    {{y}}
                </div>
            </div>
            <div class="data-fixed-month content">
                <div class="data-fixed-monthc" v-for="(m,index) in mDate" :key="index">
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
                monthData:[24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2,3,4],
                year:new Date().getFullYear(),
                month:new Date().getMonth() + 1,
                showDate:false,
                mDate:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                yDate:['2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年','2020年','2021年','2021年','2022年','2023年','2024年','2025年','2026年','2027年','2028年','2029年','2030年']
            }
        },
        methods:{
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
            },
            handleSelect(){
                console.log('dyk kyd');
                this.showDate = !this.showDate;
            }
        }
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
        }
    }
}
</style>