<template>
    <div class="h5-content">
        <div class="h5-title">table</div>
        <div class="h5-table">
            <table>
                <thead>
                    <td>序号</td>
                    <td>姓名</td>
                    <td>年龄</td>
                    <td>学号</td>
                    <td>姓名</td>
                    <td>年龄</td>
                    <td>学号</td>
                    <td>姓名</td>
                    <td>年龄</td>
                    <td>学号</td>
                </thead>
                <tr v-for="(table,index) in tableData" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{table.name}}</td>
                    <td>{{table.age}}</td>
                    <td>{{table.stutentNo}}</td>
                    <td>{{table.name}}</td>
                    <td>{{table.age}}</td>
                    <td>{{table.stutentNo}}</td>
                    <td>{{table.name}}</td>
                    <td>{{table.age}}</td>
                    <td>{{table.stutentNo}}</td>
                </tr>
            </table>
        </div>
        <div class="h5-title">H5 新元素 -- canvas</div>
        <canvas class="h5-canvas" id="canvas"></canvas>
        <div class="h5-title">H5 新元素 -- audio</div>
        <audio controls>
            <source src="horse.ogg" type="audio/ogg">
            <source src="http://music.163.com/song/media/outer/url?id=447925558.mp3" type="audio/mpeg">
        </audio>
    </div>
</template>

<script>
    export default {
        name: "H5",
        data(){
            return {
                tableData:[
                    {
                        name:"张三",
                        age:18,
                        stutentNo:"201297250129",
                    },
                    {
                        name:"李四",
                        age:19,
                        stutentNo:"201297250130",
                    },
                    {
                        name:"王五",
                        age:18,
                        stutentNo:"201297250131",
                    },
                ],
            }
        },
        methods:{
            getCanvas(){
                let canvas = document.getElementById('canvas');
                let ctx = canvas.getContext('2d');
                ctx.fillStyle = '#971126';
                ctx.fillRect(0,0,80,100);
            }
        },
        mounted(){
            this.getCanvas()
        }
    }
</script>

<style scoped lang="less">
    .h5-content{
        width: 100%;
        height: 100%;
        .h5-title{
            text-align: center;
            padding: 2% 0;
        }
        .h5-table{
            width: 100%;
            overflow-x: auto;
            background-color: var(--font-color);
            table{
                width: 100%;
                thead{
                    color: #fff;
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    position: relative;
                    /*background-color: var(--font-color);*/
                    td{
                        text-align: center;
                        min-width: 30%;
                        display: inline-block;
                    }
                    td:first-child{
                        background-color: red;
                    }
                    td:last-child{
                        background-color: gold;
                    }
                }
                tr{
                    width: 100%;
                    /*background-color: var(--font-color);*/
                    color: #fff;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    position: relative;
                    td{
                        text-align: center;
                        min-width: 30%;
                        display: inline-block;
                    }
                    td:first-child{
                        background-color: red;
                    }
                    td:last-child{
                        background-color: gold;
                    }
                }
            }
        }
    }
</style>