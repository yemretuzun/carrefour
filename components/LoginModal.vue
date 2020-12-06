<template>
<div>
  {{btn}}
  <b-button @click="$bvModal.show('modal-scoped')">Giriş</b-button>

  <b-modal id="modal-scoped" :header-bg-variant="headerBgVariant" size="sm">
    <template #modal-header="{close}">
        <div class="m-auto d-inline-block">
          <h3>Giriş Yapın</h3>
        </div>
        <b-button class="close-btn d-inline-block" @click="close()">
          <span>X</span>
        </b-button>
    </template>

    <template #default -modal>
      <b-container class="w-75">
        <b-row><span class="info-text">{{info_text}}</span></b-row>
        <b-row>
          <div>
            <b-form >
                <label>Cep Telefonu Numaranız</label>
            </b-form>
          </div>
        </b-row>
        <b-row>
          <b-form-input v-model="phoneNumber" placeholder="5__ ___ __ __"></b-form-input>
        </b-row>
        <b-row>
            <button class="btn login-btn btn-block">Giriş Yapın</button>
        </b-row>
        <b-row>
          <b-button class="btn1 border-0" block><a href="#">Giriş Yapamıyorum</a></b-button>
        </b-row>
         <b-row>
          <b-button class="btn1 border-0" block><a href="#"><b-icon-question-circle-fill size="small"/> Sıkça Sorulan Sorular</a></b-button>
        </b-row>
      </b-container>
    </template>

    <template #modal-footer="{ ok }">
      <button  class="btn btn-outline-primary btn-block"  @click="ok('register')">
        Üye Olun
      </button>
    </template>
  </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        headerBgVariant: 'primary',
        info_text: "Size daha güvenli bir alışveriş deneyimi sunmak için cep telefonu ile giriş sistemine geçtik. Herhangi bir sorun yaşamanız durumunda Sıkça Sorulan Sorular bölümünden bilgi alabilirsiniz.",
        phoneNumber: '',
      }
    }
  }
</script>


<style scoped>

  *{
    font-family: 'Nunito',Helvetica,Arial,sans-serif;
  }

  h3 {
    font-size: 19px;
    color: #fff;
    font-weight: 800;
    line-height: 40px;
    border-radius: 4px 4px 0 0;
  }

  .login-btn{
    background: var(--carrefour-blue);
    color: #fff;
    margin-top: 10px;
  }

  .close-btn{
    background: none;
    text-transform: uppercase;
    color: #75bdff;
    top: 10px;
    border: 1px solid transparent;
    font-weight: 800;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 21px;
    line-height: 1.42857143;
  }

  .info-text{
    color: #303030;
    display: block;
    margin-bottom: 15px;
    line-height: 1.2;
    font-size: 13px;
    font-weight: bold;
  }

  .btn1{
    background: transparent;
    color: #303030;
  }

</style>
