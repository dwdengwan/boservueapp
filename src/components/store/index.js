import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        wechatNum:0,

        isMove:false,//是否左右移动
        countNum:0,//>10右一页 <-10 左一页
        newX:0,
        oldX:0,
    },
    mutations:{
        //params:{that:this,nowNum:0}
        //that vm实例对象 this
        //nowNum 当前页面的下标
        moveLeftRight:(state,params)=>{
            let num = parseInt(params.nowNum);
            let path = '/';
            let movePath = function (num) {
                switch (num){
                    case 0:
                        path = '/index';
                        break;
                    case 1:
                        path = '/addrbook';
                        break;
                    case 2:
                        path = '/found';
                        break;
                    case 3:
                        path = '/myself';
                        break;
                }
                return path
            }
            let timer = null;
            clearTimeout(timer);
            state.newX = localStorage.getItem('locationX')==null?0:parseInt(localStorage.getItem('locationX'));
            state.oldX = parseInt(event.changedTouches[0].clientX);
            if (state.oldX > state.newX){
                state.countNum ++;
                // console.log('右移动')
                state.isMove = true;
            }else{
                // console.log('左移动')
                state.countNum --;
                state.isMove = true;
            }
            if (state.countNum > 10 && num < 3){
                path = movePath(num + 1)
                params.that.$router.push({path,query:{goBackTo:(num + 1)}})
            } else if(state.countNum < -10 && num > 0){
                path = movePath(num - 1)
                params.that.$router.push({path,query:{goBackTo:(num - 1)}})
            }
            timer = setTimeout(()=>{
                localStorage.setItem('locationX',state.oldX)
            },0)
            // console.log(item,i,this.oldX,this.newX,this.countNum);
        },
    },
    getters:{}
})