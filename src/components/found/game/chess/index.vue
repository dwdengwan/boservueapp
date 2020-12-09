<template>
    <div class="all chess">
        <div class="header chess-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content chess-content">
            <div class="chess-father">
                <div class="chess-child" v-for="(item,index) in chessData" :key="index">
                </div>
                <div class="chess-content-child lche">
                    <div class="child-name">车</div>
                </div>
                <div class="chess-content-child lma">
                    <div class="child-name">马</div>
                </div>
                <div class="chess-content-child lxiang">
                    <div class="child-name">相</div>
                </div>
                <div class="chess-content-child lshi">
                    <div class="child-name">士</div>
                </div>
                <div class="chess-content-child lshuai">
                    <div class="child-name">帅</div>
                </div>
                <div class="chess-content-child lshi2">
                    <div class="child-name">士</div>
                </div>
                <div class="chess-content-child lxiang2">
                    <div class="child-name">相</div>
                </div>
                <div class="chess-content-child lma2">
                    <div class="child-name">马</div>
                </div>
                <div class="chess-content-child lche2">
                    <div class="child-name">车</div>
                </div>
                <div class="chess-content-child lpao">
                    <div class="child-name">炮</div>
                </div>
                <div class="chess-content-child lpao2">
                    <div class="child-name">炮</div>
                </div>
                <div class="chess-content-child lbing">
                    <div class="child-name">兵</div>
                </div>
                <div class="chess-content-child lbing2">
                    <div class="child-name">兵</div>
                </div>
                <div class="chess-content-child lbing3">
                    <div class="child-name">兵</div>
                </div>
                <div class="chess-content-child lbing4">
                    <div class="child-name">兵</div>
                </div>
                <div class="chess-content-child lbing5">
                    <div class="child-name">兵</div>
                </div>


                <div class="chess-content-child2 hche">
                    <div class="child-name">车</div>
                </div>
                <div class="chess-content-child2 hma">
                    <div class="child-name">马</div>
                </div>
                <div class="chess-content-child2 hxiang">
                    <div class="child-name">相</div>
                </div>
                <div class="chess-content-child2 hshi">
                    <div class="child-name">士</div>
                </div>
                <div class="chess-content-child2 hshuai">
                    <div class="child-name">帅</div>
                </div>
                <div class="chess-content-child2 hshi2">
                    <div class="child-name">士</div>
                </div>
                <div class="chess-content-child2 hxiang2">
                    <div class="child-name">相</div>
                </div>
                <div class="chess-content-child2 hma2">
                    <div class="child-name">马</div>
                </div>
                <div class="chess-content-child2 hche2">
                    <div class="child-name">车</div>
                </div>
                <div class="chess-content-child2 hpao">
                    <div class="child-name">炮</div>
                </div>
                <div class="chess-content-child2 hpao2">
                    <div class="child-name">炮</div>
                </div>
                <div class="chess-content-child2 hbing">
                    <div class="child-name">兵</div>
                </div>
                <div class="chess-content-child2 hbing2">
                    <div class="child-name">兵</div>
                </div>
                <div class="chess-content-child2 hbing3">
                    <div class="child-name">兵</div>
                </div>
                <div class="chess-content-child2 hbing4">
                    <div class="child-name">兵</div>
                </div>
                <div class="chess-content-child2 hbing5">
                    <div class="child-name">兵</div>
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
                chessData:[
                    {},{},{},{},{},{},{},{},{},
                    {},{},{},{},{},{},{},{},{},
                    {},{},{},{},{},{},{},{},{},
                    {},{},{},{},{},{},{},{},{},
                    {},{},{},{},{},{},{},{},{},
                    {},{},{},{},{},{},{},{},{},
                    {},{},{},{},{},{},{},{},{},
                    {},{},{},{},{},{},{},{},{},
                ],
            }
        },
        methods:{

        },
        created(){

        },
        destroyed(){

        }
    }
</script>

<style scoped lang="less">
    .chess{
        position: relative;
        .chess-content{
            padding: 2%;
            height: calc(60% - 2px);
            width: calc(90% - 2px);
            border: 1px solid #eee;
            display: flex;
            justify-content: space-around;
            margin: 3%;
            .chess-father{
                width: 100%;
                height: calc(100% - 2px);
                border: 1px solid #eee;
                display: flex;
                flex-wrap: wrap;
                .chess-child{
                    width: calc((100% - 8px)/8);
                    height: calc((100% - 9px)/9);
                    border-right: 1px solid #eee;
                    border-bottom: 1px solid #eee;
                }
            }
            .chess-content-child,
            .chess-content-child2{
                position: absolute;
                top: 6%;
                left: 0;
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                background-color: #940619;
                display: flex;
                justify-content: center;
                align-items: center;
               .child-name{
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   width: 0.8rem;
                   height: 0.8rem;
                   border-radius: 50%;
                   background-color: #eee;
                   font-weight: bolder;
                   font-size: 0.5rem;
               }
            }
            .chess-content-child{
                transform:rotate(180deg);
            }
            .lma{
                left: 11%;
            }
            .lxiang{
                left: 23%;
            }
            .lshi{
                left: 34%;
            }
            .lshuai{
                left: 45%;
            }
            .lshi2{
                left: 56%;
            }
            .lxiang2{
                left: 67%;
            }
            .lma2{
                left: 78%;
            }
            .lche2{
                left: 89%;
            }
            .lpao{
                top: 19%;
                left:11%;
            }
            .lpao2{
                top: 19%;
                left:78%;
            }
            .lbing{
                top: 26%;
                left:0%;
            }
            .lbing2{
                top: 26%;
                left:23%;
            }
            .lbing3{
                top: 26%;
                left:45%;
            }
            .lbing4{
                top: 26%;
                left:67%;
            }
            .lbing5{
                top: 26%;
                left:89%;
            }
        }
    }
</style>