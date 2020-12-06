<template>
  <div class="container-fluid">
    <b-navbar class="justify-content-between" toggleable="lg">
      <b-navbar-brand href="/"><b-img class="img-responsive" :src="logo_url"></b-img></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav >
          <div :class="visibleOnlyOn">
            <Searchbar></Searchbar>
          </div>
        <b-navbar-nav>
          <b-nav-item href="#"><i class="icon-call-center"></i> <span class="d-none d-sm-flex"> Sizi Dinliyoruz</span></b-nav-item>
        </b-navbar-nav>

         <b-navbar-nav>
          <b-nav-item href="#"> <i class="icon-user-name"></i><span class="d-none d-sm-flex"> Giriş Yap | Üye Ol </span></b-nav-item>
        </b-navbar-nav>

          <b-nav-item-dropdown right>
            <template  #button-content>
              <i class="icon-top-mini-cart"></i>
              <a class="my-cart-text">Sepetim</a>
            </template>
            <div>
              <LoginModal/>
              <!--<b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
            </div>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

     <b-row class="d-sm-flex d-lg-none d-md-none">
        <Searchbar></Searchbar>
      </b-row>

  </div>
</template>


<script>
import Searchbar from './Searchbar'
import LoginModal from './LoginModal.vue'
export default {
  components: { Searchbar },
  props: { categories: Array  },
    data() {
        return {
            logo_url: "https://reimg-carrefour.mncdn.com/staticimage/carrefoursacom-logo.svg",
            loggedIn: false,

        }
    },
    computed: {
      testClass: function() {
        var result = [];
        return result;
      },
      hidden_on_all(){

      },
      visibleOnlyOn(resolution){

        /**
          hidden_on_all 	.d-none
          hidden_only_on_xs 	.d-none .d-sm-block
          hidden_only_on_sm 	.d-sm-none .d-md-block
          hidden_only_on_md 	.d-md-none .d-lg-block
          hidden_only_on_lg 	.d-lg-none .d-xl-block
          hidden_only_on_xl 	.d-xl-none

          visible_onall 	    .d-block
          visible_only_on_xs 	.d-block .d-sm-none
          visible_only_on_sm 	.d-none .d-sm-block .d-md-none
          visible_only_on_md 	.d-none .d-md-block .d-lg-none
          visible_only_on_lg 	.d-none .d-lg-block .d-xl-none
          visible_only_on_xl 	.d-none .d-xl-block
        */

        return ['d-none','d-sm-block'];
      }
    }
}
</script>

<style scoped>

  *{
    font-family: 'Nunito',Helvetica,Arial,sans-serif;
    color: var(--carrefour-blue);
  }


  span {
    line-height: 33px;
    margin-left: 10px;
    font-size: 14px;
    color: #005baa;
    font-weight: 800;
  }

  .my-cart-text {
    font-size: 14px;
    font-weight: 600;
  }
  .icon-call-center {
    background: url("https://reimg-carrefour.mncdn.com/staticimage/icons-sprite-4.svg?v=1.0") 0 -27px;
    width: 30px;
    height: 29px;
    margin: 2px 0 0 5px;
    float: left;
  }

 .icon-user-name {
    background: url("https://reimg-carrefour.mncdn.com/staticimage/icons-sprite-4.svg?v=1.0") -30px -27px;
    width: 29px;
    height: 29px;
    margin: 1px 8px 0 5px;
    float: left;
  }

  .icon-top-mini-cart {
    background: url("https://reimg-carrefour.mncdn.com/staticimage/icons-sprite-4.svg?v=1.0") -62px -27px;
    width: 30px;
    height: 29px;
    margin: 4px 0 0 5px;
    float: left;
  }
</style>
