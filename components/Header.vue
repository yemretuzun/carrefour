<template>
  <div class="container py-3">
    <!--
     <div class="corousal d-flex align-content-around w-100 mt-0 float-right" style="z-index:999;margin-right:0 !important; font:7px;">
        <div class="font-weight-light text-danger">
          <span>Ne Lazımsa</span> <span>CarrefourSA</span>
          <span>Kataloglar</span> <span>Kurumsal</span> <span> 444 1000</span>
        </div>
      </div> -->

    <nav class="navbar justify-content-between">
      <div class="nav-item">
        <div class="row">
          <!-- sadece small da aktif menü -->
          <div class="d-sm-none">
            <Sidebar />
          </div>
          <!-- logo -->
          <nuxt-link to="/">
            <div class="m-auto">
              <b-img class="img-responsive" :src="logo_url"></b-img>
            </div>
          </nuxt-link>
        </div>
      </div>
      <!-- Searchbar -->
      <div class="nav-item d-none d-lg-flex">
        <Searchbar />
      </div>
      <!-- Call-center -->
      <div class="nav-item">
        <nuxt-link to="sizidinliyoruz" class="text-decoration-none">
          <div>
            <i class="icon icon-call-center"></i>
            <span class="d-none d-lg-flex"> Sizi Dinliyoruz </span>
          </div>
        </nuxt-link>
      </div>
      <!-- giriş -->
      <div class="nav-item">
        <div v-if="currentUser.email != ''">
          <nuxt-link to="myprofile">
            <div>
              <span class="d-none d-lg-flex mb-n2"> Hoş Geldiniz, </span>
              <span class="d-none d-lg-flex mt-n1"> {{ currentUser.email }} </span>

            </div>
          </nuxt-link>
        </div>
        <div v-else>
          <LoginModal>
            <i class="icon icon-user-name"></i>
            <span class="d-none d-lg-flex">
               Giriş Yap | Üye Ol
            </span>
          </LoginModal>
        </div>
      </div>
      <!-- sepet -->
      <div class="nav-item" @click="toggleModal">
        <div class="header-cart">
          <LoginModal v-if="currentUser.email == ''">
            <a
              class="mini-cart-link js-mini-cart-link"
              data-mini-cart-url="/tr/cart/rollover/MiniCart"
              data-mini-cart-refresh-url="/tr/cart/miniCart/SUBTOTAL"
              data-mini-cart-name="Cart"
              data-mini-cart-empty-name="Empty Cart"
            >
              <div class="icon mini-cart-icon float-left">
                <input type="hidden" id="miniCartStore" name="miniCartStore" value="" />
                <span class="icon-top-mini-cart"></span>
                <span class="button__badge text-center">0</span>
              </div>
              <div class="d-none d-lg-flex mini-cart-price float-left">
                <div>
                  <div class="">
                    <span class="my-cart-text d-none d-lg-block">Sepetim</span>
                  </div>
                  <div class="">
                    <span class="d-none d-lg-block">0,00 TL</span>
                  </div>
                </div>
              </div>
              <i
                class="icon icon-cart-arrow-down hidden-xs hidden-sm d-none d-lg-flex float-left"
              ></i>
            </a>
            <div class="csa-mini-cart-container"></div>
          </LoginModal>

          <div v-else>
            <nuxt-link to="cart">
              <a
              class="mini-cart-link js-mini-cart-link"
              data-mini-cart-url="/tr/cart/rollover/MiniCart"
              data-mini-cart-refresh-url="/tr/cart/miniCart/SUBTOTAL"
              data-mini-cart-name="Cart"
              data-mini-cart-empty-name="Empty Cart"
            >
              <div class="icon mini-cart-icon float-left">
                <input type="hidden" id="miniCartStore" name="miniCartStore" value="" />
                <span class="icon-top-mini-cart"></span>
                <span class="button__badge text-center"> {{ cartItemsCount }}</span>
              </div>
              <div class="d-none d-lg-flex mini-cart-price float-left">
                <div>
                  <div class="">
                    <span class="my-cart-text d-none d-lg-block">Sepetim</span>
                  </div>
                  <div class="">
                    <span class="d-none d-lg-block">{{ cartTotal }} TL</span>
                  </div>
                </div>
              </div>
              <i
                class="icon icon-cart-arrow-down hidden-xs hidden-sm d-none d-lg-flex float-left"
              ></i>
            </a>
            </nuxt-link>
            <div class="csa-mini-cart-container"></div>
          </div>
        </div>
      </div>
    </nav>
    <b-row class="d-md-flex d-lg-none p-3 responsive-searchbar">
      <Searchbar class="w-100"></Searchbar>
    </b-row>
  </div>
