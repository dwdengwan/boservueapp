<template>
    <!--带有评论的页面-->
    <div class="content-footer display">
        <input type="text" v-model="sendValue">
        <button @touchend="handleSend(sendValue)">send</button>
    </div>
</template>

<script>
    export default {
        name: "contentFooter",
        props:['contentFooterObj'],
        data(){
            return {
                sendValue:'',
                onClickNum:0,
                childData:[],
                typeNum:-1,
            }
        },
        methods:{
            handleSend(text){
                if (text == '') return
                if (this.typeNum == 1){
                    //聊天区
                    let obj = {
                        id:'1000'+this.onClickNum,
                        time:"",
                        youSay:'',
                        mySay:'',
                    }
                    obj.mySay = text;
                    obj.youSay = this.handleAnswer(text);
                    obj.time = this.$common.getTimeStr();
                    let heightArr = this.$refs.wechatchild;
                    console.log(this.$parent.$refs.wechatchild)
                    let height = 0;
                    if (heightArr !== undefined){
                        heightArr.forEach((item)=>{
                            height += item.clientHeight*2
                        })
                    }
                    console.log(height)
                    this.childData.push(obj);
                    this.onClickNum ++;
                    this.$emit('on-updata',this.childData)
                } else if (this.typeNum == 2){
                    let obj = {
                        name:'dw',
                        other:'',
                        content:'',
                    };
                    if (this.contentFooterObj.contentPostion.i == -1){
                        //评论区
                        obj.content = text;
                    } else {
                        //回复区
                        let postion = this.contentFooterObj.contentPostion;
                        let contentObj = this.$parent.friendData[postion.i].list[postion.j][postion.k];
                        obj.other = contentObj.name;
                        obj.content = text;
                        obj.name = 'dw';
                    }
                    this.$emit('on-updata-friendData',obj);
                    this.$parent.showContent = false;
                }
                this.sendValue = '';
                // console.log(this.$refs['wechatchild'],this.$refs);
                // console.log(this.$refs.wechatchild[this.onClickNum].clientHeight);
            },
            handleAnswer(text){
                if (text.indexOf('你好') > -1){
                    return '谢谢你的问候，你也好呀。'
                }else if(text !== ''){
                    return text
                }
            },
        },
        created(){
            this.typeNum = this.contentFooterObj.num;
        }
    }
</script>

<style scoped lang="less">
.content-footer{
    width: 100%;
    height: 100%;
    background: #eee;
    padding: 0 2%;
    input{
        height: 60%;
        width: 60%;
        border-radius: 0.1rem;
        font-size: 0.4rem;
    }
    button{
        width: 20%;
        height: 60%;
        background: var(--main-bg-color);
        color:#fff;
        border-radius: 0.1rem;
    }
}
</style>