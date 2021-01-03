<template>
	<div class="container-fluid text-left pb-5">
    <!-- image -->
    <div class="mb-5">
      <img class="img-responsive" :src="resize2(product.images[0])">
    </div>
    <!-- marka -->
    <div class="brand mt-2">
      <span >Marka: <a class="text-uppercase text-decoration-none">{{product.brand}}</a></span>
    </div>
    <!-- title -->
    <div class="title mt-2">
      <h4> {{product.title}} </h4>
    </div>
    <div class="row text-left align-items-center">
      <b-form-rating
        :value="product.ratings"
        readonly
        precision="3"
        :class="'ml-0 mr-auto'"
        no-border
        inline
      ></b-form-rating>
      <div>
        <span>(0)</span> <a href="#">Yorum Yazın</a>
      </div>
    <!-- fiyat -->
    <div class="mx-auto">
      <Price
        :price="product.price"
        :discount="product.discount"
        :discounted_price="product.discounted_price"/>
    </div>
    <!-- quantity -->
    <div class="mt-3 w-75 mx-auto">
      <QuantitySelector
                      @increased="quantityIncrement"
                      @decreased="quantityDecrement"/>

    </div>
    <!-- sepete ekle -->
    <div class="mx-auto mt-3 w-100">
       <button class="btn btn-sepet w-100 btn-block" carrefour>Sepete Ekle</button>
    </div>

    </div>

	</div>
</template>

<script>
import Ratings from './Ratings'
import Comment from './Comment'
import Slider from './Slider'
import Price from './Price'
import QuantitySelector from './QuantitySelector'


export default {
  props: {
    product: Object
  },
    data() {
        return {
          quantity: 1,
          selectedIndex: 0,
          tabIndex: 0
        }
    },
    methods:{
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['px-3','py-2','border-primary','border-top','bg-light', 'border', 'border-bottom-0']
        } else {
          return ['px-3','py-2','bg-light']
        }
      },
      setSelectedIndex(index){
        this.selectedIndex = index
      },
      quantityIncrement()  {
        this.quantity++;
      },
      quantityDecrement()  {
          this.quantity--;
      },
      addToCart() {
		  },
      resize(img){
        try{
          try{
            const resizedImg = img.replace(/\/96/g,'/426')
            return resizedImg
          }catch (e){
            try{
              const resizedImg = img.replace(/\/600/g,'/426')
              return resizedImg
            }catch (e){};
          };
          return resizedImg
        }catch (e) { return img }

        },
        resize2(img){
        try{
          try{
            const resizedImg = img.replace(/\/96/g,'/256')
            return resizedImg
          }catch (e){
            try{
              const resizedImg = img.replace(/\/600/g,'/256')
              return resizedImg
            }catch (e){};
          };
          return resizedImg
        }catch (e) { return img }

        }
    },
    computed: {
    }
}
</script>

<style scoped>

  .owl-item{
     width: 80px !important;
  }
  .container-fluid{
    background: #fff;
  }

  .big-img{
    max-height: 426px;
  }

  .brand span{
    color: #82a4c0;
    font-size: 14px;
  }
  .brand span a {
    color: #005baa;
    font-family: 'Nunito';
    font-weight: 600;
  }

  .title h4 {
    font-family: 'Nunito';
    font-weight: 600;
    color: #303030;
    margin: 0;
    padding: 0;
}

.price span {
    display: inline-block;
    font-size: 34px;
    color: #005baa;
    line-height: 1;
    font-family: 'Nunito';
    font-weight: 600;
}
.indirim{
    background: #f8e71c;
    width: 3.6875rem;
    height: 3.6875rem;
    text-align: center;
    border-radius: 50%;
    font-weight: normal;
    font-size: 1.375rem;
    line-height: 3.8125rem;
    color: #303030;
}
.indirim span{
    font-size: 28px;
}
.priceLineThrough {
    font-size: 22px;
    display: block;
    color: #878787 !important;
    line-height: 1;
    font-family: 'Nunito';
    font-weight: 600;
    text-decoration: line-through;
}

  .icon-plus{
    background-color: #f0f8ff !important;
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
  .icon{
   width: 20px;
    height: 20px;
  }

  .slider-area {
    transform: translate3d(0, 0, 0);
    transition: all .4s ease 0s;
    padding: 0;
    position: relative;
}

.btn-sepet {
    text-transform: none;
    font-size: 22px;
    height: 58px;
    line-height: 30px;
    display: block;
    border-radius: 6px;
}

.tabbody{
    background: #f6f9fc;
    color: #465e72;
    border-radius: 6px;
    padding: 80px 60px;
}


</style>
