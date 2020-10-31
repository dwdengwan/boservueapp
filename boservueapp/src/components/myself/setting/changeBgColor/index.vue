<template>
    <div class="all changeBgColor">
        <div class="header">
            <go-back-header></go-back-header>
        </div>
        <div class="content changeBgColor-content">
            <div
                class="changeBgColor-content-child"
                v-for="changeBgColor of changeBgColorData"
                :key="changeBgColor.id"
                :style="{'color':changeBgColor.color,'background':changeBgColor.bgColor}"
                @touchend="changeBgColorFn(changeBgColor)">
                <div>
                    {{changeBgColor.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    export default {
        name: "setting",
        components:{
            goBackHeader
        },
        data(){
            return {
                changeBgColorData:[
                    {
                        id:1,
                        name:'酒红酒绿',
                        color:'green',
                        bgColor:'#940619',
                    },
                    {
                        id:2,
                        name:'小清新',
                        color:'yellow',
                        bgColor:'pink',
                    },
                    {
                        id:3,
                        name:'护眼模式',
                        color:'#deffdd',
                        bgColor:'#a19aff',
                    },
                    {
                        id:4,
                        name:'白天模式',
                        color:'#000',
                        bgColor:'#fff',
                    },
                    {
                        id:5,
                        name:'亮瞎狗眼',
                        color:'#e19eff',
                        bgColor:'#6eb5ff',
                    },
                    {
                        id:6,
                        name:'闪烁模式',
                        color:this.color,
                        bgColor:this.bgColor,
                    }
                ],
                timerout:null,
                color:this.$common.randomColor(),
                bgColor:this.$common.randomColor(),
            }
        },
        methods:{
            changeBgColorFn(item){
                clearInterval(this.timerout);
                this.timerout = null;
                let app = document.getElementById('app');
                if (item.name == '闪烁模式'){
                    this.lineFine()
                }else {
                    app.style.setProperty('--normar-bgcolor', item.bgColor);
                    app.style.setProperty('--font-color', item.color);
                    app.style.setProperty('--active-bgcolor', item.bgColor);
                }
            },
            lineFine(){
                let self = this;
                this.timerout = setInterval(()=>{
                    self.$nextTick(()=>{
                        self.color = self.$common.randomColor();
                        self.bgColor = self.$common.randomColor();
                        self.$set(self,'color',self.color);
                        self.$set(self,'bgColor',self.bgColor);
                    })
                    let app = document.getElementById('app');
                    app.style.setProperty('--normar-bgcolor', self.bgColor);
                    app.style.setProperty('--font-color', self.color);
                    app.style.setProperty('--active-bgcolor', self.bgColor);
                },5000)
            }
        },
        mounted(){

        },
        created(){

        },
        destroyed(){
            // clearInterval(this.timerout);
            // this.timerout = null;
        }
    }
</script>

<style scoped lang="less">
.changeBgColor{
    width: 100%;
    .changeBgColor-content{
        width: 96%;
        height: 91.5%;
        overflow: auto;
        padding: 2%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .changeBgColor-content-child{
            width: 45%;
            height: 45%;
            border: 2px solid #00c800;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2%;
        }
    }
}
</style>