<template>
    <div class="navbarone all">
        <div class="navbarone-top">
            <div class="navbarone-topc">
                <span>left</span>
                <span>MUSIC</span>
                <span>search</span>
            </div>
        </div>
        <div class="navbarone-bottom content">
            <div class="navbarone-bottomc" :style="{'background-color':$common.randomColor()}" v-for="(item,index) in navbaroneData" :key="index">{{item.name}}</div>
        </div>
        <div class="navbarone-fixed"></div>
    </div>
</template>

<script>
    export default {
        name: "navbarnone",
        data(){
            return {
                navbaroneData:[
                    {
                        name:"music1"
                    },
                    {
                        name:"music2"
                    },
                    {
                        name:"music3"
                    },
                    {
                        name:"music4"
                    },
                    {
                        name:"music5"
                    },
                    {
                        name:"music6"
                    },
                    {
                        name:"music7"
                    },
                    {
                        name:"music8"
                    },
                    {
                        name:"music9"
                    },
                    {
                        name:"music10"
                    },
                    {
                        name:"music11"
                    },
                    {
                        name:"music12"
                    },
                ],
            }
        }
    }
</script>

<style lang="less" scoped>
.navbarone{
    position: relative;
    .navbarone-top{
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        .navbarone-topc{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
    .navbarone-bottom{
        height: 90%;
        background-color: var(--font-color);
        overflow-y: auto;
        .navbarone-bottomc{
            height: 45%;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            font-weight: bolder;
        }
    }
    .navbarone-fixed{
        position: absolute;
        width: 20%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: var(--font-color);
    }
}
</style>