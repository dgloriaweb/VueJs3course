<template>
  <div>
    <div class="container">
      <h1>{{title}}</h1>
      <div class="cart">Basic counter({{ counter }})</div>
      <div class="cart">Cart({{ cart }})</div>
      <!-- <div class="product-image"> -->
      <img :src="image" alt="product image" />
      <!-- </div> -->
      <h1>{{ product }}</h1>
      <p>{{ description }}</p>
      <a :href="myPath" target="_blank">W3Schools</a>
      <p v-if="inventory > 10">In Stock</p>
      <p v-else-if="inventory <= 10 && inventory > 0">Low Stock</p>
      <p v-else>Out of Stock</p>
      <p v-if="onSale">OnSale</p>
      <h2>Sensitivities</h2>
      <ul>
        <li v-for="sensitivity in sensitivities" :key="sensitivity.id">
          {{ sensitivity }}
        </li>
      </ul>
      <h2>nutritions</h2>
      <ul>
        <li v-for="nutrition in nutritions" :key="nutrition.id">
          {{ nutrition }}
        </li>
      </ul>
      <h2>Variants</h2>
      <div
        v-for="variant in variants"
        :key="variant.id"
        @mouseover="updateImage(variant.image)"
      >
        Size {{ variant.size }}
      </div>
      <div
        v-for="variant in variants"
        :key="variant.id"
        @mouseover="updateImage(variant.image)"
        class="colorCircle"
        :style="{ 'background-color': variant.color }"
      ></div>

      <button class="button" type="button" v-on:click="counter += 1">
        Basic counter
      </button>
      <button
        class="button"
        type="button"
        v-on:click="addToCart"
        :class="{ disabledButton: !inventory }"
      >
        Add to Cart
      </button>
      <!-- end of container -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateImage(variantImage) {
      this.image = variantImage
    }
  },
  data() {
    return {
      brand: "BeaverNamnam",
      product: "Mushroom and cheese tart",
      description: "Parmesan cheese, dried basil, fresh thyme and a clove of garlic served in a soft puff pastry",
      image: require("../assets/images/1456.png"),
      myPath: "http://www.w3schools.com",
      inventory: 100,
      onSale: true,
      sensitivities: [
        "vegetarian",
        "vegan",
        "molluscs"],
      nutritions: [
        "weight",
        "energykj",
        "salt"
      ],
      variants: [
        { id: '1456S', size: "S", image: require("../assets/images/1456S.png"), color: 'blue' },
        { id: '1456M', size: "M", image: require("../assets/images/1456M.png"), color: 'green' },
      ],
      counter: 0,
      cart: 0,
    };
  },
  computed:{
    title(){
      return this.brand + ' ' + this.product
    }
  }
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