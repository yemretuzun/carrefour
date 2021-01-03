<template>
  <div class="row">
    <button class="btn icon-plus rounded-circle p-0"
      @click.prevent="quantityDecrement"
      :disabled="quantity == 1"
      type="button">
			  <b-icon-dash class="icon" />
		</button>
    <div class="text-center mx-2">
      <div class="font-weight-bold">{{quantity}}</div>
      <div>{{ birim }}</div>
    </div>
    <button class="btn icon-plus rounded-circle p-0"
           @click.prevent="quantityIncrement"
           type="button">
	  	<b-icon-plus class="icon" />
	  </button>
  </div>
</template>


<script>
import $ from 'jquery'

export default {
  props: { birim: String, responsive: Boolean },
    data() {
        return {
          quantity: 1,
        }
    },
    methods: {
      quantityChanged(){
        this.$emit('quantityChanged', this.quantity);
      },
      quantityIncrement()  {
        this.quantity++;
        this.$emit('quantityChanged', this.quantity);
        this.$emit('increased', this.quantity);
      },
      quantityDecrement()  {
        this.quantity--;
        this.$emit('quantityChanged', this.quantity);
        this.$emit('decreased', this.quantity);
      },
    },
    mounted(){
        if(this.$screen.breakpoint === "xs" && this.responsive){
          $('.price').addClass('smaller')
        }else{
          $('.price').removeClass('smaller')
        }

        if(!this.birim)
        {
          this.birim = "adet"
        }

        if(this.responsive === NaN)
          this.responsive = true
    },
    updated(){
        if(this.$screen.breakpoint === "xs" && this.responsive){
          $('.price').addClass('smaller')
        }else{
          $('.price').removeClass('smaller')
        }

        if(!this.birim)
        {
          this.birim = "adet"
        }

        if(this.responsive === null || this.responsive === undefined)
          this.responsive = true
    }
}
</script>
<style scoped>
  .icon-plus{
    background-color: #f0f8ff !important;
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
  .icon{
   width: 20px;
    height: 20px;
  }
</style>
