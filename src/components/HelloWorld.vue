<template>
  <div>
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
    <ul>
      <li v-for="sensitivity in sensitivities" :key="sensitivity.id">{{sensitivity}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      product: "Mushroom and cheese tart",
      description: "Parmesan cheese, dried basil, fresh thyme and a clove of garlic served in a soft puff pastry",
      image: require("../assets/images/1456.png"),
      myPath: "http://www.w3schools.com",
      inventory: 100,
      onSale: true,
      sensitivities: ["vegetarian",
        "vegan",
        "dairyfree",
        "glutenfree",
        "halal",
        "pregnant",
        "wheat",
        "crustaceans",
        "eggs",
        "fish",
        "peanuts",
        "soybeans",
        "milk",
        "nuts",
        "celery",
        "mustard",
        "sesame",
        "sulphurDioxide",
        "lupin",
        "molluscs"],
      nutrition: [
        "weight",
        "energykj",
        "energykcal",
        "protein",
        "carbohydrate",
        "sugars",
        "fat",
        "saturates",
        "fibre",
        "sodium",
        "salt"
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>