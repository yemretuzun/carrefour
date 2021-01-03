<template>
  <div class="border border-primary rounded-pill search-div">
      <div class="row">
          <div class="mr-auto ml-0 mt-auto mb-auto">
            <b-icon-search></b-icon-search>
          </div>
          <div class="m-auto col">
            <b-input v-model="text" class="search-input border-0 m-auto" :placeholder="placeholder"></b-input>
          </div>
          <div class="ml-auto mr-0">
            <button class="btn btn-primary rounded-pill"
                    type="submit"
                    carrefour-bg
                    @click="search"
                    >Ara</button>
          </div>
      </div>
  </div>
</template>


<script>
export default {
    data() {
        return {
          placeholder:"Ürün Arayın...",
          text: ""
        }
    },
    methods: {
      search(){ this.$router.push('/search/' + this.text); },
      searchKey(){ alert(this.text) },

    }

}
</script>

<style scoped>
*{
  font-family: 'Nunito',sans-serif;
}
.search-div{
  background: #fff;
  padding: 5px 25px;
}

.search-input{
  border-radius: 2px;
  overflow: hidden;
  color: var(--carrefour-blue);
}
.search-input::placeholder{
  color: var(--carrefour-blue);
}

.search-input:focus{
  box-shadow: none;
}

</style>
