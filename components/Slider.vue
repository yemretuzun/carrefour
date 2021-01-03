<template>
  <div class="container carousel slide m-4">
      <div class="position-relative carousel-inner">
        <!-- img -->
        <div class="">
          <img id="slider-img" :src="images[activeIndex]" :class="'img-fluid'">
        </div>
        <!-- Left and right controls -->
        <a class="icon carousel-control-prev icon-left" @click="slide_left">
          <span class="icon carousel-control-prev-icon"></span>
        </a>
        <a class="icon carousel-control-next icon-right " @click="slide_right">
          <span class="icon carousel-control-next-icon"></span>
        </a>
      </div>

    <!-- altNoktalar -->
    <div :class="['carousel-indicators', $screen.breakpoint === 'xs' ? 'mb-n4' : ' ']">
      <div v-for="(img,index) in images" :key="index" class="d-inline-block">
        <a v-if="index == activeIndex" class="altNoktalar-aktif" @click="changeIndex(index)"></a>
        <a v-else class="altNoktalar"  @click="changeIndex(index)"></a>
      </div>
    </div>
  </div>

</template>


<script>
import $ from 'jquery'

  export default {
    props: {
       images: Array
    },
	  data() {
		  return {
        activeIndex: 0
		  };
	  },
    methods: {
      slide_right(){
      if (this.activeIndex < this.images.length - 1)
        {
          this.activeIndex++;
        }
      else
        this.activeIndex = 0;

      },
      slide_left(){
        if(this.activeIndex != 0)
          this.activeIndex--;
        else
          this.activeIndex = this.images.length - 1;

      },
      changeIndex(index){
        this.activeIndex = index;
      }
    },
    created: function () {
        setInterval(this.slide_right, 2500)
    },
    mounted(){
        if(this.$screen.breakpoint === "xs"){
          $('.carousel-indicators').addClass('smaller')
          $('.icon').addClass('icon-smaller')
        }else{
          $('.carousel-indicators').removeClass('smaller')
          $('.icon').removeClass('icon-smaller')
        }

        $('#slider-img').mouseover(function (){
          $('.icon').addClass('icon-hover')
        })

        $('#slider-img').mouseout(function (){
          $('.icon').removeClass('icon-hover')
        })
    },
    updated(){
        if(this.$screen.breakpoint === "xs"){
          $('.carousel-indicators').addClass('smaller')
          $('.icon').addClass('icon-smaller')
        }else{
          $('.carousel-indicators').removeClass('smaller')
          $('.icon').removeClass('icon-smaller')
        }


    }
  }
</script>

<style scoped>

  #slider-img{
    border-radius: 5px;
    cursor: pointer;

  }

  .smaller{
    transform: scale(.75) !important;
  }

  .icon-smaller{
    background: transparent !important;
  }

  .icon:hover{
    cursor: pointer;
    background: #bbdbf8;
  }

  .icon-hover{
    cursor: pointer;
    background: #bbdbf8;
  }

  .icon-right{
    height: 9.6875em;
    width: 4.6875em;
    right: 0 !important;
    left:auto !important;
    border-radius: 150px 0 0 150px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .icon-left{
    height: 9.6875em;
    width: 4.6875em;
    right: auto !important;
    left:0 !important;
    border-radius:0 150px 150px 0;
    margin-top: auto;
    margin-bottom: auto;
  }

  .altNoktalar{
    cursor: pointer;
    width: 0.9375rem;
    height: 0.9375rem;
    background-color: #bbdbf8;
    display: inline-block;
    border: 2px solid #bbdbf8;
    border-radius: 8px;
    margin-left: 5px;
  }
  .altNoktalar:hover{
    background-color: var(--carrefour-blue);
  }
  .altNoktalar-aktif{
    cursor: pointer;
    width: 0.9375rem;
    height: 0.9375rem;
    background-color: var(--carrefour-blue);
    display: inline-block;
    border: 2px solid #bbdbf8;
    border-radius: 8px;
    margin-left: 5px;
  }
</style>
