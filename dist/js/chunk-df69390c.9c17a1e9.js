(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df69390c"],{"07da":function(t,e,n){"use strict";var a=n("edce"),i=n.n(a);i.a},1276:function(t,e,n){"use strict";var a=n("d784"),i=n("44e7"),r=n("825a"),s=n("1d80"),c=n("4840"),o=n("8aa5"),u=n("50c4"),l=n("14c3"),d=n("9263"),h=n("d039"),f=[].push,p=Math.min,v=4294967295,m=!h((function(){return!RegExp(v,"y")}));a("split",2,(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=String(s(this)),r=void 0===n?v:n>>>0;if(0===r)return[];if(void 0===t)return[a];if(!i(t))return e.call(a,t,r);var c,o,u,l=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,m=new RegExp(t.source,h+"g");while(c=d.call(m,a)){if(o=m.lastIndex,o>p&&(l.push(a.slice(p,c.index)),c.length>1&&c.index<a.length&&f.apply(l,c.slice(1)),u=c[0].length,p=o,l.length>=r))break;m.lastIndex===c.index&&m.lastIndex++}return p===a.length?!u&&m.test("")||l.push(""):l.push(a.slice(p)),l.length>r?l.slice(0,r):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=s(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,i,n):a.call(String(i),e,n)},function(t,i){var s=n(a,t,this,i,a!==e);if(s.done)return s.value;var d=r(t),h=String(this),f=c(d,RegExp),g=d.unicode,x=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),b=new f(m?d:"^(?:"+d.source+")",x),w=void 0===i?v:i>>>0;if(0===w)return[];if(0===h.length)return null===l(b,h)?[h]:[];var E=0,y=0,C=[];while(y<h.length){b.lastIndex=m?y:0;var k,R=l(b,m?h:h.slice(y));if(null===R||(k=p(u(b.lastIndex+(m?0:y)),h.length))===E)y=o(h,y,g);else{if(C.push(h.slice(E,y)),C.length===w)return C;for(var $=1;$<=R.length-1;$++)if(C.push(R[$]),C.length===w)return C;y=E=k}}return C.push(h.slice(E)),C}]}),!m)},"14c3":function(t,e,n){var a=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,n){var a=n("da84"),i=n("fdbc"),r=n("17c2"),s=n("9112");for(var c in i){var o=a[c],u=o&&o.prototype;if(u&&u.forEach!==r)try{s(u,"forEach",r)}catch(l){u.forEach=r}}},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,i=n("a640"),r=n("ae40"),s=i("forEach"),c=r("forEach");t.exports=s&&c?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},2532:function(t,e,n){"use strict";var a=n("23e7"),i=n("5a34"),r=n("1d80"),s=n("ab13");a({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(r(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"2c87":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-footer display"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sendValue,expression:"sendValue"},{name:"focus",rawName:"v-focus"}],attrs:{type:"textear",rows:"1","max-rows":"3"},domProps:{value:t.sendValue},on:{input:function(e){e.target.composing||(t.sendValue=e.target.value)}}}),n("button",{on:{touchend:function(e){return t.handleSend(t.sendValue)}}},[t._v("send")])])},i=[],r=(n("4160"),n("c975"),n("b0c0"),n("159b"),{name:"contentFooter",props:["contentFooterObj"],data:function(){return{sendValue:"",onClickNum:0,childData:[],typeNum:-1}},methods:{handleSend:function(t){if(""!=t){if(1==this.typeNum){var e={id:"1000"+this.onClickNum,time:"",youSay:"",mySay:""};e.mySay=t,e.youSay=this.handleAnswer(t),e.time=this.$common.getTimeStr();var n=this.$parent.$refs.wechatchild;console.log(this.$parent.$refs.wechatchild);var a=0;if(void 0!==n&&n.forEach((function(t){a+=2*t.clientHeight})),console.log(a),this.childData.push(e),this.onClickNum++,this.onClickNum>1){var i=this.$parent.wechatData,r=this.onClickNum,s=new Date(i[r-2].time).getTime(),c=new Date(i[r-1].time).getTime(),o=(c-s)/1e3;e.time=o>180?this.$common.getTimeStr():""}this.$emit("on-updata",this.childData)}else if(2==this.typeNum){var u={};if(-1==this.contentFooterObj.contentPostion.i)u.content=t,u.name="dw",u.other="";else{var l=this.contentFooterObj.contentPostion,d=this.$parent.friendData[l.i].list[l.j][l.k];u.other=d.name,u.content=t,u.name="dw"}this.$emit("on-updata-friendData",u),this.$parent.showContent=!1}else if(3==this.typeNum){console.log("search");var h={showResult:!0,text:t};this.$emit("on-updata-search",h)}this.sendValue=""}},handleAnswer:function(t){return t.indexOf("你好")>-1?"谢谢你的问候，你也好呀。":""!==t?t:void 0}},created:function(){this.typeNum=this.contentFooterObj.num}}),s=r,c=(n("07da"),n("2877")),o=Object(c["a"])(s,a,i,!1,null,"5d53fbb3",null);e["a"]=o.exports},"2d3f":function(t,e,n){"use strict";var a=n("a536"),i=n.n(a);i.a},4160:function(t,e,n){"use strict";var a=n("23e7"),i=n("17c2");a({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"44e7":function(t,e,n){var a=n("861d"),i=n("c6b6"),r=n("b622"),s=r("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},"4f04":function(t,e,n){"use strict";var a=n("ea62"),i=n.n(a);i.a},"5a34":function(t,e,n){var a=n("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"6f54":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search all"},[n("div",{staticClass:"search-header header"},[n("go-back-header")],1),n("div",{staticClass:"search-content-area"},[n("content-footer",{staticClass:"search-content-footer",attrs:{contentFooterObj:t.contentFooterObj},on:{"on-updata-search":t.upData}})],1),n("div",{staticClass:"search-content content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showResult,expression:"showResult"}],staticClass:"search-content-result"},[n("div",{staticClass:"search-result-child"},[n("div",{staticClass:"search-child-left"},[n("div",{staticClass:"search-child-img"}),n("div",{staticClass:"search-child-name"},[t._v(t._s(t.name))])]),n("div",{staticClass:"search-child-right",on:{touchend:t.addFriend}})])])])])},i=[],r=(n("b0c0"),n("9ba8")),s=n("2c87"),c={name:"search",components:{GoBackHeader:r["a"],contentFooter:s["a"]},data:function(){return{contentFooterObj:{num:3},showResult:!1,name:""}},methods:{upData:function(t){this.$set(this,"showResult",t.showResult),this.$set(this,"name",t.text)},addFriend:function(){var t={name:""};t.name=this.name,this.$router.push({path:"/addrbook",query:t}),console.log("dyk")}}},o=c,u=(n("4f04"),n("2877")),l=Object(u["a"])(o,a,i,!1,null,"4bef8b8c",null);e["default"]=l.exports},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9263:function(t,e,n){"use strict";var a=n("ad6d"),i=n("9f7f"),r=RegExp.prototype.exec,s=String.prototype.replace,c=r,o=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=o||l||u;d&&(c=function(t){var e,n,i,c,d=this,h=u&&d.sticky,f=a.call(d),p=d.source,v=0,m=t;return h&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),m=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(p="(?: "+p+")",m=" "+m,v++),n=new RegExp("^(?:"+p+")",f)),l&&(n=new RegExp("^"+p+"$(?!\\s)",f)),o&&(e=d.lastIndex),i=r.call(h?n:d,m),h?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:o&&i&&(d.lastIndex=d.global?i.index+i[0].length:e),l&&i&&i.length>1&&s.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},9403:function(t,e,n){},"9ba8":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"friend-back"},[n("span",{staticStyle:{width:"auto",display:"inline-block"},on:{touchend:t.handleClickBack}},[n("span",{staticClass:"friend-goback"}),n("span",{staticClass:"friend-name"},[t._v(t._s(t.name))])]),n("confirm-fixed",{ref:"confirmFixed",attrs:{result:t.result}})],1)},i=[],r=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showGameFixed,expression:"showGameFixed"}],staticClass:"confirm-fixed"},[n("div",{staticClass:"confirm-content"},[n("div",{staticClass:"content-top"},[n("span",{staticClass:"content-top-right"},[t._v("是否退出")]),n("span",{staticClass:"content-top-left"},[t._v(t._s(t.gameName)+"小游戏。？")])]),n("div",{staticClass:"content-button"},[n("div",{staticClass:"content-button-left",on:{touchend:function(e){return t.comfirm(1)}}},[t._v("yes")]),n("div",{staticClass:"content-button-right",on:{touchend:function(e){return t.comfirm(0)}}},[t._v("no")])])])])}),s=[],c=(n("caad"),n("ac1f"),n("2532"),n("1276"),{name:"confirmFixed",props:["result"],data:function(){return{showGameFixed:!1,gameName:"华容道"}},methods:{goBack:function(){if("goshopping"!=this.result){var t=window.location.href.split("?")[0],e=window.location.href.split("?")[0].includes("game"),n=0;if(e){n=""==t.split("game")[1]?0:1;var a=t.split("game")[1],i="";switch(a){case"/well":i="井子棋";break;case"/tetris":i="俄罗斯方块";break;case"/snake":i="贪吃蛇";break;case"/huarongdao":i="华容道";break;case"/buildBlocks":i="积木";break;case"/kline":i="k折线图";break;case"/music":i="音乐达人";break;case"/chess":i="dw象棋";break}this.gameName=i}n?this.showGameFixed=!0:(this.showGameFixed=!1,this.$router.back(-1))}else this.$router.push({path:"/found"})},comfirm:function(t){t&&this.$router.back(-1),this.showGameFixed=!1}},created:function(){}}),o=c,u=(n("2d3f"),n("2877")),l=Object(u["a"])(o,r,s,!1,null,"06af1f56",null),d=l.exports,h={name:"goBackHeader",props:["result"],components:{confirmFixed:d},data:function(){return{name:"朋友圈"}},methods:{handleClickBack:function(){this.$refs.confirmFixed.goBack()}},created:function(){this.name=this.$route.query.name}},f=h,p=(n("da4e"),Object(u["a"])(f,a,i,!1,null,"0ae57070",null));e["a"]=p.exports},"9f7f":function(t,e,n){"use strict";var a=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a536:function(t,e,n){},ab13:function(t,e,n){var a=n("b622"),i=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(a){}}return!1}},ac1f:function(t,e,n){"use strict";var a=n("23e7"),i=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},c975:function(t,e,n){"use strict";var a=n("23e7"),i=n("4d64").indexOf,r=n("a640"),s=n("ae40"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,u=r("indexOf"),l=s("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:o||!u||!l},{indexOf:function(t){return o?c.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},caad:function(t,e,n){"use strict";var a=n("23e7"),i=n("4d64").includes,r=n("44d2"),s=n("ae40"),c=s("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!c},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),i=n("d039"),r=n("b622"),s=n("9263"),c=n("9112"),o=r("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=r("replace"),h=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var p=r(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),m=v&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!v||!m||"replace"===t&&(!u||!l||h)||"split"===t&&!f){var g=/./[p],x=n(p,""[t],(function(t,e,n,a,i){return e.exec===s?v&&!i?{done:!0,value:g.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),b=x[0],w=x[1];a(String.prototype,t,b),a(RegExp.prototype,p,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}d&&c(RegExp.prototype[p],"sham",!0)}},da4e:function(t,e,n){"use strict";var a=n("9403"),i=n.n(a);i.a},ea62:function(t,e,n){},edce:function(t,e,n){}}]);
//# sourceMappingURL=chunk-df69390c.9c17a1e9.js.map