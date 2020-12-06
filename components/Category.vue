<template>
  <!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" aria-haspopup="true" aria-expanded="false">

  </button>
  <div v-if="subCategories.length > 0">
     asdads
  </div>
  <div>
    <b-dropdown id="dropdown-dropright" dropright :text="mainCategory" variant="primary" class="m-2">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>
  </div>
</div>
</template>

<script>
  export default {
    props: {
      mainCategory:{
        type: String,
        required: true
      },
      subCategories: Array
    },
    data() {
      return {

      }
    }
  }
</script>


<style scoped>

  *{
    font-family: 'Nunito',Helvetica,Arial,sans-serif;
  }

</style>
