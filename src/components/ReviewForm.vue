<template>
  <div>
    <div class="container">
      <form class="review-form" @submit.prevent="onSubmit">
        <h3>Review form</h3>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" />
        <label for="review">Review:</label>
        <textarea
          name=""
          id="review"
          cols="30"
          rows="10"
          v-model="review"
        ></textarea>
        <label for="rating">Rating:</label>
        <select name="" id="rating" v-model.number="rating">
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <input type="submit" class="button" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      review: '',
      rating: null
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '' || this.rating === null) {
        alert('Review is incomplete. Please fill out every field.')
        return
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      }
      this.$emit('review-submitted', productReview)

      this.name = ''
      this.review = ''
      this.rating = null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>