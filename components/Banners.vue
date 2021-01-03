<template>
  <div class="container-fluid">
    <div class="row">
        <div v-for="(item,index) in items" :key="index" class="col-12 col-sm-6">
          <nuxt-link :to="'products/' + item.to">
            <img class="img-fluid" :src="item.src"/>
          </nuxt-link>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  props: { items: Array },
}
</script>

<style scoped>
img{
  border-radius: 5px;
  margin: 5px;
}
</style>
