<template>
  <div>
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="cart">Basic counter({{ counter }})</div>
      <img :src="image" alt="product image" />
      <h1>{{ product }}</h1>
      <p>{{ description }}</p>
      <a :href="myPath" target="_blank">W3Schools</a>
      <p v-if="inStock > 10">In Stock</p>
      <p v-else-if="inStock <= 10 && inStock > 0">Low Stock</p>
      <p v-else>Out of Stock</p>
      <p v-if="onSale">OnSale</p>
      <p>Shipping: {{shipping}}</p>
      
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
        v-for="(variant, index) in variants"
        :key="variant.id"
        @mouseover="updateVariant(index)"
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
        :class="{ disabledButton: !inStock }"
      >
        Add to Cart
      </button>
      <!-- end of container -->
    </div>
  </div>
</template>

<script>
export default {
  props:
  {
    premium: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    addToCart() {
     this.$emit('add-to-cart')
    },
    updateVariant(index) {
      this.selectedVariant = index
    }
  },
  data() {
    return {
      brand: "BeaverNamnam",
      product: "Mushroom and cheese tart",
      description: "Parmesan cheese, dried basil, fresh thyme and a clove of garlic served in a soft puff pastry",
      // image: require("../assets/images/1456.png"),
      selectedVariant: 0,
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
        { id: '14', size: "S", image: require("../assets/images/1456S.png"), color: 'blue', quantity: 50 },
        { id: '15', size: "M", image: require("../assets/images/1456M.png"), color: 'green', quantity: 10 },
      ],
      counter: 0,
      
    };
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    shipping() {
        if(this.premium){
            return "free"
        }
        return 2.99
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