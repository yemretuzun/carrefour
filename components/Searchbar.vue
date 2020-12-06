<template>
  <div class="border border-primary rounded-pill search-div">
      <b-row>
          <div class="search-icon"><b-icon-search ></b-icon-search></div>
          <div><b-input class="search-input border-0" :placeholder="placeholder"></b-input></div>
          <div><button  class="btn btn-primary rounded-pill" carrefour-bg>Ara</button></div>
      </b-row>
  </div>
</template>


<script>
export default {
    data() {
        return {
          placeholder:"Ürün Arayın..."
        }
    }
}
</script>

<style scoped>
*{
  font-family: 'Nunito',sans-serif;
}
.search-div{
  padding: 5px 25px;
}
.search-icon{
  margin: auto;
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
