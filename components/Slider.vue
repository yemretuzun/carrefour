<template>
  <div class="container">
    <div >
      <div class="d-flex justify-content-between">
        <b-icon-arrow-left class="icon "  @click="slide_left"/>
        <b-icon-arrow-right class="icon "  @click="slide_right"/>
      </div>
        <img :src="images[activeIndex]" class="w-75">
    </div>
    <div class="row">
      <div v-for="(img,index) in images" :key="index" class="d-inline-block">
        <b-icon-circle-fill v-if="index == activeIndex" class="altNoktalar" @click="changeIndex(index)"/>
        <b-icon-circle v-else class="altNoktalar"  @click="changeIndex(index)"/>
      </div>
    </div>
  </div>
</template>

<script>
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
        this.activeIndex++;
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
    }
  }
</script>

<style scoped>
  .icon{
    cursor: pointer;
    color:#000;
    top: 50% !important;
    display: table;
    width: 60px;
    height: 125px;
    text-align: center;
    display: inline;
  }

  .altNoktalar{
    cursor: pointer;
    margin: 5px;
  }
</style>
