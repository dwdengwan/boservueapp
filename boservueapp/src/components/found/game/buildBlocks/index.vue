<template>
    <div class="all build-blocks">
        <div class="header build-blocks-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content build-blocks-content">
            <div id="myChart"></div>
        </div>
        <div class="footer build-blocks-footer">
            <game-footer></game-footer>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    import gameFooter from '@/components/common/gameFooter.vue';
    export default {
        name: "index",
        components:{
            goBackHeader,
            gameFooter
        },
        methods:{
            getEcharts(){
                //初始化echart对象
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                //配置echart
                myChart.setOption({
                    grid: {//整体位置
                        top: '40',
                        right: '8%',
                        left: '12%',
                        bottom: 36,
                    },
                    backgroundColor: '#fff',
                    xAxis: {
                        type: 'value',//类型--数值轴
                        position: 'top',//位置
                        boundaryGap : 0,//坐标轴两侧留白
                        offset: 8,//X轴偏移
                        axisLine : {//坐标轴轴线
                            show: 0,
                        },
                        axisTick : {show: 0},//坐标轴刻度
                        splitLine : {show: 0},//坐标轴grid区分割线
                        //data: ['10', '20', '30', '40'],//类目轴有效
                    },
                    yAxis: {
                        type: 'category',//类型--类目轴
                        name:'期数',
                        nameLocation: 'start', //轴名位置
                        nameTextStyle: {//Y轴名称
                            color: '#f00',
                        },
                        offset: 8,//Y轴偏移
                        nameGap: 15,//轴名距离
                        inverse: 1,//反转
                        boundaryGap : 0,//坐标轴两侧留白
                        axisLine : {show: 0},//坐标轴轴线
                        axisTick : {show: 0},//坐标轴刻度
                        splitLine : {//坐标轴grid区分割线
                            show: 1,
                            lineStyle:{
                                color: '#dcdcdc'
                            }
                        },
                        data: [1,2,3,4],//y轴刻度
                    },
                    series: [{
                        data: [23,24,25,26],//数据--将按照类目表依次排列
                        type: 'line',//折线图
                        label: {//标签
                            show: 1,
                            position: 'insideTopLeft',
                            distance: 12,
                            color: '#000',
                            fontSize: 14,
                        },
                        itemStyle:{//标记拐点颜色
                            // color: (param)=>{
                            //     return function(param){
                            //         console.log(param)
                            //     }
                            // }
                            color:'#0f0',
                        },
                        symbol: 'circle',//标记-实心圆
                        symbolSize: 10,//标记-大小
                        lineStyle:{color:'#ccc',},//line样式
                    }]
                });
            },
        },
        mounted(){
            this.getEcharts()
        }
    }
</script>

<style scoped lang="less">
.build-blocks-content{
    #myChart{
        width: 100%;
        height: 100%;
    }
}
</style>