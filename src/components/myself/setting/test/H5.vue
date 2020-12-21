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

        },
        created(){

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
            table{
                width: 100%;
                thead{
                    color: #fff;
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    background-color: var(--font-color);
                    td{
                        text-align: center;
                        min-width: 40%;
                        display: inline-block;
                    }
                }
                tr{
                    width: 100%;
                    background-color: var(--font-color);
                    color: #fff;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    td{
                        text-align: center;
                        min-width: 40%;
                        display: inline-block;
                    }
                }
            }
        }
    }
</style>