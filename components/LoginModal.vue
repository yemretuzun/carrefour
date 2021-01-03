<template>
<div>
  <div>
    <button class="btn bg-transparent border-0 m-0 p-0"
      @click="$bvModal.show('modal-' + unique_id)">
        <slot></slot>
      </button>
  </div>


  <b-modal :id="'modal-' + unique_id"
           :header-bg-variant="headerBgVariant"
           size="sm">
    <template #modal-header="{close}">
        <div v-if="login" class="m-auto d-inline-block">
          <h3>Giriş Yapın</h3>
        </div>
        <div v-else class="m-auto d-inline-block">
          <h3>Üye Olun</h3>
        </div>

        <b-button class="close-btn d-inline-block" @click="close()">
          <span>X</span>
        </b-button>
    </template>

    <template #default -modal>
      <b-container class="w-75">

        <b-row v-if="login"><span class="info-text">{{info_text}}</span></b-row>

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

        <div v-if="!login" class="mt-3">
          <b-row>
            <div>
              <b-form >
                  <label>E-posta Adresiniz</label>
              </b-form>
            </div>
          </b-row>
           <b-row>
            <b-form-input v-model="email" placeholder=""></b-form-input>
          </b-row>
        </div>

        <b-row>
            <button v-if="login" class="btn login-btn btn-block"
                    @click="signIn">
                    Giriş Yapın</button>

            <button v-else class="btn login-btn btn-block"
                    @click="signUp">
                    Üye Ol</button>
        </b-row>

        <div v-if="login">
          <b-row>
            <b-button class="btn1 border-0" block>
                <a href="#">Giriş Yapamıyorum</a>
            </b-button>
          </b-row>
           <b-row>
              <b-button class="btn1 border-0" block><a href="#"><b-icon-question-circle-fill size="small"/>
                  Sıkça Sorulan Sorular</a>
              </b-button>
          </b-row>
        </div>

      </b-container>
    </template>

    <template #modal-footer="{}">
      <button v-if="login"  class="btn btn-outline-primary btn-block"  @click="() => login = false">
        Üye Olun
      </button>
      <button v-else  class="btn btn-outline-primary btn-block"  @click="() => login = true">
        Giriş Yap
      </button>
    </template>
  </b-modal>
  </div>
</template>

<script>
import _ from 'lodash'
  export default {
    data() {
      return {
        unique_id: 0,
        show: false,
        headerBgVariant: 'primary',
        info_text: "Size daha güvenli bir alışveriş deneyimi sunmak için cep telefonu ile giriş sistemine geçtik. Herhangi bir sorun yaşamanız durumunda Sıkça Sorulan Sorular bölümünden bilgi alabilirsiniz.",

        phoneNumber: '',
        email: '',
        login: true
      }
    },
    methods:{
      signIn(){
          this.$store.dispatch('user/login')
      },
      signUp(){
          this.$store.dispatch('user/register')
      },
    },
    beforeMount(){
      this.unique_id = _.uniqueId('modal-')
    }

  }
</script>


<style scoped>

  *{
    font-family: 'Nunito',Helvetica,Arial,sans-serif;
  }
  .bg-transparent{
    border: none;
  }
  .bg-transparent:focus{
    box-shadow: none;
  }
  .bg-transparent:active{
    box-shadow: none;
  }
  .bg-transparent:hover{
   box-shadow: none;
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
