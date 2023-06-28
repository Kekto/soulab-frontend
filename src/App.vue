<template>
  <defaultPage/>
</template>

<script>
import defaultPage from './pages/defaultPage.vue'

export default {
  name: 'App',
  components: {
    defaultPage
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $extra2;
}
body{
  background-color: $main1;
}
</style>
