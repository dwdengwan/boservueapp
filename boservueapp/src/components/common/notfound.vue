<template>
    <div class="login">
        <div class="login-top" v-show="showTop"></div>
        <div
            @touchend="handleClick(0)"
            class="login-middle">
            <div class="middle-title">
                <span
                    :class="formData.activeIndex==0 ? 'active':''"
                    @touchend.stop="login(0)">
                    Log In
                </span>
                <span class="title-2">or</span>
                <span
                    :class="formData.activeIndex==1 ? 'active':''"
                    @touchend.stop="login(1)">
                    Sign Up
                </span>
            </div>
            <div class="log-password">
                <div
                    class="phone-input"
                    :class="activeInput==0?'active-input':''"
                    @touchend.stop="phoneTouchend(0)">
                    <div class="phone-input-span">
                        <span class="phone-span-f" v-show="showInput">
                            <span class="phone-span" v-show="showInputBorder"></span>
                        </span>
                        <span
                            class="phone-text">
                            {{phoneText}}
                        </span>
                        <span
                            class="phone-text-num">
                            {{phoneTextNum}}
                        </span>
                        <span class="phone-span-f span-left">
                            <span class="phone-span" v-show="showInputleft"></span>
                        </span>
                    </div>
                </div>
                <div
                    class="log-phone"
                    @touchend.stop="clearPhoneBtn(0)"
                    v-show="clearPhone">
                </div>
            </div>
            <div class="log-password">
                <div
                        class="phone-input"
                        :class="activeInput==1?'active-input':''"
                        @touchend.stop="phoneTouchend(1)">
                    <div class="phone-input-span">
                        <span class="phone-span-f">
                            <span class="phone-span" v-show="showInputBorder2"></span>
                        </span>
                        <span class="phone-text">请输入密码</span>
                        <!--<span class="phone-span-f">-->
                            <!--<span class="phone-span" v-show="!showInputBorder2"></span>-->
                        <!--</span>-->
                    </div>
                </div>
                <!--<div-->
                    <!--class="log-see">-->
                <!--</div>-->
            </div>
            <div class="log-password" v-show="formData.activeIndex == 1">
                <div
                        class="phone-input"
                        :class="activeInput==2?'active-input':''"
                        @touchend.stop="phoneTouchend(2)">
                    <div class="phone-input-span">
                        <span class="phone-span-f">
                            <span class="phone-span" v-show="showInputBorder3"></span>
                        </span>
                        <span class="phone-text">请再次输入密码</span>
                        <!--<span class="phone-span-f">-->
                            <!--<span class="phone-span" v-show="!showInputBorder3"></span>-->
                        <!--</span>-->
                    </div>
                </div>
                <!--<div-->
                    <!--class="log-see">-->
                <!--</div>-->
            </div>
            <div class="log-button">
                <div
                    class="log-button-text"
                    @touchend="sendLogin">
                    {{loginName}}
                </div>
            </div>
        </div>
        <div
            class="login-bottom"
            v-show="!showTop">
            <div class="key-num" v-show="showKeyNum">
                <div
                    class="key-num-0"
                    v-for="(item,index) in keyNum"
                    @touchend="inputNum(index)"
                    :key="item">
                    <span :class="activeNum == index?'active':''">{{item}}</span>
                </div>
            </div>
            <div
                v-show="!showKeyNum"
                class="key-abc">
                <div
                    class="key-abc-a"
                    v-for="(item,index) in keyABC"
                    :key="item">
                    <span
                        :class="activeABC == index?'active':''"
                        @touchend="inputStr(index)">
                        {{item}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "notfound",
        data(){
            return {
                showTop:true,//显示上部分
                loginName:"Log In",//log in sign up 相互切换
                clearPhone:false,//手机号的清除
                formData:{//登录与新建的传值
                    activeIndex:0,
                    phone:'',
                    password:'',
                    aginPassword:'',
                },
                keyNum:[1,2,3,4,5,6,7,8,9,0,'X','abc'],//数字键盘的内容
                keyABC:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','123'],//英文键盘内容
                activeInput:-1,//div 外层边框显示显示的下标
                activeNum:-1,//数字键盘当前点击的下标
                activeABC:-1,//英文键盘当前点击的下标
                showKeyNum:false,//true 数字键盘的显示 false 英文键盘的显示
                showInput:true,//
                showInput2:true,
                showInput3:true,
                showInputBorder:false,//闪烁
                showInputBorder2:false,
                showInputBorder3:false,
                showInputleft:false,
                showInputleft2:false,
                showInputleft3:false,
                timerShowBorder:null,//闪烁的定时器
                phoneText:'请输入手机号',//div 内容
                phoneText2:'请输入密码',
                phoneText3:'请再次输入密码',
                phoneTextNum:'',//输入手机号的内容
            }
        },
        methods:{
            //跳转至聊天界面
            goWeChat(){
                this.$router.push({
                    path:'/wechat',
                    query:{
                        type:'0',
                    }
                });
            },
            //log in sign up 相互切换
            login(i){
                this.loginName = i == 0 ? 'Log In': 'Sign Up';
                this.formData.activeIndex = i;
            },
            //数据发送
            sendLogin(){
                console.log(this.formData)
            },
            //0 top 1 middle 2 bottom 外层div的点击
            handleClick(i){
                // document.getElementById('phone').focus();
                console.log(i,'dyk')
                this.activeInput = -1;
                this.activeNum = -1;//数字键盘当前点击的下标
                this.activeABC = -1;//英文键盘当前点击的下标
                this.showInputBorder = false;
                this.showInputBorder2 = false;
                this.showInputBorder3 = false;
                this.showInputleft = false;
                this.showInputleft2 = false;
                this.showInputleft3 = false;
                clearInterval(this.timerShowBorder);
                this.timerShowBorder = null;
                this.showTop = true;
            },
            //数字键盘的点击 键盘下标i
            inputNum(i){
                this.showInput = false;
                let activeInputNum = this.activeInput;
                if(activeInputNum !== 0 && i == (this.keyNum.length - 1)){
                    this.activeABC = -1;
                    this.showKeyNum = false;
                }else if(activeInputNum == 0){
                    this.phoneText = '';
                    this.phoneTextNum += this.keyNum[i];
                    this.phoneText2 = '请输入密码';
                    this.phoneText3 = '请输入手机号';
                }else if(activeInputNum == 1){
                    this.phoneText = '请输入手机号';
                    this.phoneText2 = '';
                    this.phoneText3 = '请再次输入密码';
                }else if(activeInputNum == 2){
                    this.phoneText = '请输入手机号';
                    this.phoneText2 = '请输入手机号';
                    this.phoneText3 = '';
                }
                clearInterval(this.timerShowBorder);
                this.timerShowBorder = null;
                let num = 0;
                this.timerShowBorder = setInterval(()=>{
                    if(this.activeInput == 0){
                        if (num % 2 == 0){
                            this.showInputleft = true;
                        } else{
                            this.showInputleft = false;
                        }
                    }else if(this.activeInput == 1){
                        if (num % 2 == 0){
                            this.showInputleft2 = true;
                        } else{
                            this.showInputleft2 = false;
                        }
                    }else if(this.activeInput == 2){
                        if (num % 2 == 0){
                            this.showInputleft3 = true;
                        } else{
                            this.showInputleft3 = false;
                        }
                    }
                    num ++;
                },500)
                this.timerShowBorder = null;
                this.showInputBorder = false;
                this.showInputBorder2 = false;
                this.showInputBorder3 = false;
                this.clearPhone = true;
                this.activeNum = i;
            },
            //英文键盘的点击 键盘下标i
            inputStr(i){
                if (i == (this.keyABC.length - 1)){
                    this.activeNum = -1;
                    this.showKeyNum = true;
                }
                clearInterval(this.timerShowBorder);
                this.timerShowBorder = null;
                this.showInputBorder = false;
                this.showInputBorder2 = false;
                this.showInputBorder3 = false;
                this.activeABC = i;
            },
            //div输入框的点击 0 手机号码 1 密码 2 再次验证密码
            phoneTouchend(i){
                this.activeInput = i;
                this.showTop = false;
                this.showInputBorder = false;
                this.showInputBorder2 = false;
                this.showInputBorder3 = false;
                clearInterval(this.timerShowBorder);
                if(i){
                    this.keyNum = [1,2,3,4,5,6,7,8,9,0,'X','abc'];
                    this.showKeyNum = false;
                }else{
                    this.keyNum = [1,2,3,4,5,6,7,8,9,0,'X'];
                    this.showKeyNum = true;
                }
                let num = 0;
                this.timerShowBorder = setInterval(()=>{
                    if(i==0){
                        if (num % 2 == 0){
                            this.showInputBorder = true;
                        } else{
                            this.showInputBorder = false;
                        }
                    }else if(i==1){
                        if (num % 2 == 0){
                            this.showInputBorder2 = true;
                        } else{
                            this.showInputBorder2 = false;
                        }
                    }else if(i==2){
                        if (num % 2 == 0){
                            this.showInputBorder3 = true;
                        } else{
                            this.showInputBorder3 = false;
                        }
                    }
                    num ++;
                },500)
            },
            //div输入框内容全部清除 0 phone 1 password 2 aginPassword
            clearPhoneBtn(i){
                if(i == 0){
                    this.phoneTextNum = '';
                    this.phoneText = '请输入手机号';
                    this.activeNum = -1;
                    clearInterval(this.timerShowBorder);
                    // if(i){
                    //     this.keyNum = [1,2,3,4,5,6,7,8,9,0,'X','abc'];
                    //     this.showKeyNum = false;
                    // }else{
                    //     this.keyNum = [1,2,3,4,5,6,7,8,9,0,'X'];
                    //     this.showKeyNum = true;
                    // }
                    let num = 0;
                    this.timerShowBorder = setInterval(()=>{
                        if(i==0){
                            if (num % 2 == 0){
                                this.showInputBorder = true;
                            } else{
                                this.showInputBorder = false;
                            }
                        }else if(i==1){
                            if (num % 2 == 0){
                                this.showInputBorder2 = true;
                            } else{
                                this.showInputBorder2 = false;
                            }
                        }else if(i==2){
                            if (num % 2 == 0){
                                this.showInputBorder3 = true;
                            } else{
                                this.showInputBorder3 = false;
                            }
                        }
                        num ++;
                    },500)
                }else if(i == 1){
                    this.formData.password = '';
                }else if(i == 2){
                    this.formData.aginPassword = '';
                }
            },
        },
        created(){
        },
        destroyed(){
            clearInterval(this.timerShowBorder);
            this.timerShowBorder = null;
        }
    }
