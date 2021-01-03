export const state = () => ({
  currentUser: {email: ''}
})

export const actions = {

  async register(state, email, password) {

    this.$fire.auth.createUserWithEmailAndPassword(email, /*password*/ 'CarrefoursaDemo123.')
    .then((user) => { // kayıt başarılı
        return user;
    })
    .catch((error) => {
      console.log('Register ERROR: ' + error)
      return error
    });
},

  async login(state) {
    let usr;
    this.$fire.auth.signInWithEmailAndPassword(/* email */ 'testUser@carrefour.yns', /*password*/ 'CarrefoursaDemo123.')
    .then((user) => {  // Signed in
      usr = user.user
      this.commit('user/setCurrentUser', usr)

      // sepeti güncelle
      this.$fire.firestore.collection("carts").where("userId", "==", this.$fire.auth.currentUser.uid).get()
      .then((querySnapshot) =>{
        let cart
        querySnapshot.forEach(function(doc) {
          cart = doc.data()
        });
        this.commit('cart/setCart',  cart)
      }
      ).catch(err => {
        console.log("Error: " + err)
      });

      return user
    })
    .catch((error) => {
      console.log('Login ERROR: ' + error)
      return error
    });


  },

  async logout(state) {
    this.commit('user/setCurrentUser', {email: ''})

    await this.$fire.auth.signOut()
  },

  async getCurrentUser(state) {
      return this.$fire.auth.currentUser
  },

}

export const mutations = {
    setCurrentUser(state, user){
      console.log('user commited >>>>>>>>> ')
      console.log(user)
      state.currentUser = user
    }
}