</template>

<script>
import Searchbar from "./Searchbar";
import LoginModal from "./LoginModal.vue";
import Categories from "./Categories.vue";
import CategoryMenu from "./CategoryMenu.vue";
import Sidebar from "./Sidebar.vue";
import $ from "jquery";

export default {
  components: { Searchbar },
  props: { categories: Array },
  data() {
    return {
      logo_url: "https://reimg-carrefour.mncdn.com/staticimage/carrefoursacom-logo.svg",
      loggedIn: false,
      showModal: false,
    };
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
  computed: {
    cartTotal() {
      let total = 0
      this.$store.state.cart.mycart.cart.forEach(p => total += p.price * p.quantity)
      return total.toFixed(2);
    },
    cartItemsCount() {
      return this.$store.state.cart.mycart.cart.length;
    },
    currentUser() {
      return this.$store.state.user.currentUser;
    },
  },
  mounted() {
    if (this.$screen.breakpoint === "xs") {
      $(".icon").addClass("smaller");
      $(".img-responsive").addClass("logo-max");
    } else {
      $(".icon").removeClass("smaller");
      $(".img-responsive").removeClass("logo-max");
    }
  },
};
</script>

<style scoped>
* {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  color: var(--carrefour-blue);
}

/* küçük ekran boyutlarında kullanılır */
.smaller {
  transform: scale(0.75);
  margin-left: -10px;
}
.logo-max {
  max-width: 170px !important;
  margin-right: 3px;
}

.responsive-searchbar {
  background-color: #f0f8ff;
}
.nav-item {
  cursor: pointer;
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
  font-weight: 600 !important;
}
.icon-call-center {
  background: url("https://reimg-carrefour.mncdn.com/staticimage/icons-sprite-4.svg?v=1.0")
    0 -27px;
  width: 30px;
  height: 29px;
  margin: 2px 8px 0 5px;
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

.header-cart {
  position: relative;
  min-height: 34px;
  margin-top: 5px;
}

.mini-cart-link {
  float: right !important;
  display: block;
  line-height: 34px;
  color: #303030;
  white-space: nowrap;
  position: relative;
}

.mini-cart-price {
  padding: 0 1em;
  display: block;
  float: left;
  font-size: 16px;
}
.mini-cart-price span {
  display: block;
  line-height: 18px;
  color: #005baa;
  font-size: 14px;
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  font-weight: 800;
}

.icon-cart-arrow-down {
  background: url("https://reimg-carrefour.mncdn.com/staticimage/icons-sprite-4.svg?v=1.0") -532px -3px;
  width: 15px;
  height: 12px;
  display: inline-block;
  margin: 0;
}

.csa-mini-cart-container {
  top: 100% !important;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 4px;
  position: absolute;
  right: 0;
  z-index: 10000;
  border: 1px solid #ddd;
}

.header-cart .mini-cart-link .mini-cart-icon {
  width: auto;
}

.header-cart .mini-cart-link .mini-cart-icon .button__badge {
  top: 0;
  left: 14px;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  line-height: 17px;
  font-size: 11px;
  padding: 1px 0;
  margin-top: -3px;
  margin-left: 5px;
  position: absolute;
  color: white;
  background-color: #ff0000;
  float: left;
}
</style>
