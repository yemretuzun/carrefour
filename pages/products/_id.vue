<template>
    <div class="container-fluid">
        <ProductDetails :product="product"/>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    product() {
      return this.$store.state.products.list.filter(i => i.id === this.$route.params.id)[0]
    }
  },
  methods: {

  }
}
</script>
