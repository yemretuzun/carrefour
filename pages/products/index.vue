<template>
  <div class="container-fluid row w-100">
    <div class="col-2 p-0">
      <div class="my-3">
        <!-- Marka filtresi -->
          <b-card bg-variant="primary" text-variant="white" header="Marka" class="text-left">
            <b-card-text>
              <div v-for="(marka, index) in markalar" :key="index">
                  <b-form-checkbox
                    :id="'brand_cb_'+index"
                    v-model="status"
                    :name="'brand_cb_'+index"
                    >
                      {{marka}}
                    </b-form-checkbox>
              </div>
            </b-card-text>
          </b-card>
          <!-- Fiyat filtresi -->
          <div class="my-3">
            <b-card bg-variant="primary" text-variant="white" header="Fiyat" class="text-left">
                <b-card-text>
                  <div v-for="(fiyat, index) in fiyatlar" :key="index">
                      <b-form-checkbox
                        :id="'price_cb_'+index"
                        v-model="status"
                        :name="'price_cb_'+index"
                        unchecked-value="not_accepted"
                        >
                          {{fiyat}}
                        </b-form-checkbox>
                  </div>
                </b-card-text>
              </b-card>
          </div>
      </div>
    </div>
    <div class="col-10">
          {{compProducts}}

      <div v-for="(product,index) in products" :key="index">
        <div class="d-inline-flex float-left p-2">
          <ProductSliderItem :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
      this.$store.dispatch('products/getAll').then((x) => {
          this.products = x
        })
  },
   data() {
		  return {
        products: []
		  };
  },
  computed:{
    markalar(){
      return this.products.map(p => p.brand)
    },
    fiyatlar(){
      return this.products.map((p) => {
        return p.price
      })
    },
    
  },
  mounted() {

  },
}
</script>


<style scoped>
  b-card{
    cursor: pointer;
  }
</style>
