<template>
  <div class="container-fluid" >

    <div class="container">
      <div class="row">
        <!--soldaki menu-->
        <div class="hidden-xs menu-wrapper">
<nuxt-link to="cart">Cart componenti</nuxt-link>
        </div>
        <!--main slider-->
        <div class="col-xs-12 main-slider">
          <div class="">
            <div class="slider hp-carousel main-slider-loaded">
              <div class="owl-carousel hp-carousel-inner rotatingBanners owl-loaded owl-drag">
                <div class="owl-stage-outer desktop-carousel">
                  <Slider :images="sliderImages"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hp-banner-container">
        <Banners :items="bannerList"/>
      </div>
    </div>
    <!--
<footer class="main-footer w-100">
    </footer> -->
  </div>
</template>

<script>
import Header from '../components/Header'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Banners from '../components/Banners'
import { mapMutations } from 'vuex'

export default {
  computed: {
    sliderImages() {
      return this.$store.state.slider.images
    },
    categories(){
      return this.$store.state.categories.list
    },
    bannerList(){
      return this.$store.state.banners.list
    }
  },
  methods: {

  }
}
</script>

<style>
.hidden{
  visibility: hidden;
}
body{
  font-family: 'Nunito',Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #303030;
}

.container{
  width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;
}

.main-footer{
  margin: 50px 0;
  background: #015aac;
  color: #fff;
  font-weight: 300;
  min-height: 400px;
  display: block;
}

.hp-banner-container{
  margin-top: 20px;
}

.menu-wrapper {
  position: absolute !important;
  width: 240px;
  height: 550px;
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

.owl-carousel.owl-loaded {
    display: block;
}
.owl-carousel {
    display: none;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    z-index: 1;
}
.main-slider .slider .owl-carousel .owl-stage-outer.desktop-carousel {
    max-height: 355px;
}


</style>
