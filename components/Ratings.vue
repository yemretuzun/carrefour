<template>
  <div>
    <b-form-rating
      :value="rating"
      readonly
      precision="3"
      :class="'ml-0 mr-auto' + bg_color != null ? bg_color : ''"
      :color="color"
      no-border
      inline
    ></b-form-rating>
  </div>
</template>


<script>
import Ratings from './Ratings'
export default {
  props: {
    rating: Number,
    color: String,
    bg_color: String,
  },
    data() {
        return {
          quantity: 1,
        }
    }
}
</script>

<style scoped>
  *:focus{
    box-shadow: none !important;
  }
</style>
