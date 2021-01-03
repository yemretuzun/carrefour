<template>
<div class="container bg-white mt-2">
    <div v-if="results.length > 0" class=" mx-auto p-5 ml-5">
        <div class="container-fluid row w-100">
        <div class="col-2 p-0">
          <div class="my-3">
            <!-- Marka filtresi -->
            <b-card bg-variant="primary" text-variant="white" header="Marka" class="text-left">
              <b-card-text>
                <b-form-checkbox-group
                  v-model="brand_filter"
                  :options="base_brands"
                  name="brands_filter"
                  multiple

                ></b-form-checkbox-group>
              </b-card-text>
            </b-card>
              <!-- Fiyat filtresi -->
            <div class="my-3">
            <b-card bg-variant="primary" text-variant="white" header="Fiyat" class="text-left">
                <b-card-text>
                  <b-form-checkbox-group
                  v-model="price_filter"
                  :options="base_prices"
                  multiple
                  name="price_filter"
                ></b-form-checkbox-group>
                </b-card-text>
              </b-card>
              </div>
          </div>
        </div>
        <div class="col-10">
          <div v-for="(product,index) in results" :key="index">
            <div class="d-inline-flex float-left p-2">
              <ProductSliderItem :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class=" mx-auto p-5 ml-5 " >
        <h4 style="color: #015aac;">"{{ text }}" ile ilgili ürün bulunamadı.</h4>
    </div>
</div>
</template>

<script>
import _ from 'lodash'
import algoliasearch from 'algoliasearch'

const client = algoliasearch('J84FG4NWIH', '92723c331536229ca9c9f676d314a310');
const index = client.initIndex('dev_carrefour');

export default {
head:{
    title: 'Arama sonuçları | CarrefourSA'
  },
  async mounted() {
    if(this.text){

     await this.filter(this.text, '')
     this.base_brands = this.markalar
     this.base_prices = this.fiyatlar
     this.base_products = this.results
    }
  },
  data() {
		  return {
        base_brands: [],
        base_prices: [],
        results: [],
        brand_filter:[],
        price_filter:[],
        brand_query: '',
        price_query: '',
        query: ''
		  };
  },
  methods:{
    async filter(search, filters){
      let  res = [];

      await index.search(search,{
          filters: filters
      }).then(function(responses) {
          res = responses.hits
      }).catch((error) => { console.log("ERROR:" + error)});

      this.results = res
      console.log('Filtered Products: ' ,this.results)

    }
  },
  computed: {
    text(){
      return this.$route.params.text ?? ' '
    },
     markalar(){
      return this.results.map(p => p.brand)
    },
    priceFilter(){
        console.log('Min: ',  _.min(this.fiyatlar))
        console.log('Max: ',  _.max(this.fiyatlar))
    },
    fiyatlar(){
      return ['0 - 49,99', '50 - 99,99', '100 - 199,99']
    },

  },
  watch: {
    results(n,o){
      if(this.results.length <= 0)
        this.results = this.base_products
    },
      price_filter(newVal, oldVal){

        if(this.brand_query.length > 0){
           if(newVal[0] == "0 - 49,99")
           {
              this.query = this.brand_query + " AND price:0 TO 50"
              this.filter(this.text,this.query)
           }
           else if(newVal[0] == "50 - 99,99"){
              this.query = this.brand_query + " AND price:50 TO 100"
              this.filter(this.text,this.query)
           }
           else if(newVal[0] == "100 - 199,99"){
              this.query = this.brand_query + " AND price:100 TO 200"
              this.filter(this.text,this.query)
           }
        }
        else{
            if(newVal[0] == "0 - 49,99")
            {
               this.query = this.brand_query + " price:0 TO 50"
               this.filter(this.text,this.query)
            }
            else if(newVal[0] == "50 - 99,99"){
               this.query = this.brand_query + "  price:50 TO 100"
               this.filter(this.text,this.query)
            }
            else if(newVal[0] == "100 - 199,99"){
               this.query = this.brand_query + "  price:100 TO 200"
               this.filter(this.text,this.query)
           }
        }
      },

      brand_query(newVal, oldVal){
        this.query = this.brand_query + " " + this.price_query
        this.filter(this.text,this.query)
      },
      brand_filter(newVal, oldVal){
        this.brand_query = ""
        for(let index = 0; index < newVal.length; index++) {
          const element = newVal[index];

          if(index > 0)
            this.brand_query += " OR "

          this.brand_query += " brand: " + element

        }
      },

   },

}
</script>
