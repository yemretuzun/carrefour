<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="d-none d-lg-inline" style="width: 240px !important"></div>
        <div class="d-inline col">
          <div class="row">
            <Slider :images="sliderImages" />
          </div>
          <div class="hp-banner-container">
            <Banners :items="bannerList" />
          </div>
        </div>
      </div>
      <div>
        <div v-for="(p, i) in productSlider" :key="i">
          <ProductsSlider
            :slider_id="i"
            :categoryName="p.categoryName"
            :categoryImage="p.categoryImage"
            :products="pProducts[i]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Banners from "../components/Banners";
import ProductsSlider from "../components/ProductsSlider";
import CategoryMenu from "../components/CategoryMenu";

import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  head: {
    title: "Online Market | CarrefourSA",
  },
  data() {
    return {
      bannerList: [],
    };
  },
  asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    return {
      currentUser: {},
    };
  },
  created() {
    this.$store.dispatch("banners/getAll").then((x) => {
      this.bannerList = x;
    });
  },
  mounted() {
    this.currentUser = this.$store.state.user.currentUser;
  },
  updated() {
    this.$store.dispatch("user/getCurrentUser").then((x) => {
      this.currentUser = x;
    });
  },
  computed: {
    sliderImages() {
      return this.$store.state.slider.images;
    },
    products() {
      return this.$store.state.products.list;
    },
    productSlider() {
      return this.$store.state.productSlider.list;
    },
    pProducts() {
      const xproducts = [];

      this.productSlider.forEach((pS) => {
        const yproducts = [];

        pS.products.forEach((p) => {
          yproducts.push(this.products.find((x) => x.id === p.id));
        });

        xproducts.push(yproducts);
      });

      return xproducts;
    },
  },
  methods: {

  },
};
</script>

<style>
.hidden {
  visibility: hidden;
}
body {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #303030;
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 5px;
  padding-right: 5px;
}

.hp-banner-container {
  margin-top: 20px;
}

.menu-wrapper {
  position: absolute !important;
  margin-left: 10px;
  float: left;
}
.main-slider {
  margin-top: 10px !important;
  display: inline;
  float: right;
}
.main-slider .slider {
  min-height: 371px;
}
</style>
