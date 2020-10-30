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
    --font-color:yellow;
    /*点击的背景颜色*/
    --active-bgcolor:#d12;
    /*正常的背景颜色*/
    --normar-bgcolor:#940619;
}
*{
    margin:0;
    padding: 0;
}
</style>
