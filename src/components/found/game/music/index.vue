<template>
    <div class="all music">
        <div class="header music-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content music-content">
            <div class="music-content-child" v-for="(music,index) in musicData" :key="index">
                {{music}}
                <div class="child-fixed" v-if="index == currIndex">
                    <!--{{music}}-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    export default {
        name: "index",
        components:{
            goBackHeader
        },
        data(){
            return{
                musicData:[
                    '挥着翅膀的女孩',
                    '词曲:陈光荣',
                    '演唱:容祖儿',
                    '当我还是一个懵懂的女孩',
                    '遇到爱不懂爱，从过去到现在',
                    '直到他也离开，留我在云海徘徊',
                    '明白没人能取代,他曾给我的信赖',
                    'See me fly I\'m proud to fly up high',
                    '不能一直依赖别人给我拥戴',
                    'Believe me I can fly I\'m singing in the sky',
                    '就算风雨覆盖，我也不怕重来',
                    '我已不是那个懵懂的女孩',
                    '遇到爱用力爱仍信真爱',
                    '风雨来不避开谦虚把头低下来',
                    '像沙鸥来去天地只为寻一个奇迹',
                    'See me fly I\'m proud to fly up high',
                    '生命已经打开我要那种精彩',
                    'Believe me I can fly I\'m singing in the sky',
                    '你曾经对我说做勇敢的女孩',
                    '我盼有一天能和你相见',
                    '骄傲地对着天空说是借着你的风',
                    'Let me fly I\'m proud to fly up high',
                    '生命已经打开我要那种精彩',
                    'Believe me I can fly I\'m singing in the sky',
                    '你曾经对我说做勇敢的女孩',
                    '我不会孤单因为你都在',
                ],
                currIndex:0,
                timerout:null,
            }
        },
        methods:{
            progress(){
                let self = this;
                clearInterval(this.timerout);
                this.timerout = null;
                this.timerout = setInterval(()=>{
                    self.currIndex ++;
                    console.log(self.currIndex);
                    if (self.currIndex == self.musicData.length - 1){
                        clearInterval(this.timerout);
                        this.timerout = null;
                    }
                },10000)
            }
        },
        created(){
            // this.progress();
        },
        destroyed(){
            clearInterval(this.timerout);
            this.timerout = null;
        }
    }
</script>

<style scoped lang="less">
.music{
   .music-content{
       height: 90%;
       margin: 1% 0;
       padding: 2%;
       width: 96%;
       .music-content-child{
           text-align: center;
           padding: 1% 0;
           position: relative;
           /*color:#940619;*/
           .child-fixed{
               position: absolute;
               height: 100%;
               display: flex;
               justify-content: center;
               align-items: center;
               width: 0%;
               color:#940619;
               background-color: rgba(100,100,100,0.5);
               bottom: 0;
               animation:move 10s;
           }
           @keyframes move{
               0%{width:0%;}
               100%{width:100%;}
           }
       }
   }
}
</style>