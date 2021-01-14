<template>
  <div id="app">
    <HelloWorld />
    <ProductDisplay :premium="premium"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ProductDisplay from './components/ProductDisplay.vue'
 

export default {
  name: 'App',
  components: {
    HelloWorld,
    ProductDisplay
  },
  data() {
  return {
    cart:0,
    premium:false
  }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
