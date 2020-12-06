<template>
<div>
<Cart :cartItems="cartItems"/>
</div>
</template>

<script>
import Cart from '../components/Cart'
import { mapMutations } from 'vuex'

export default {
  computed: {
    cartItems(){
      return this.$store.state.cart.list
    }
  },
  methods: {

  }
}
</script>
