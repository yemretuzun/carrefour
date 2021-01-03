<template>
<div class="container p-5">
    <div v-if="currentUser.email != ''" class="container-fluid row w-100 bg-primary p-5 m-5">
      <div class="text-light">
        <div></div>
          <button class="btn btn-danger my-3" @click="logout">
            Çıkış yap</button>
          <div>Uid: {{currentUser.uid}}</div>
          <div>Mail: {{currentUser.email}}</div>
      </div>
    </div>
    <div v-else class="mx-autp text-center p-5">
       <LoginModal><button class="btn btn-primary">GİRİŞ YAP</button></LoginModal>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$nuxt.refresh();
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.user.currentUser;
    },
  },
  watch: { currentUser(n,o){console.log('New: ' + n)} },

}
</script>


<style scoped>

</style>
