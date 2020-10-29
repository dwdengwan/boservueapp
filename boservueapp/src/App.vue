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
  background-color: #940619;
  color: green;
}
*{
    margin:0;
    padding: 0;
}
</style>
