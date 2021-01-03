<template>
  <div v-if="product" id="sliderItem" class="text-center rounded d-table">
    <tr class="">
      <img class="" :src="carrefour_resize(product.images[0])" width="96" height="96" />
    </tr>

    <tr class="">
      {{
        product.title
      }}
    </tr>

    <tr class="">
      {{
        product.price
      }}
      TL
    </tr>

    <tr class="">
      (0.10 TL / adet)
    </tr>

    <div class="mx-auto w-75 pl-4">
      <QuantitySelector @quantityChanged="quantityChanged"/>
    </div>

    <tr class="mb-0 mt-auto">
      <button class="btn btn-primary btn-block w-75 mx-auto" carrefour @click="addToCart">
        Sepete Ekle
      </button>
    </tr>
  </div>
</template>

<script>
import QuantitySelector from "./QuantitySelector";

export default {
  props: { product: Object,  },
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    carrefour_resize(img, x, y) {
      if (!x) x = 96;
      if (!y) y = x;

      if (img.match(/mnresize\/600\/600/g)) {
        return img.replace(/mnresize\/600\/600/g, "mnresize/" + x + "/" + y + "");
      } else if (img.match(/mnresize\/120\/120/g)) {
        return img.replace(/mnresize\/600\/600/g, "mnresize/" + x + "/" + y + "");
      } else return img;
    },
    quantityChanged(newValue){
      this.quantity = newValue
    },
    addToCart(){
      this.$store.dispatch("cart/addProduct",{... this.product, quantity:this.quantity} ).then((x) => {});
    }
  },
};
</script>
<style scoped>
#sliderItem {
  height: 410px !important;
  width: 190px;
  padding: 10px 10px 0 10px !important;
  margin-left: 15px;
  background-color: #fff;
}
</style>
