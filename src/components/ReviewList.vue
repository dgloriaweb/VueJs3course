<template>
  <div>
    <div class="review-container">
      <h2>Review List</h2>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars
          <br />
          "{{ review.review }}"
          <br />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },

}
</script>

<style lang="scss" scoped>
</style>