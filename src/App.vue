<template>
  <div id="app">
        <div class="cart">Basic counter({{ counter }})</div>
      <div class="cart">Cart({{ cart }})</div>
    <ProductDisplay :premium="premium" @add-to-cart="updateCart" />
  </div>
</template>

<script>
import ProductDisplay from './components/ProductDisplay.vue'


export default {
  name: 'App',
  components: {
    ProductDisplay
  },
  data() {
    return {
      cart: 0,
      premium: false
    }
  },
  methods:{
    updateCart(){
      this.cart +=1
    }
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
  margin-top: 60px;
}
</style>
