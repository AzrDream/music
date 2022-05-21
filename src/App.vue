<template>
  <div id="app">
    <Header></Header>
  </div>
</template>
<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  },
  methods: {
  }
}
</script>
<style lang="scss">
  @import "assets/css/variable";
  .theme{
    position: fixed;
    left: 0;
    bottom: 0;
  }
</style>
