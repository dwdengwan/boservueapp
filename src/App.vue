<template>
  <div id="app" @contextmenu.prevent>
      <transition :name="transitionName">
          <router-view />
      </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data(){
      return {
          transitionName: 'slide-left',
      }
  },
  watch: {

    $route (to, from) {

        // 通过判断路由自定义的级别来判断是转入还是转出

        if (to.meta.level > from.meta.level) {

            this.transitionName = 'slide-left'
        } else {

            this.transitionName = 'slide-right'
        }
    }
  }

}
</script>

<style>
    /*
    动画样式
    will-change: transform    优化渲染速度
*/

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    will-change: transform;
    transition: all 0.5s;
    width: 100%;
    position: absolute;
}
.slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  user-select:none;
  background-color: var(--normar-bgcolor);
  color: var(--font-color);
  background-image: var(--bg-img-color);
}
:root{
    /*正常字体颜色*/
    --font-color:green;
    /*点击的背景颜色*/
    --active-bgcolor:#d12;
    /*正常的背景颜色*/
    --normar-bgcolor:#940619;
    /*可点击的跳转至朋友圈的人物名字*/
    --backfriend-name:#576999;
    /*背景图片颜色*/
    --bg-img-color:linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
}
*{
    margin:0;
    padding: 0;
}
/*发现 看一看 弹幕*/
.barrages-drop .yellow .normal{
    /*background: #dfc795;*/
    background: rgba(223,199,149,0.5);
    color: rgba(255,255,255,0.5);
}
.barrages-drop .red .normal{
    /*background: #e68fba;*/
    background: rgba(246,143,181,0.5);
    color: rgba(255,255,255,0.5);
}
.barrages-drop .green .normal{
    /*background: #75ffcd;*/
    background: rgba(117,255,205,0.5);
    color: rgba(255,255,255,0.5);
}
.barrages-drop .blue .normal{
    /*background: #e6ff75;*/
    background: rgba(246,255,117,0.5);
    color: rgba(255,255,255,0.5);
}
</style>
