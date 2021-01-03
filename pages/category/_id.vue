<template>
    <div class="container-fluid">
      {{id}}
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    product() {
      return this.$store.state.products.list.filter(i => i.id === this.$route.params.id)[0]
    },
    id() {
      return this.$route.params.id
    }
  },
  methods: {

  }
}
</script>
