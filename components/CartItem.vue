<template>
  <div class="m-auto">
    <table class="table">
      <tr>
        <td><b-img :src="item.image" width="75"/></td>
        <td><span class="item-title">{{item.title}}</span></td>
        <td>
          <tr>
            <td class="border-0">
              <b-button class="bg-transparent border-0" @click.prevent="quantityDecrement"><b-icon-dash-circle-fill color="#dde2eb" scale="1.3"/></b-button>
            </td>
            <td class="border-0 item-quantity">
              <tr><a><strong>{{item.quantity}}</strong><br/>adet</a></tr>
              <tr> <span @click="deleteItem" class="delete-item">Ürünü Sil</span> </tr>
            </td>
            <td class="border-0">
              <b-button class="bg-transparent border-0" @click.prevent="quantityIncrement"><b-icon-plus-circle-fill color="#dde2eb" class="" scale="1.3"/></b-button>
            </td>
          </tr>

        </td>
      </tr>
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
      quantityDecrement(){
        if(this.item.quantity > 1)
        {
          this.item.quantity--;
          this.$emit('priceDec', this.item.price);
        }
      },
      quantityIncrement(){
        this.item.quantity++;
        this.$emit('priceInc', this.item.price);
      },
      deleteItem(){
          this.$emit('priceDec', this.item.price);
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
