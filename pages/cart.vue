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
      return this.$store.state.cart.mycart
    }
  },
  methods: {

  },
  asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    return {
      cart: {},
    };
  },
  created() {

  },
  mounted() {
  },
  updated() {
    this.$store.dispatch("cart/getCart").then((x) => {
      this.cart = x;
    });
  },
  mounted() {
    this.$store.dispatch("cart/getCart").then((x) => {
      this.cart = x;
    });
  },

}
</script>
