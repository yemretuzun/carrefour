<template>
  <div class="m-auto">
    <table class="table">
      <tbody>
        <tr>
          <td class="w-25"><b-img :src="item.images[0]" width="75"/></td>
          <td class="w-25"><span class="item-title">{{item.title}}</span></td>
          <td class="w-25 text-center">
            <tr>
              <td class="border-0">
                <b-button class="bg-transparent border-0" @click.prevent="quantityDec"><b-icon-dash-circle-fill color="#dde2eb" scale="1.3"/></b-button>
              </td>
              <td class="border-0 item-quantity">
                <tr><a><strong>{{item.quantity}}</strong><br/>adet</a></tr>
                <tr> <span @click="deleteItem" class="delete-item">Ürünü Sil</span> </tr>
              </td>
              <td class="border-0">
                <b-button class="bg-transparent border-0" @click.prevent="quantityInc"><b-icon-plus-circle-fill color="#dde2eb" class="" scale="1.3"/></b-button>
              </td>
            </tr>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- <b-img :src="item.image" width="75"/> -->
</template>


<script>

export default {
  props: {
    item: {
      type: Object,
      required: true
      }
  },
    data() {
        return {

        }
    },
    methods:{
      quantityDec(){
        if(this.item.quantity > 1)
        {
          this.item.quantity--;
          this.$emit('quantityDec',{...this.item});
        }
      },
      quantityInc(){
        this.item.quantity++;
        this.$emit('quantityInc', {...this.item});
      },
      deleteItem(){
        this.$emit('removeItem');
      }
    },
    computed: {

    },
}
</script>

<style scoped>

  *{
    font-family: 'Nunito',Helvetica,Arial,sans-serif;
  }

  .item-quantity{
    color: #333 !important;
  }
  .item-quantity strong{
    color: #333 !important;
  }

  .item-title{
    color: #333 !important;
    font-weight: 600;
    font-size: 24px;
  }

  .delete-item{
    margin-top: 5px;
    font-size: larger;
    color: var(--carrefour-blue);
    font-weight: bold;
  }
</style>
