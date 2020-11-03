<template>
  <div id="app" @contextmenu.prevent>
     <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  user-select:none;
  background-color: var(--normar-bgcolor);
  color: var(--font-color);
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
