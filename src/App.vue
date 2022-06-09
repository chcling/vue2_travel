<template>
  <div id="app">
    <v-home></v-home>
  </div>
</template>

<script>

import VHome from '@/components/home/Home'
export default {
  name: 'App',
  components: {
    VHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.scroll-wrapper {
  height: 667px;
  overflow: hidden;
}
</style>
