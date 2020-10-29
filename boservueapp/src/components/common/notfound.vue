<template>
    <div class="login">
        <div
            class="login-top"
            :class="!showTop ? 'autoheight':''">
            <div class="login-top-text">
                <span
                    class="login-top-span"
                    :style="{'color':randomColor()}"
                    v-for="(item,index) of loginTextArr"
                    :key="index">
                    {{item}}
                </span>
            </div>
        </div>
        <div
            @touchend="handleClick(1)"
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
            <div class="log-message">
                <span class="log-message-span">{{phoneMessage}}</span>
            </div>
            <div
                class="log-password"
                :class="showMessage ? '':'message'">
                <div
                    class="phone-input"
                    :class="activeInput==0?'active-input':''"
                    @touchend.stop="phoneTouchend(0)">
                    <div class="phone-input-span">
                        <span class="phone-span-f">
                            <span class="phone-span" v-show="showInputBorder"></span>
                        </span>
                        <span
                            class="phone-text">
                            {{phoneText}}
                        </span>
                        <span
                            class="phone-text-num"
                            :class="showMessage ? 'error':''">
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
            <div class="log-message">
                <span class="log-message-span">{{phoneMessage2}}</span>
            </div>
            <div class="log-password" v-show="showPassWord2">
                <div
                    class="phone-input"
                    :class="activeInput==1?'active-input':''"
                    @touchend.stop="phoneTouchend(1)">
                    <div class="phone-input-span">
                        <span class="phone-span-f">
                            <span class="phone-span" v-show="showInputBorder2"></span>
                        </span>
                        <span class="phone-text">{{phoneText2}}</span>
                        <span
                            class="phone-text-num"
                            :class="showMessage2 ? 'error':''">
                            {{phoneTextNum2}}
                        </span>
                        <span class="phone-span-f">
                            <span class="phone-span" v-show="showInputleft2"></span>
                        </span>
                    </div>
                </div>
                <div
                    class="log-clear"
                    @touchend.stop="clearPhoneBtn(1)"
                    v-show="clearPhone2">
                </div>
                <div
                    class="log-see"
                    :class="showPassWord2 ? 'password':''"
                    @touchend.stop="displayPassword(1)">
                </div>
            </div>
            <div class="log-password" v-show="!showPassWord2">
                <div
                    class="phone-input"
                    :class="activeInput==1?'active-input':''"
                    @touchend.stop="phoneTouchend(1)">
                    <div class="phone-input-span">
                        <span class="phone-span-f">
                            <span class="phone-span" v-show="showInputBorder2"></span>
                        </span>
                        <span class="phone-text">{{phoneText2}}</span>
                        <span
                                class="phone-text-num"
                                :class="showMessage2 ? 'error':''">
                            <span
                                class="pass-cirle"
                                v-for="index of number2"
                                :key="index">
                            </span>
                        </span>
                        <span class="phone-span-f">
                            <span class="phone-span" v-show="showInputleft2"></span>
                        </span>
                    </div>
                </div>
                <div
                        class="log-clear"
                        @touchend.stop="clearPhoneBtn(1)"
                        v-show="clearPhone2">
                </div>
                <div
                        class="log-see"
                        :class="showPassWord2 ? 'password':''"
                        @touchend.stop="displayPassword(1)">
                </div>
            </div>
            <div
                class="log-message"
                v-show="formData.activeIndex == 1">
                <span class="log-message-span">{{phoneMessage3}}</span>
            </div>
            <div class="log-password" v-show="showPassWord3 && formData.activeIndex == 1">
                <div
                    class="phone-input"
                    :class="activeInput==2?'active-input':''"
                    @touchend.stop="phoneTouchend(2)">
                    <div class="phone-input-span">
                        <span class="phone-span-f">
                            <span class="phone-span" v-show="showInputBorder3"></span>
                        </span>
                        <span class="phone-text">{{phoneText3}}</span>
                        <span
                                class="phone-text-num"
                                :class="showMessage3 ? 'error':''">
                            {{phoneTextNum3}}
                        </span>
                        <span class="phone-span-f">
                            <span class="phone-span" v-show="showInputleft3"></span>
                        </span>
                    </div>
                </div>
                <div
                        class="log-clear"
                        @touchend.stop="clearPhoneBtn(2)"
                        v-show="clearPhone3">
                </div>
                <div
                    class="log-see"
                    :class="showPassWord3 ? 'password':''"
                    @touchend.stop="displayPassword(2)">
                </div>
            </div>
            <div class="log-password" v-show="!showPassWord3 && formData.activeIndex == 1">
                <div
                        class="phone-input"
                        :class="activeInput==2?'active-input':''"
                        @touchend.stop="phoneTouchend(2)">
                    <div class="phone-input-span">
                        <span class="phone-span-f">
                            <span class="phone-span" v-show="showInputBorder3"></span>
                        </span>
                        <span class="phone-text">{{phoneText3}}</span>
                        <span
                                class="phone-text-num"
                                :class="showMessage3 ? 'error':''">
                            <span
                                    class="pass-cirle"
                                    v-for="index of number3"
                                    :key="index">
                            </span>
                        </span>
                        <span class="phone-span-f">
                            <span class="phone-span" v-show="showInputleft3"></span>
                        </span>
                    </div>
                </div>
                <div
                        class="log-clear"
                        @touchend.stop="clearPhoneBtn(2)"
                        v-show="clearPhone3">
                </div>
                <div
                        class="log-see"
                        :class="showPassWord3 ? 'password':''"
                        @touchend.stop="displayPassword(2)">
                </div>
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
            :class="showTop ? 'autoheight':''">
            <div
                class="key-num"
                v-show="showKeyNum">
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
                loginText:'每个人都有自己的小天地，请不要冒犯他人的小天地。',
                loginTextArr:[],
                textTimer:null,
                showTop:true,//显示上部分
                loginName:"Log In",//log in sign up 相互切换
                clearPhone:false,//手机号的清除
                clearPhone2:false,//密码的清除
                clearPhone3:false,//再次输入密码的清除
                formData:{//登录与新建的传值
                    activeIndex:0,
                    phone:'',
                    password:'',
                    aginPassword:'',
                },
                keyNum:[1,2,3,4,5,6,7,8,9,0,'X','abc'],//数字键盘的内容
                keyABC:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','123','X'],//英文键盘内容
                activeInput:-1,//div 外层边框显示显示的下标
                activeNum:-1,//数字键盘当前点击的下标
                activeABC:-1,//英文键盘当前点击的下标
                showKeyNum:false,//true 数字键盘的显示 false 英文键盘的显示
                showInputBorder:false,//闪烁
                showInputBorder2:false,
                showInputBorder3:false,
                showInputleft:false,
                showInputleft2:false,
                showInputleft3:false,
                timerShowBorder:null,//闪烁的定时器
                phoneText:'请输入手机号',//div 内容
                phoneText2:'请输入密码(6~12位)',
                phoneText3:'请再次输入密码',
                showMessage:false,//手机号错误提示
                showMessage2:false,//密码错误提示
                showMessage3:false,//再次输入密码错误提示
                phoneTextNum:'',//输入手机号的内容
                phoneTextNum2:'',//输入密码的内容
                phoneTextNum3:'',//再次输入密码的内容
                phoneMessage:"",//手机错误提示内容
                phoneMessage2:"",//密码错误提示内容
                phoneMessage3:"",//再次输入密码错误提示
                showPassWord2:true,//是否显示密码
                showPassWord3:true,//是否显示再次输入密码
                number2:0,
                number3:0,
            }
        },
        methods:{
            //跳转至聊天界面
            goWeChat(){
                sessionStorage.setItem('login',1)
                this.$router.push({
                    path:'/wechat',
                    query:{
                        type:'0',
                    }
                });
            },
            //文字滚动
            textLunBo(){
                clearInterval(this.textTimer);
                let num = 0;
                let arr = [];
                arr = this.loginText.split('');
                let length = arr.length;
                let i = 0;
                this.textTimer = setInterval(()=>{
                    this.loginTextArr = arr.slice(num,num+12);
                    num ++;
                    if (num > length - 12 && num < length){
                        arr.push(arr[i])
                        i ++;
                    }else if (num == length){
                        num = 0;
                        i = 0;
                        arr = this.loginText.split('');
                    }
                    // console.log(arr);
                },500)
            },
            //log in sign up 相互切换
            login(i){
                this.loginName = i == 0 ? 'Log In': 'Sign Up';
                this.formData.activeIndex = i;
            },
            //数据发送
            sendLogin(){
                this.formData.phone = this.phoneTextNum;
                this.formData.password = this.phoneTextNum2;
                if (this.formData.activeIndex){
                    this.formData.aginPassword = this.phoneTextNum3;
                    if (!this.phoneMessage && !this.phoneMessage2 && !this.phoneMessage3 && this.phoneTextNum && this.phoneTextNum2){
                        //进入wechat聊天界面
                        setTimeout(()=>{
                            this.goWeChat()
                        },2000)
                    }else{
                        console.log('进入聊天页面失败')
                    }
                } else{
                    this.formData.aginPassword = '';
                    if (!this.phoneMessage && !this.phoneMessage2 && this.phoneTextNum && this.phoneTextNum2){
                        //进入wechat聊天界面
                        setTimeout(()=>{
                            this.goWeChat()
                        },2000)
                    }else{
                        console.log('进入聊天页面失败')
                    }
                }
            },
            //0 top 1 middle 2 bottom 外层div的点击
            handleClick(i){
                if (i == 1){
                    this.onBlurInput(this.activeInput)
                }
                this.activeInput = -1;
                this.activeNum = -1;//数字键盘当前点击的下标
                this.activeABC = -1;//英文键盘当前点击的下标
                this.restBorder(2);
                this.clearTimer()
                this.textLunBo()
                this.showTop = true;
            },
            //数字键盘的点击 键盘下标i
            inputNum(i){
                this.flashingLeft(this.activeInput);
                let activeInputNum = this.activeInput;
                if(activeInputNum !== 0 && i == (this.keyNum.length - 1)){
                    //数字键盘切换成英文键盘
                    this.activeABC = -1;
                    this.showKeyNum = false;
                    if (activeInputNum == 1){
                        if (this.phoneTextNum2.length > 0){
                            this.flashingLeft(activeInputNum);
                        } else {
                            this.flashing(activeInputNum);
                        }
                    }
                }else if(activeInputNum == 0){
                    //输入手机号
                    this.phoneText = '';
                    //删除最后一位
                    if (this.keyNum[i] == 'X'){
                        this.phoneTextNum = this.phoneTextNum.substr(0,this.phoneTextNum.length - 1);
                        if (!this.phoneTextNum){
                            this.phoneMessage = '';
                            this.phoneText = '请输入手机号';
                            this.showMessage = false;
                            this.clearPhone = false;
                            this.flashing(this.activeInput);
                        }else if(this.phoneTextNum == '1'|| this.phoneTextNum.length <= 11){
                            this.showMessage = false;
                            this.phoneMessage = '';
                        }
                        this.activeNum = i;
                        return
                    }
                    if(this.showMessage || this.phoneTextNum.length > 10){
                        this.phoneTextNum += '';
                        this.clearTimer();
                    } else {
                        this.phoneTextNum += this.keyNum[i];
                    }
                    this.clearPhone = true;
                    this.phoneTest();
                }else if(activeInputNum == 1){
                    //输入密码
                    // this.phoneText = '请输入手机号';
                    this.phoneText2 = '';
                    //删除最后一位
                    if (this.keyNum[i] == 'X'){
                        this.phoneTextNum2 = this.phoneTextNum2.substr(0,this.phoneTextNum2.length - 1);
                        if (!this.phoneTextNum2){
                            this.phoneText2 = '请输入密码';
                            this.flashing(1);
                        }
                        this.phoneMessage2 = '';
                        this.activeNum = i;
                        this.number2 = this.phoneTextNum2.length;
                        return
                    }else if(this.phoneTextNum2.length > 11){
                        this.phoneTextNum2 += '';
                        this.clearTimer()
                        this.activeNum = i;
                        this.phoneMessage2 = '密码长度超过12位！';
                        this.timerShowBorder = setTimeout(()=>{
                            this.phoneMessage2 = '';
                        },2000)
                        return
                    }
                    this.phoneTextNum2 += this.keyNum[i];
                    this.number2 = this.phoneTextNum2.length;
                    this.clearPhone2 = true;
                }else if(activeInputNum == 2){
                    //再次输入密码
                    this.phoneText3 = '';
                    //删除最后一位
                    if (this.keyNum[i] == 'X'){
                        this.phoneTextNum3 = this.phoneTextNum3.substr(0,this.phoneTextNum3.length - 1);
                        if (!this.phoneTextNum3){
                            this.phoneText3 = '请输入密码';
                            this.flashing(2);
                        }
                        this.phoneMessage3 = '';
                        this.activeNum = i;
                        this.number3 = this.phoneTextNum3.length;
                        return
                    }else if(this.phoneTextNum3.length > 11){
                        this.phoneTextNum3 += '';
                        this.clearTimer()
                        this.activeNum = i;
                        this.phoneMessage3 = '密码长度超过12位！';
                        this.timerShowBorder = setTimeout(()=>{
                            this.phoneMessage3 = '';
                        },2000)
                        return
                    }
                    this.phoneTextNum3 += this.keyNum[i];
                    this.number3 = this.phoneTextNum3.length;
                    this.clearPhone3 = true;
                }
                this.restBorder(0);
                this.activeNum = i;
            },
            //英文键盘的点击 键盘下标i
            inputStr(i){
                this.clearTimer()
                this.restBorder(0);
                this.activeABC = i;
                if (this.activeInput == 1){
                    //英文切换为数字
                    if (i == (this.keyABC.length - 2)){
                        this.activeNum = -1;
                        this.showKeyNum = true;
                        this.flashingLeft(1)
                        return
                    }
                    this.phoneText2 = '';
                    //删除最后一位
                    this.clearPhone2 = true;
                    if (this.keyABC[i] == 'X'){
                        this.phoneTextNum2 = this.phoneTextNum2.substr(0,this.phoneTextNum2.length - 1);
                        if (!this.phoneTextNum2){
                            this.phoneText2 = '请输入密码';
                            this.clearPhone2 = false;
                            this.flashing(1);
                        }else{
                            this.phoneMessage2 = '';
                            this.flashingLeft(1)
                        }
                        this.activeNum = i;
                        this.number2 = this.phoneTextNum2.length;
                        return
                    }
                    if (this.phoneTextNum2.length>11){
                        this.phoneTextNum2 += '';
                        this.phoneMessage2 = '密码长度超过12位！';
                        this.timerShowBorder = setTimeout(()=>{
                            this.phoneMessage2 = '';
                        },2000)
                        return
                    }
                    this.phoneTextNum2 += this.keyABC[i];
                    this.number2 = this.phoneTextNum2.length;
                    this.flashingLeft(1)
                }else if(this.activeInput == 2){
                    //英文切换为数字
                    if (i == (this.keyABC.length - 2)){
                        this.activeNum = -1;
                        this.showKeyNum = true;
                        this.flashingLeft(2)
                        return
                    }
                    this.phoneText3 = '';
                    //删除最后一位
                    this.clearPhone3 = true;
                    if (this.keyABC[i] == 'X'){
                        this.phoneTextNum3 = this.phoneTextNum3.substr(0,this.phoneTextNum3.length - 1);
                        if (!this.phoneTextNum3){
                            this.phoneText3 = '请输入密码';
                            this.clearPhone3 = false;
                            this.flashing(2);
                        }else{
                            this.phoneMessage3 = '';
                            this.flashingLeft(2)
                        }
                        this.activeNum = i;
                        this.number3 = this.phoneTextNum3.length;
                        return
                    }
                    if (this.phoneTextNum3.length>11){
                        this.phoneTextNum3 += '';
                        this.phoneMessage3 = '密码长度超过12位！';
                        this.timerShowBorder = setTimeout(()=>{
                            this.phoneMessage3 = '';
                        },2000)
                        return
                    }
                    this.phoneTextNum3 += this.keyABC[i];
                    this.number3 = this.phoneTextNum3.length;
                    this.flashingLeft(2)
                }
            },
            //div输入框的点击 0 手机号码 1 密码 2 再次验证密码
            phoneTouchend(i){
                this.activeInput = i;
                this.showTop = false;
                this.restBorder(2);
                this.activeABC = -1;
                this.activeNum = -1;
                if(i){
                    this.keyNum = [1,2,3,4,5,6,7,8,9,0,'X','abc'];
                    this.showKeyNum = false;
                    this.clearPhone = false;
                    if (i == 1){
                        this.phoneMessage2 = '';
                        this.showMessage2 = false;
                        if (this.phoneTextNum2.length > 0){
                            this.clearPhone2 = true;
                            this.flashingLeft(i);
                            if(this.phoneTextNum2.length == 12){
                                 this.clearTimer()
                            }
                        }else {
                            this.clearPhone2 = false;
                            this.flashing(i);
                        }
                        this.onBlurInput(2);
                    }else if(i == 2){
                        this.onBlurInput(1);
                        this.phoneMessage3 = '';
                        this.showMessage3 = false;
                        if (this.phoneTextNum3.length > 0){
                            this.clearPhone3 = true;
                            this.flashingLeft(i);
                            if(this.phoneTextNum3.length == 12){
                                this.clearTimer()
                            }
                        }else {
                            this.clearPhone3 = false;
                            this.flashing(i);
                        }
                    }
                    this.onBlurInput(0)
                }else{
                    this.clearPhone2 = false;
                    this.clearPhone3 = false;
                    this.showMessage = false;
                    this.showKeyNum = true;
                    this.phoneTest();
                    this.keyNum = [1,2,3,4,5,6,7,8,9,0,'X'];
                    if (this.phoneTextNum.length){
                        //phone div输入框中有内容
                        this.clearPhone = true;
                        if (this.phoneTextNum.length == 11){
                            this.clearTimer();
                            return
                        }
                        this.flashingLeft(i);
                    } else {
                        //phone div输入框中无内容
                        this.clearPhone = false;
                        this.flashing(i);
                    }
                    this.onBlurInput(1);
                    this.onBlurInput(2);
                }
            },
            //div输入框内容全部清除 0 phone 1 password 2 aginPassword
            clearPhoneBtn(i){
                if(i == 0){
                    this.phoneTextNum = '';
                    this.phoneText = '请输入手机号';
                    this.phoneMessage = '';
                    this.showMessage = false;
                    this.activeNum = -1;
                    this.showInputleft = false;
                    this.clearPhone = false;
                    this.flashing(i)
                }else if(i == 1){
                    this.phoneTextNum2 = '';
                    this.phoneText2 = '请输入密码(6~12位)';
                    this.activeNum = -1;
                    this.activeABC = -1;
                    this.showInputleft2 = false;
                    this.clearPhone2 = false;
                    this.number2 = this.phoneTextNum2.length;
                    this.flashing(i)
                }else if(i == 2){
                    this.phoneTextNum3 = '';
                    this.phoneText3 = '请输入密码(6~12位)';
                    this.activeNum = -1;
                    this.activeABC = -1;
                    this.showInputleft3 = false;
                    this.clearPhone3 = false;
                    this.number3 = this.phoneTextNum3.length;
                    this.flashing(i)
                }
                this.activeInput = i;
            },
            //闪烁前 i 0 手机号码 1 密码 2 再次验证密码
            flashing(i){
                this.clearTimer()
                this.restBorder(1);
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
            //闪烁左 i 0 手机号码 1 密码 2 再次验证密码
            flashingLeft(i){
                this.clearTimer();
                this.restBorder(0);
                let num = 0;
                this.timerShowBorder = setInterval(()=>{
                    if(i == 0){
                        if (num % 2 == 0){
                            this.showInputleft = true;
                        } else{
                            this.showInputleft = false;
                        }
                    }else if(i == 1){
                        if (num % 2 == 0){
                            this.showInputleft2 = true;
                        } else{
                            this.showInputleft2 = false;
                        }
                    }else if(i == 2){
                        if (num % 2 == 0){
                            this.showInputleft3 = true;
                        } else{
                            this.showInputleft3 = false;
                        }
                    }
                    num ++;
                },500)
            },
            //清除定时器
            clearTimer(){
                this.restBorder(2);
                clearInterval(this.timerShowBorder);
                this.timerShowBorder = null;
                clearInterval(this.textTimer);
                this.textTimer = null;
            },
            //重置闪烁边框 0 前 1 左边 2 all
            restBorder(i){
               if (i == 0){
                   this.showInputBorder = false;
                   this.showInputBorder2 = false;
                   this.showInputBorder3 = false;
               } else if (i == 1){
                   this.showInputleft = false;
                   this.showInputleft2 = false;
                   this.showInputleft3 = false;
               } else if (i == 2){
                   this.showInputBorder = false;
                   this.showInputBorder2 = false;
                   this.showInputBorder3 = false;
                   this.showInputleft = false;
                   this.showInputleft2 = false;
                   this.showInputleft3 = false;
               }
            },
            //手机号码的验证
            phoneTest(){
                if(!this.phoneTextNum.length){
                    this.phoneMessage = '';
                    this.showMessage = false;
                } else if (this.phoneTextNum.split('')[0] !== '1') {
                    this.phoneMessage = '输入的手机号码格式有误！';
                    this.showMessage = true;
                } else if(this.phoneTextNum.length > 1 && !(/^[3456789]$/.test(this.phoneTextNum.split('')[1]))){
                    this.phoneMessage = '输入的手机号码格式有误！';
                    this.showMessage = true;
                }else if(this.phoneTextNum.length > 11){
                    this.phoneMessage = '输入的手机号码格式有误！';
                    this.showMessage = true;
                }
            },
            //显示密码 i 1 密码 2 再次输入密码
            displayPassword(i){
                this.activeInput = i;
                this.flashing(i);
                this.showTop = false;
                this.showKeyNum = false;
                if (i == 1){
                    this.showPassWord2 = !this.showPassWord2;
                } else if (i == 2){
                    this.showPassWord3 = !this.showPassWord3;
                }
                if (this.phoneTextNum2 && i == 1){
                    if (this.phoneTextNum2.length<12){
                        this.flashingLeft(i);
                    }else{
                        this.clearTimer();
                    }
                    this.clearPhone2 = true;
                }else if(this.phoneTextNum3 && i == 2){
                    if (this.phoneTextNum3.length<12){
                        this.flashingLeft(i);
                    }else{
                        this.clearTimer();
                    }
                    this.clearPhone3 = true;
                }
                this.activeABC = -1;
                this.activeNum = -1;
            },
            //失去焦点事件 i 0 phone 1 password 2 agin password
            onBlurInput(i){
                switch (i){
                    case 0:
                        this.phoneTest();
                        if (this.phoneTextNum.length<11){
                            this.showMessage = true;
                            this.phoneMessage = '输入的手机号码格式有误！'
                            if (!this.phoneTextNum.length){
                                this.phoneMessage = '手机号码不能为空！'
                            }
                        }else{
                            this.showMessage = false;
                            this.phoneMessage = '';
                        }
                        break;
                    case 1:
                        if (this.phoneTextNum2.length > 0 && this.phoneTextNum2.length < 6){
                            this.phoneMessage2 = '输入密码强度太弱！';
                            this.showMessage2 = true;
                        }else if(this.phoneTextNum2.length == 0){
                            this.phoneMessage2 = '输入密码不能为空！';
                            this.showMessage2 = true;
                        }else if(this.phoneTextNum2.length == 12){
                            this.phoneMessage2 = '';
                            this.showMessage2 = false;
                        }
                        break;
                    case 2:
                        if (this.phoneTextNum3.length > 0 && this.phoneTextNum3.length < 6){
                            this.phoneMessage3 = '再次输入密码强度太弱！';
                            this.showMessage3 = true;
                        }else if(this.phoneTextNum3.length == 0){
                            this.phoneMessage3 = '再次输入密码不能为空！';
                            this.showMessage3 = true;
                        }else if(this.phoneTextNum3.length == 12){
                            this.phoneMessage3 = '';
                            this.showMessage3 = false;
                        }else if (this.phoneTextNum2 !== this.phoneTextNum3){
                            this.phoneMessage3 = '两次输入密码不一致！';
                            this.showMessage3 = true;
                        }
                        break;
                }
            },
            //随意一种颜色
            randomColor() {
                let r,g,b,a;
                r = parseInt(Math.random()*255);
                g = parseInt(Math.random()*255);
                b = parseInt(Math.random()*255);
                a = (Math.random() + 0.2).toFixed(2);
                return `rgba(${r},${g},${b},${a})`
            },
        },
        created(){
            this.textLunBo()
        },
        destroyed(){
            this.clearTimer();
            clearInterval(this.textTimer)
            this.textTimer = null;
            sessionStorage.setItem('login',0)
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
        transition: height 1s ease;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        .login-top-text{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 10%;
            width: 100%;
            .login-top-span{
                width: 10%;
                display: inline-block;
                color:#971126;
            }
        }
    }
    .login-top.autoheight,
    .login-bottom.autoheight,
    .key-num.autoheight,
    .key-abc.autoheight{
        height: 0;
        border: 0;
    }
    .login-middle{
        .log-button,
        .middle-title,
        .log-password{
            height: 12%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1% 0;
            position: relative;
            .log-phone,
            .log-see,
            .log-clear{
                position: absolute;
                top: 30%;
                right: 12%;
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
                background-color: rgba(0,0,0,0.8);
            }
            .log-clear{
                right: 18%;
            }
            .log-see{
                background-color: rgba(44, 128, 39, 0.8);
            }
            .log-see.password{
                background-color: rgba(255, 72, 83, 0.8);
            }
            .phone-input{
                width: 75%;
                height: 75%;
                background-color: rgba(0,0,0,0.3);
                border: 0;
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
                        margin: 0 1%;
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
                        /*margin: 0 1%;*/
                    }
                    .phone-text-num{
                        color:#fff;
                        font-size: 0.6rem;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        .pass-cirle{
                            width: 0.4rem;
                            height: 0.4rem;
                            border-radius: 50%;
                            background-color: rgba(0,0,0,1);
                            display: inline-block;
                            margin: 0 1%;
                        }
                    }
                    .error{
                        color: #971126;
                    }
                }
            }
            .active-input{
                border: 2px solid #B8860B;
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
            margin: 5% 10% 0 10%;
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
        .log-message{
            height: auto;
            text-align: center;
            height: 8%;
            .log-message-span{
                color:#971126;
                font-size: 0.3rem;
                font-weight: bolder;
            }
        }
    }
    .login-bottom{
        width: 100%;
        height: calc(50% - 1px);
        border-top: 1px dashed rgba(255,255,255,0.3);
        transition: height 1s ease;
        overflow: hidden;
        .key-num{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            transition: height 1s ease;
            overflow: hidden;
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
            transition: height 1s ease;
            overflow: hidden;
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