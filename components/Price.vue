<template>
  <div class="price row align-items-center mt-3">
    <div class="indirim rounded-circle">
      <a class="align-middle text-center text-decoration-none">{{discount}}%</a>
    </div>
    <div class="text-left mx-2">
        <div class="priceLineThrough"><a class="">{{discounted_price}} TL</a></div>
        <div><span>{{price}} TL</span></div>
    </div>
  </div>
</template>


<script>
import $ from 'jquery'

export default {
  props: { price: Number, discount: Number, discounted_price: Number  },
    data() {
        return {
        }
    },
    methods: {
    },
    mounted(){
        if(this.$screen.breakpoint === "xs"){
          $('.price').addClass('smaller')
        }else{
          $('.price').removeClass('smaller')
        }
    },
    updated(){
        if(this.$screen.breakpoint === "xs"){
          $('.price').addClass('smaller')
        }else{
          $('.price').removeClass('smaller')
        }
    }
}
</script>
<style scoped>
  .price span {
      display: inline-block;
      font-size: 34px;
      color: #005baa;
      line-height: 1;
      font-family: 'Nunito';
      font-weight: 600;
  }
  .indirim{
      background: #f8e71c;
      width: 59px;
      height: 59px;
      text-align: center;
      border-radius: 50%;
      font-weight: normal;
      font-size: 22px;
      line-height: 61px;
      color: #303030;
  }
  .indirim span{
      font-size: 28px;
  }
  .priceLineThrough {
      font-size: 22px;
      display: block;
      color: #878787 !important;
      line-height: 1;
      font-family: 'Nunito';
      font-weight: 600;
      text-decoration: line-through;
  }
</style>
