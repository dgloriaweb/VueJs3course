<template>
  <div>
    <div class="container">
      <div class="cart">Basic counter({{ counter }})</div>
      <div class="cart">Cart({{ cart }})</div>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
   
  },
  data() {
  
  },
  
};
</script>

<style  scoped>
.colorCircle {
  width: 2rem;
  height: 2rem;
  border: 0.1rem solid #d8d8d8;
  border-radius: 50%;
}
.disabledButton {
  color: lightgray;
  cursor: not-allowed;
}
</style>