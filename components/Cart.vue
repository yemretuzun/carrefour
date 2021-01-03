<template>
  <div class="countainer py-5 mb-5">
    <div v-for="(cartItem, index) in cartItems.cart" :key="index">
      <CartItem  :item="cartItem"
                  @removeItem="removeItem(index)"
                  @quantityDec="quantityDec"
                  @quantityInc="quantityInc"
      />
    </div>
    <div>{{totalPrice}} TL</div>
    <div style="color:#333;"> Sepetinizde <strong style="color:#333;">{{cartItems.length}}</strong> ürün bulunmaktadır.</div>
    <a style="cursor:pointer;" @click.prevent="sepetiBosalt"><strong>Sepeti Boşalt.</strong></a>
  </div>
</template>


<script>
import CartItem from './CartItem.vue'
export default {
  components: { CartItem },
  props:{cartItems: Array},
    data() {
        return {
        }
    },
    methods:{

      sepetiBosalt(){
        this.$store.dispatch("cart/sepetiBosalt").then((x) => {});
      },
      removeItem(index){
          this.$store.dispatch("cart/removeProduct",index).then((x) => {});
      },
      quantityInc(p){
        this.$store.dispatch("cart/updateProduct",p ).then((x) => {});
      },
      quantityDec(p){
        this.$store.dispatch("cart/updateProduct",p ).then((x) => {});
      }
    },
    computed: {
      totalPrice(){
        let total = 0
        this.$store.state.cart.mycart.cart.forEach(p => total += p.price * p.quantity)
        return total.toFixed(2);
      },
    }
}
</script>

<style scoped>

  *{
    font-family: 'Nunito',Helvetica,Arial,sans-serif;
    color: var(--carrefour-blue);
  }

</style>
