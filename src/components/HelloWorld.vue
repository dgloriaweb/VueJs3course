<template>
  <div>
    <!-- <div class="product-image"> -->
    <img :src="image" alt="product image" />
    <!-- </div> -->
    <h1>{{ product }}</h1>
    <p>{{ description }}</p>
    <a :href="myPath" target="_blank">W3Schools</a>
    <p v-if="inventory > 10">In Stock</p>
    <p v-else-if="inventory <= 10 && inventory >0">Low Stock</p>
    <p v-else>Out of Stock</p>
    <p v-if="onSale">OnSale</p>
  </div>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      product: "Boots",
      description: "these are boots",
      image: require("../assets/images/1456.png"),
      myPath: "http://www.w3schools.com",
      inventory: 100,
      onSale: true
    };
  },
};
</script>

<style lang="scss" scoped>
</style>