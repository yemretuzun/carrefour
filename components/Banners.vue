<template>
  <div class="container-fluid">
    <div class="row">
        <div v-for="(item,index) in items" :key="index">
          <nuxt-link :to="products + item.to" class="col-6">
            <img :src="item.src"/>
          </nuxt-link>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    items: Array
  },
    data() {
        return {
           products:"products/"
        }
    },
    methods:{

    },
    computed: {

    },
}
</script>

<style scoped>

</style>
