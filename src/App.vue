<!-- @format -->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  components: {}
}
</script>

<style lang="scss">
@import './assets/styles/style.scss';
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', STHeiti,
    'Microsoft Yahei', Tahoma, Simsun, sans-serif;
  font-size: 16px;
  color: #4a4a4a;
  width: 100%;
  height: 100%;
  min-width: 1200px;
}
img {
  vertical-align: bottom;
}
</style>
