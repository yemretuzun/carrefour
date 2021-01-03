<template>
  <div>

    <div class="bg-white">
      <Header/>
    </div>

    <div id="sticky_menu" class="row d-none d-lg-block sticky-top m-0 p-0" style="height:45px;" carrefour-bg >
      <div class="container">
        <div class="position-absolute sticky-top" style="z-index:9999 !important;">
          <CategoryMenu/>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="container">
        <Nuxt class="nuxt"/>
      </div>
    </div>

    <Footer />

  </div>
</template>

<script>
import Header from '../components/Header'
import CategoryMenu from '../components/CategoryMenu'
import Footer from '../components/Footer'
import { mapMutations } from 'vuex'
import $ from 'jquery'

export default {
  data() {
        return {
        }
  },
  head () {
      return {
          bodyAttrs: {
              class: 'bg'
          }
      }
    },

}
</script>


<style>


.bg{
  background-color: #f1f1f1;
}

.icon-map-marker {
    background: url("https://reimg-carrefour.mncdn.com/staticimage/icons-sprite-4.svg?v=1.0") -92px -27px;
    width: 18px;
    height: 22px;
    margin-top: 12px;
}

Headerhtml {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
