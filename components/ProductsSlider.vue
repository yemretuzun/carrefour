<template>
  <div>
    <div class="my-5">
      <!-- kategori başlıgı -->
      <div class="">
        <div class="headline" carrefour-text>
          <span class="ml-2 mr-auto mb-1 float-left">{{ categoryName }}</span>
          <span
            class="mr-0 ml-auto float-right d-md-block d-lg-none text-decoration-none"
            style="font-size: 14px"
            carrefour-text
            >Ürünleri Göster</span
          >
        </div>
      </div>
      <div class="container-fluid mt-3 row flex-nowrap">
        <!-- içerigi gör, resim -->
        <div class="float-left">
          <div
            id="_img"
            class="container d-none d-lg-inline-block"
            style="height: 420px; max-height: 420px !important"
          >
            <img class="img-fluid" :src="categoryImage" style="border-radius: 5px" />
            <p class="image-text"></p>
            <span class="btn img-btn">İçeriği Gör</span>
          </div>
        </div>
        <div
          :id="'slider-area-' + this.slider_id"
          :class="'container-fluid clearfix slider-area overflow-auto d-inline-flex carousel slide'"
        >
          <!--ürünler-->
          <div v-for="(product, index) in products" :key="index">
            <ProductSliderItem :product="product" />
          </div>
        </div>
        <div class="position-absolute d-none">
          <a
            class="icon carousel-control-prev icon-left position-sticky"
            @click="scroll_left"
          >
            <span class="icon carousel-control-prev-icon">
              <b-icon-chevron-left></b-icon-chevron-left>
            </span>
          </a>
          <a
            class="icon carousel-control-next icon-right position-sticky"
            @click="scroll_right"
          >
            <span class="icon carousel-control-next-icon">
              <b-icon-chevron-right></b-icon-chevron-right>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSliderItem from "./ProductSliderItem.vue";
import $ from "jquery";

export default {
  props: {
    slider_id: Number,
    products: Array,
    categoryName: String,
    categoryImage: String,
  },
  data() {
    return {};
  },
  methods: {
    scroll_left: function () {
      $("#slider-area-" + this.slider_id)
        .get(0)
        .scrollIntoView();
    },
    scroll_right: function () {
      $("#slider-area-" + this.slider_id).scrollLeft(350);
    },
  },
  computed: {},
};
</script>
<style scoped>
#_img {
  height: 410px;
  width: 410px;
}

#_img img {
  height: 410px;
}

.headline {
  color: #242424;
  font-size: 1.1875rem;
  font-weight: 800;
}

.image-text {
  margin: 0 auto;
  text-align: center;
  position: relative;
  top: -80px;
  color: #f1f1f1;
  text-shadow: 1px 1px 5px black;
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  font-weight: 700;
}

.img-btn {
  display: table;
  margin: 0 auto;
  text-align: center;
  position: relative;
  top: -70px;
  z-index: 999;
  background-color: #ffffff;
  color: #005baa;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}

.slider-area {
  transform: translate3d(0, 0, 0);
  transition: all 0.4s ease 0s;
  padding: 0;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.slider-area::-webkit-scrollbar {
  display: none;
}

.icon {
  background: #bbdbf8;
}
.icon:hover {
  cursor: pointer;
  background: #bbdbf8;
}

.icon-right {
  height: 9.6875em;
  width: 4.6875em;
  right: 0 !important;
  left: auto !important;
  border-radius: 150px 0 0 150px;
  margin-top: auto;
  margin-bottom: auto;
}

.icon-left {
  height: 9.6875em;
  width: 4.6875em;
  right: auto !important;
  left: 0 !important;
  border-radius: 0 150px 150px 0;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