</script>

<style scoped lang="less">
.login{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    font-size: 0.6rem;
    color:#fff;
    font-weight: bolder;
    div{
        width: 100%;
        height: 50%;
    }
    .login-top{
        border-bottom: 1px dashed rgba(255,255,255,0.3);
        height: calc(50% - 1px);
    }
    .login-middle{
        .log-button,
        .middle-title,
        .log-password{
            height: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 4% 0;
            input{
                width: 75%;
                height: 75%;
                background-color: rgba(0,0,0,0.3);
                border: rgba(0,0,0,0.3);
                padding: 2%;
                color:#fff;
                font-size: 0.4rem;
            }
            input[type='password']{
                font-size: 0.4rem;
            }
            input::-webkit-input-placeholder {
                 /* placeholder颜色  */
                color: #aab2bd;
                /* placeholder字体大小  */
                font-size: 12px;
                 /* placeholder位置  */
                text-align: left;
            }
            .log-button-text{
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .log-button{
            background-color: #00c800;
            width: 80%;
            margin: 0 10%;
        }
        .middle-title{
            margin: 0;
            span{
                margin: 0 2%;
            }
            .active{
                color:#00c800;
            }
            .title-2{
                color: rgba(255,255,255,0.3);
            }
        }
        .log-password{
            position: relative;
            .log-phone,
            .log-see{
                position: absolute;
                top: 35%;
                right: 12%;
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
                background-color: rgba(0,0,0,0.8);
            }
            .phone-input{
                width: 75%;
                height: 75%;
                background-color: rgba(0,0,0,0.3);
                border: rgba(0,0,0,0.3);
                padding: 2%;
                color:rgba(255,255,255,0.4);
                font-size: 0.3rem;
                display: flex;
                align-items: center;
                .phone-input-span{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    .phone-span-f{
                        display: inline-block;
                        width: 4px;
                        height: 0.6rem;
                    }
                    .span-left{
                        margin: 0 2%;
                    }
                    .phone-span{
                        display: inline-block;
                        width: 2px;
                        height: 0.6rem;
                        background-color: rgba(255,255,255,0.8);
                    }
                    .phone-text{
                        margin: 0 1%;
                    }
                    .phone-text-num{
                        color:#fff;
                        font-size: 0.6rem;
                    }
                }
            }
            .active-input{
                border: 2px solid #B8860B;
            }
            .log-see{
                background-color: rgba(0,0,0,0.6);
            }
        }
    }
    .login-bottom{
        width: 100%;
        height: calc(50% - 1px);
        border-top: 1px dashed rgba(255,255,255,0.3);
        .key-num{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            .key-num-0{
                width: 33%;
                height: 25%;
                display: flex;
                justify-content: center;
                align-items: center;
                span{
                    width: 70%;
                    height: 70%;
                    background-color: rgba(0,0,0,0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                }
                .active{
                    background-color: rgba(0,0,0,0.3);
                    color:#B8860B;
                }
            }
        }
        .key-abc{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            .key-abc-a{
                width: 16%;
                height: 20%;
                display: flex;
                justify-content: center;
                align-items: center;
                span{
                    width: 80%;
                    height: 80%;
                    background-color: rgba(0,0,0,0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                }
                .active{
                    background-color: rgba(0,0,0,0.3);
                    color:#B8860B;
                }
            }
        }
    }
}
</style>