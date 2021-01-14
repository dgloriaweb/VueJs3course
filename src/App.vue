<template>
  <div id="app">
        <div class="cart">Basic counter({{ counter }})</div>
      <div class="cart">Cart({{ cart.length }})</div>
    <ProductDisplay :premium="premium" @add-to-cart="updateCart" />
    <ReviewForm  />
  </div>
</template>

<script>
import ProductDisplay from './components/ProductDisplay.vue'
import ReviewForm from './components/ReviewForm.vue'


export default {
  name: 'App',
  components: {
    ProductDisplay,
    ReviewForm
  },
  data() {
    return {
      cart: [],
      premium: false
    }
  },
  methods:{
    updateCart(id){
      this.cart.push(id)
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
