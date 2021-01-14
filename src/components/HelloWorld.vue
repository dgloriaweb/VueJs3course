<template>
  <div>
    <!-- <div class="product-image"> -->
<img :src="image" alt="product image">
    <!-- </div> -->
    <h1>{{product}}</h1>
    <p>{{description}}</p>
    <a :href="myPath" target="_blank">W3Schools</a>
  </div>
</template>

<script>
export default {
  
  methods: {},
  data(){
    return{
      product:'Boots',
      description: 'these are boots',
      image: require("../assets/images/1456.png"),
      myPath: 'http://www.w3schools.com'
    }
  }
};
</script>

<style lang="scss" scoped>
</style>