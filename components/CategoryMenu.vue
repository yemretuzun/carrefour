<template>
<div id="top" style="width: 240px  !important;;">
  <div class="ground-effect d-none d-sm-flex"></div>
    <div id="categoriesTitle" @click="mouseOver" @mouseover="mouseOver" @mouseleave="mouseLeave" class="m-auto">
      <!-- header -->
      <div class="link-name">
        <b-icon-list class="menu-hamburger-icon d-inline-block pull-left align-middle"/>
        <div class="d-none d-sm-inline">
          <span class="link-name"> Kategoriler</span>
        </div>
          <b-icon-chevron-down class="glyphicon-menu-down d-none d-sm-inline ml-5"/>
      </div>
      <!-- content -->
      <div v-if="showList" class="position-absolute bg-white w-100" >
          <ul v-for="(category,index) in categories" :key="index" class="text-left" style="list-style: none;" >
            <div class="row"
                 @mouseover="mouseOverMain(index)"
                 @mouseleave="mouseLeaveMain(index)">
              <!-- kategori iconu -->
              <div>
                <img :src="category.icon"
                      class="d-inline mt-2"
                      width="26" height="26"/>
              </div>
              <!-- kategori text -->
              <div>
                <b-dropdown no-caret dropright
                  :text="category.mainCategory"
                  variant="outlined"
                  class="link-name d-inline-block">
                </b-dropdown>
              </div>
            </div>
          </ul>

      <div v-if="showList" class="kampanyalar position-absolute w-100">
          <ul class="text-left " style="list-style: none;" >
            <div class="row">
              <!-- kategori iconu -->
              <div>
                <button
                      class="btn d-inline mt-2 kampanya-icon"
                      width="26" height="26"/>
              </div>
              <!-- kategori text -->
              <div>
                <b-dropdown no-caret
                  :text="'Kampanyalar'"
                  variant="outlined"
                  block
                  toggle-class="link-name text-light">
                </b-dropdown>
              </div>
            </div>
          </ul>
      </div>

      </div>
    </div>

<div v-if="showSub"
      class="position-absolute bg-white border border-primary"
      style="margin-left: 240px;"
      @mouseleave="mouseLeaveSub"
      >
      <div v-for="(category,index) in subCategories" :key="index" class="text-left p-2" >
            <div class="">
              <nuxt-link :to="category.to">
                  <b-dropdown no-caret
                    :text="category.title"
                    variant="outlined"
                    @click="() => {}"
                    class="link-name">
                  </b-dropdown>
              </nuxt-link>
            </div>
      </div>
</div>

  </div>
</template>

<script>
import Category from './Category.vue'
import debounce from 'lodash/debounce'
import { mapMutations } from 'vuex'
import $ from 'jquery'


export default {
    components: { Category },
    props: {  },
    created(){
      this.$store.dispatch('categories/getAll').then((x) => this.categories = x )
    },
    data() {
      return {
        selectedIndex: 0,
        showList: true,
        showSub: false,
        categories: [],
        subCategories: []
      }
    },
    methods:{
      isSticky(){
        return $('#top').offset().top > 98
      },
      mouseOver(){
        this.showList = true;
      },
      mouseLeave(){
        if(!this.isSticky()){
          if ($nuxt.$route.path === "/")
            this.showList = true
          else{
            this.showList = false
          }
        }else{
          this.showList = false
        }
      },
      mouseOverMain(mainIndex){
        this.selectedIndex = mainIndex;
        this.subCategories = this.categories[this.selectedIndex].subCategories
        this.showSub = true;
      },
      mouseLeaveMain(mainIndex){
        this.selectedIndex = mainIndex;
        //this.subCategories = []
        //this.showSub = false;
      },
      mouseLeaveSub(){
        this.showSub = false;
        this.showList = false
        this.subCategories = []
      },
      handleScroll(){
        if($('#top').offset().top <= 98){
          if ($nuxt.$route.path === "/")
            this.showList = true
          else{
            this.showList = false
        }
        }
        else{
          this.showList = !this.isSticky()
        }

      }

    },
    computed: {
    },
    beforeMount() {
      this.handleDebouncedScroll = debounce(this.handleScroll, 5);
      window.addEventListener('scroll', this.handleDebouncedScroll);
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleDebouncedScroll);
    },


}
</script>


<style scoped>

  *{
    font-family: 'Nunito',Helvetica,Arial,sans-serif;
  }

  .kampanyalar{
    border-radius:0 0 7px 7px;
    background: var(--carrefour-blue);
  }

  #subs{
    margin-left:240px;
    width:240px;
    background: #fff;

  }
  #categoriesTitle{
    background: #fff;
    position: relative;
    top: -12px;
  }
  #categoriesTitle:hover{
    cursor: pointer;
  }
  .drop{
    position:absolute;
    padding:10px;
    background:red;
  }

  .menu-hamburger-icon {
    margin: 0px 0 0 5px;
    font-size: 18px;
    background-image: url(https://reimg-carrefour.mncdn.com/staticimage/icons-sprite-4.svg?v=1.0);
    width: 25px;
    height: 26px;
  }

  .link-name {
    font-weight: 800;
    margin-left: 10px;
    font-size: 16px;
    color: #005baa !important;
    line-height: 45px !important;
    list-style: none;
  }

.ground-effect {
    position: relative;
    background-color: #bbdbf8;
    height: 12px;
    top: -6px;
    border-radius: 12px;
}

.glyphicon-menu-down {
    margin: 10px 5px 0 0;
    font-size: 18px;
    float: right;
}

.kampanya-icon{
    background-image: url(https://reimg-carrefour.mncdn.com/staticimage/icons-sprite-4.svg?v=1.0);
    width: 25px;
    height: 26px;
    margin-bottom: 3px;
    background-position: -287px 88px;
}

</style>
