<template>
<div>
  <div class="ground-effect"></div>
    <div id="categoriesTitle" @mouseover="mouseOver" @mouseleave="mouseLeave" class="m-auto">
      <div class="link-name">
        <b-icon-list class="menu-hamburger-icon d-inline-block pull-left " />
        <div class="d-inline ">
          <span class="link-name">Kategoriler</span>
        </div>
          <b-icon-chevron-down class="glyphicon-menu-down d-inline-block ml-5"/>
      </div>
      <div v-if="showList">
          <ul v-for="(category,index) in categories" :key="index" class="text-left" style="list-style: none;">
            <b-dropdown-divider v-if="index != 0"/>
            <div class="row">
              <div>
                <img :src="category.icon" class="d-inline" width="26" height="26"/>
              </div>
              <div>
                <b-dropdown no-caret dropright :text="category.mainCategory" variant="outlined" class="link-name d-inline-block">
                <div>
                  <div v-for="(sub, subIndex) in category.subCategories" :key="subIndex">
                    <b-dropdown-item to="#">{{sub}}</b-dropdown-item>
                  </div>
                </div>
                </b-dropdown>
              </div>

            </div>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Category from './Category.vue'
  export default {
  components: { Category },
    props: { categories: Array },
    data() {
      return {
        showList: false,
        showSubs: false,
      }
    },
    methods:{
      mouseOver(){
        this.showList = true;
      },
      mouseLeave(){
        this.showList = false;
      },
      mouseOverSub(){
        this.showSubs = true;
      },
      mouseLeaveSub(){
        this.showSubs = false;
      }
    },
  }
</script>


<style scoped>

  *{
    font-family: 'Nunito',Helvetica,Arial,sans-serif;
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
    margin: 10px 0 0 5px;
    font-size: 18px;
  }

  .link-name {
    font-weight: 800;
    margin-left: 10px;
    font-size: 16px;
    color: #005baa !important;
    line-height: 40px !important;
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


</style>
