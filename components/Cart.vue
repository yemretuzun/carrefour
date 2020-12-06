<template>
  <div>
    <div v-for="(cartItem, index) in cartItems" :key="index">
      <CartItem  :item="cartItem"
                  @removeItem="removeItem(index)"
                  @priceDec="priceDec"
                  @priceInc="priceInc"
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
          totalPrice: 33.50 + 18.15,
            
        }
    },
    methods:{
      sepetiBosalt(){
          this.cartItems = [];
          this.totalPrice = 0;
      },
      removeItem(index){
        this.cartItems.splice(index,1)
      },
      priceInc(newPrice){
        this.totalPrice += newPrice;
      },
      priceDec(newPrice){
        this.totalPrice -= newPrice;
      }
    },
    computed: {

    }
}
</script>

<style scoped>

  *{
    font-family: 'Nunito',Helvetica,Arial,sans-serif;
    color: var(--carrefour-blue);
  }

</style>
