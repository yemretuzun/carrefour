<template>
  <div class="align-middle my-auto">
    <div class="mr-1"  v-b-toggle.sidebar-border>
      <b-icon-list></b-icon-list>
    </div>
    <b-sidebar id="sidebar-border" class="" sidebar-class="" backdrop no-header no-close-on-backdrop>
      <template #default="{ hide }">
        <div class="p-2 h-100">
          <div class="row">
            <!-- menüyü kapat -->
            <button @click="hide" type="button" class="close ml-3 btn" aria-label="Close" >
              <b-icon-x scale="1.4"></b-icon-x>
            </button>
            <b-img class="img-responsive ml-2" src="https://reimg-carrefour.mncdn.com/staticimage/carrefoursacom-logo.svg"></b-img>
          </div>
          <ul class="m-0 pl-2 w-100 mt-2 d-block">
            <div v-for="(c,index) in categories" :key="index">
              <div id="mainCategory" :class="showMain ? 'd-block':'d-none'">
                <div @click="mainClick(index)">
                      <div v-if="index !== 0">
                      <hr/>
                    </div>
                    <li class="pt-1">
                      <img :src="c.icon" width="18"/>
                      {{c.mainCategory}}
                    </li>
                </div>
              </div>
            </div>
            <div id="subCategory" :class="!showMain ? 'd-block':'d-none'">
              <!-- ana menüye dön -->
              <div class="row my-3" @click="maineDon" carrefour-text>
                <b-icon-chevron-left class="ml-2"></b-icon-chevron-left>
                <!-- kategori sayfasina yönlendir -->
                <nuxt-link :to="'/category/'+categories[subIndex].to" class="mx-auto">
                  <span>{{categories[subIndex].mainCategory}}</span>
                </nuxt-link>
              </div>
              <!-- tümünü göster -->
              <div class="row mt-2 mb-3" carrefour-text>
                <nuxt-link to="/products" class="ml-2">
                  <span> Tümünü göster </span>
                </nuxt-link>
                <b-icon-chevron-right class="ml-2"></b-icon-chevron-right>
              </div>
              <!-- alt kategoriler -->
              <div v-for="(sub,i) in categories[subIndex].subCategories" :key="i">
                <div v-if="i !== 0">
                  <hr/>
                </div>
                <nuxt-link :to="'/category/' + sub.to">
                  <li > {{sub.title}} </li>
                </nuxt-link>
              </div>
            </div>
          </ul>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>


<script>
import { mapMutations } from 'vuex'
import $ from 'jquery'

export default {
  props: {

  },
    data() {
        return {
          subIndex: 0,
          showMain: true,
        }
    },
    methods:{
      mainClick(index){
        this.subIndex = index;
        this.showMain = false;
        $('.h-100').addClass('bg-sub')
        $('.h-100').removeClass('bg-main')
      },
      maineDon(){
        this.showMain = true;
        $('.h-100').addClass('bg-main')
        $('.h-100').removeClass('bg-sub')
      }
    },
    computed: {
      categories(){
        return this.$store.state.categories.list
      }
    },
    watch:{

    }
}
</script>

<style scoped>

*{
  font-size:0.9rem;
}

ul li{
  list-style-type: none;
  display: block;
  padding: 5px;
}

ul li:active{
  background: var(--carrefour-blue);
  color: #fff;
}

.bg-main{
  background: #fff;
}

.bg-sub{
  background: #f0f8ff;
}

.img-responsive{
  max-height: 24px;
}

.close{
  color:var(--carrefour-blue);
}

</style>
