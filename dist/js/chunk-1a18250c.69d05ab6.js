(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a18250c"],{"0b43":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all btn"},[n("div",{staticClass:"header btn-header"},[n("go-back-header")],1),n("div",{staticClass:"content btn-content"},[n("dw-date")],1)])},i=[],r=n("9ba8"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.type2,t.btn,t.size2],attrs:{disabled:t.disabled,loading:t.loading},on:{touchend:t.handleClick}},[t._t("default")],2)},c=[],o={name:"btn",props:["type","size","disabled","loading"],data:function(){return{btn:"btn",type2:this.type,size2:this.size}},created:function(){},methods:{handleClick:function(){console.log(this.disabled),""!==this.disabled&&this.$emit("touchend")}}},l=o,u=(n("14e9"),n("2877")),h=Object(u["a"])(l,s,c,!1,null,"17b0e55e",null),d=h.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"date"},[n("div",{staticClass:"date-top"},[n("div",{staticClass:"date-t-right",on:{touchend:function(e){return t.handleClick(0)}}}),n("div",{staticClass:"date-t-middle",on:{touchend:t.handleSelect}},[t._v(t._s(t.year)+"年"+t._s(t.month)+"月")]),n("div",{staticClass:"date-t-left",on:{touchend:function(e){return t.handleClick(1)}}})]),n("div",[n("div",{staticClass:"date-middle"},t._l(t.dayData,(function(e,a){return n("div",{key:a},[t._v(t._s(e))])})),0),n("div",{staticClass:"date-bottom"},t._l(t.monthData,(function(e,a){return n("div",{key:a,class:{currday:e==(new Date).getDate()&&a<37&&a>7,oldday:a>37||a<7}},[t._v(" "+t._s(e)+" ")])})),0)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showDate,expression:"showDate"}],ref:"datefixed",staticClass:"date-fixed"},[n("div",{ref:"yearcontent",staticClass:"data-fixed-year content"},t._l(t.yDate,(function(e,a){return n("div",{key:a,ref:"yearchild",refInFor:!0,class:{curryYear:t.curryYear==e.split("年")[0],activeYear:t.activeYearIndex==a,"data-fixed-yearc":!0},on:{touchstart:t.handleTouchStart,touchend:function(e){return e.stopPropagation(),t.handleClickBack(a,0)}}},[t._v(" "+t._s(e)+" ")])})),0),n("div",{ref:"monthcontent",staticClass:"data-fixed-month content"},t._l(t.mDate,(function(e,a){return n("div",{key:a,ref:"monthchild",refInFor:!0,class:{curryMoth:t.curryMoth==e.split("月")[0],activeMoth:t.activeMothIndex==a&&""!==e,"data-fixed-monthc":!0},on:{touchstart:t.handleTouchStart,touchend:function(e){return e.stopPropagation(),t.handleClickBack(a,1)}}},[t._v(" "+t._s(e)+" ")])})),0)])])},v=[],p=(n("99af"),n("c740"),n("ac1f"),n("1276"),{name:"date",data:function(){return{dayData:["日","一","二","三","四","五","六"],monthData:[],year:(new Date).getFullYear(),month:(new Date).getMonth()+1,day:(new Date).getDate(),curryYear:(new Date).getFullYear(),curryMoth:(new Date).getMonth()+1,activeYearIndex:-1,activeMothIndex:-1,showDate:!1,longClick:0,timeOutEvent:0,scrollTimer:0,scrollTimer2:0,mDate:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],yDate:["2010年","2011年","2012年","2013年","2014年","2015年","2016年","2017年","2018年","2019年","2020年","2021年","2022年","2023年","2024年","2025年","2026年","2027年","2028年","2029年","2030年"]}},methods:{handleClick:function(t){t?(this.month++,this.month>12&&(this.month=1,this.year++)):(this.month--,this.month<1&&(this.month=12,this.year--)),console.log(this.getMonthDay(this.year,this.month),this.getWeekDay(this.year,this.month)),console.log(this.getMonthDate(this.year,this.month)),this.$set(this,"monthData",this.getMonthDate(this.year,this.month))},handleSelect:function(){this.showDate=!this.showDate,this.activeYearIndex=-1,this.activeMothIndex=-1,this.$refs.yearcontent.scrollTop=0,this.$refs.monthcontent.scrollTop=0,this.showDate&&this.handleScroll()},handleClickYear:function(t,e){var n=this;if(clearInterval(this.scrollTimer),clearInterval(this.scrollTimer2),e)this.activeMothIndex=t;else{this.activeYearIndex=t,this.activeMothIndex=0;var a=this.$refs.monthcontent.scrollTop;this.scrollTimer2=setInterval((function(){a--,n.$refs.monthcontent.scrollTop=a,a||clearInterval(n.scrollTimer2)}),20)}},handleTouchStart:function(){var t=this;this.longClick=0,this.timeOutEvent=setTimeout((function(){t.longClick=1}),300)},handleClickBack:function(t,e){clearTimeout(this.timeOutEvent),0!=this.timeOutEvent&&0==this.longClick?(this.handleClickYear(t,e),e?this.month=this.mDate[t].split("月")[0]:(this.year=this.yDate[t].split("年")[0],this.month=this.mDate[0].split("月")[0])):(clearInterval(this.scrollTimer),clearInterval(this.scrollTimer2),console.log("滑动了。。。。"))},handleScroll:function(){var t=this;clearInterval(this.scrollTimer),clearInterval(this.scrollTimer2),this.$nextTick((function(){var e=t.yDate.findIndex((function(e){return e.split("年")[0]==t.curryYear})),n=t.mDate.findIndex((function(e){return e.split("月")[0]==t.curryMoth})),a=e+3,i=n+3,r=t.$refs.yearchild[0].clientHeight*a,s=t.$refs.monthchild[0].clientHeight*i,c=t.$refs.yearcontent.scrollTop,o=t.$refs.monthcontent.scrollTop,l=t.$refs.datefixed.clientHeight;t.scrollTimer=setInterval((function(){c<r-l?c++:clearInterval(t.scrollTimer),t.$refs.yearcontent.scrollTop=c}),20),t.scrollTimer2=setInterval((function(){o<s-l?o++:clearInterval(t.scrollTimer2),t.$refs.monthcontent.scrollTop=o}),20)}))},getMonthDay:function(t,e){var n=new Date(t,e,0);return n.getDate()},getWeekDay:function(t,e){var n=new Date("".concat(e,"/1/").concat(t)).getDay();return n},getMonthDate:function(t,e){var n=[],a=[],i=this.getMonthDay(t,e);console.log(this.getWeekDay(t,e));var r=0==this.getWeekDay(t,e)?7:this.getWeekDay(t,e),s=0,c=[],o=[],l=0;s=1==e?this.getMonthDay(t-1,12):this.getMonthDay(t,e-1);for(var u=0;u<i;u++)a.push(u+1);for(var h=0;h<r;h++)c.push(s-r+h+1);l=42-i-r;for(var d=0;d<l;d++)o.push(d+1);return n=c.concat(a).concat(o),n}},created:function(){this.$set(this,"monthData",this.getMonthDate(this.year,this.month))},destroyed:function(){clearTimeout(this.timeOutEvent),clearInterval(this.scrollTimer),clearInterval(this.scrollTimer2)}}),m=p,g=(n("ee4e"),Object(u["a"])(m,f,v,!1,null,"78eceec2",null)),x=g.exports,y={name:"btn",components:{goBackHeader:r["a"],dwButton:d,dwDate:x},methods:{handleClick:function(){alert("点我干嘛 再点试试")}}},b=y,k=(n("48de"),Object(u["a"])(b,a,i,!1,null,"55992b13",null));e["default"]=k.exports},"0eb4":function(t,e,n){},1276:function(t,e,n){"use strict";var a=n("d784"),i=n("44e7"),r=n("825a"),s=n("1d80"),c=n("4840"),o=n("8aa5"),l=n("50c4"),u=n("14c3"),h=n("9263"),d=n("d039"),f=[].push,v=Math.min,p=4294967295,m=!d((function(){return!RegExp(p,"y")}));a("split",2,(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=String(s(this)),r=void 0===n?p:n>>>0;if(0===r)return[];if(void 0===t)return[a];if(!i(t))return e.call(a,t,r);var c,o,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,m=new RegExp(t.source,d+"g");while(c=h.call(m,a)){if(o=m.lastIndex,o>v&&(u.push(a.slice(v,c.index)),c.length>1&&c.index<a.length&&f.apply(u,c.slice(1)),l=c[0].length,v=o,u.length>=r))break;m.lastIndex===c.index&&m.lastIndex++}return v===a.length?!l&&m.test("")||u.push(""):u.push(a.slice(v)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=s(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,i,n):a.call(String(i),e,n)},function(t,i){var s=n(a,t,this,i,a!==e);if(s.done)return s.value;var h=r(t),d=String(this),f=c(h,RegExp),g=h.unicode,x=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(m?"y":"g"),y=new f(m?h:"^(?:"+h.source+")",x),b=void 0===i?p:i>>>0;if(0===b)return[];if(0===d.length)return null===u(y,d)?[d]:[];var k=0,w=0,D=[];while(w<d.length){y.lastIndex=m?w:0;var C,I=u(y,m?d:d.slice(w));if(null===I||(C=v(l(y.lastIndex+(m?0:w)),d.length))===k)w=o(d,w,g);else{if(D.push(d.slice(k,w)),D.length===b)return D;for(var E=1;E<=I.length-1;E++)if(D.push(I[E]),D.length===b)return D;w=k=C}}return D.push(d.slice(k)),D}]}),!m)},"14c3":function(t,e,n){var a=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"14e9":function(t,e,n){"use strict";var a=n("1d66"),i=n.n(a);i.a},1784:function(t,e,n){},"1d66":function(t,e,n){},2532:function(t,e,n){"use strict";var a=n("23e7"),i=n("5a34"),r=n("1d80"),s=n("ab13");a({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(r(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"2d3f":function(t,e,n){"use strict";var a=n("a536"),i=n.n(a);i.a},"44e7":function(t,e,n){var a=n("861d"),i=n("c6b6"),r=n("b622"),s=r("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},"48de":function(t,e,n){"use strict";var a=n("0eb4"),i=n.n(a);i.a},"5a34":function(t,e,n){var a=n("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9263:function(t,e,n){"use strict";var a=n("ad6d"),i=n("9f7f"),r=RegExp.prototype.exec,s=String.prototype.replace,c=r,o=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],h=o||u||l;h&&(c=function(t){var e,n,i,c,h=this,d=l&&h.sticky,f=a.call(h),v=h.source,p=0,m=t;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),m=String(t).slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==t[h.lastIndex-1])&&(v="(?: "+v+")",m=" "+m,p++),n=new RegExp("^(?:"+v+")",f)),u&&(n=new RegExp("^"+v+"$(?!\\s)",f)),o&&(e=h.lastIndex),i=r.call(d?n:h,m),d?i?(i.input=i.input.slice(p),i[0]=i[0].slice(p),i.index=h.lastIndex,h.lastIndex+=i[0].length):h.lastIndex=0:o&&i&&(h.lastIndex=h.global?i.index+i[0].length:e),u&&i&&i.length>1&&s.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},9403:function(t,e,n){},"9ba8":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"friend-back"},[n("span",{staticStyle:{width:"auto",display:"inline-block"},on:{touchend:t.handleClickBack}},[n("span",{staticClass:"friend-goback"}),n("span",{staticClass:"friend-name"},[t._v(t._s(t.name))])]),n("confirm-fixed",{ref:"confirmFixed",attrs:{result:t.result}})],1)},i=[],r=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showGameFixed,expression:"showGameFixed"}],staticClass:"confirm-fixed"},[n("div",{staticClass:"confirm-content"},[n("div",{staticClass:"content-top"},[n("span",{staticClass:"content-top-right"},[t._v("是否退出")]),n("span",{staticClass:"content-top-left"},[t._v(t._s(t.gameName)+"小游戏。？")])]),n("div",{staticClass:"content-button"},[n("div",{staticClass:"content-button-left",on:{touchend:function(e){return t.comfirm(1)}}},[t._v("yes")]),n("div",{staticClass:"content-button-right",on:{touchend:function(e){return t.comfirm(0)}}},[t._v("no")])])])])}),s=[],c=(n("caad"),n("ac1f"),n("2532"),n("1276"),{name:"confirmFixed",props:["result"],data:function(){return{showGameFixed:!1,gameName:"华容道"}},methods:{goBack:function(){if("goshopping"!=this.result){var t=window.location.href.split("?")[0],e=window.location.href.split("?")[0].includes("game"),n=0;if(e){n=""==t.split("game")[1]?0:1;var a=t.split("game")[1],i="";switch(a){case"/well":i="井子棋";break;case"/tetris":i="俄罗斯方块";break;case"/snake":i="贪吃蛇";break;case"/huarongdao":i="华容道";break;case"/buildBlocks":i="积木";break;case"/kline":i="k折线图";break;case"/music":i="音乐达人";break;case"/chess":i="dw象棋";break}this.gameName=i}n?this.showGameFixed=!0:(this.showGameFixed=!1,this.$router.back(-1))}else this.$router.push({path:"/found"})},comfirm:function(t){t&&this.$router.back(-1),this.showGameFixed=!1}},created:function(){}}),o=c,l=(n("2d3f"),n("2877")),u=Object(l["a"])(o,r,s,!1,null,"06af1f56",null),h=u.exports,d={name:"goBackHeader",props:["result"],components:{confirmFixed:h},data:function(){return{name:"朋友圈"}},methods:{handleClickBack:function(){this.$refs.confirmFixed.goBack()}},created:function(){this.name=this.$route.query.name}},f=d,v=(n("da4e"),Object(l["a"])(f,a,i,!1,null,"0ae57070",null));e["a"]=v.exports},"9f7f":function(t,e,n){"use strict";var a=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a536:function(t,e,n){},ab13:function(t,e,n){var a=n("b622"),i=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(a){}}return!1}},ac1f:function(t,e,n){"use strict";var a=n("23e7"),i=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},c740:function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").findIndex,r=n("44d2"),s=n("ae40"),c="findIndex",o=!0,l=s(c);c in[]&&Array(1)[c]((function(){o=!1})),a({target:"Array",proto:!0,forced:o||!l},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(c)},caad:function(t,e,n){"use strict";var a=n("23e7"),i=n("4d64").includes,r=n("44d2"),s=n("ae40"),c=s("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!c},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),i=n("d039"),r=n("b622"),s=n("9263"),c=n("9112"),o=r("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),h=r("replace"),d=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),f=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,h){var v=r(t),p=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),m=p&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!p||!m||"replace"===t&&(!l||!u||d)||"split"===t&&!f){var g=/./[v],x=n(v,""[t],(function(t,e,n,a,i){return e.exec===s?p&&!i?{done:!0,value:g.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=x[0],b=x[1];a(String.prototype,t,y),a(RegExp.prototype,v,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}h&&c(RegExp.prototype[v],"sham",!0)}},da4e:function(t,e,n){"use strict";var a=n("9403"),i=n.n(a);i.a},ee4e:function(t,e,n){"use strict";var a=n("1784"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-1a18250c.69d05ab6.js.map