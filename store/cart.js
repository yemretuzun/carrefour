
export const state = () => ({
  totalPrice: 0,
  mycart: {userId: '', cart:[]}
})

export const actions = {

  // Aktif kullanıcının sepetini getir
  async getCart(state) {

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

  },

  // Sepeti boşalt
  async sepetiBosalt(state) {
        this.$fire.firestore.collection("carts").where("userId", "==", this.$fire.auth.currentUser.uid).get()
         .then((querySnapshot) =>{
           querySnapshot.forEach(function(doc) {
              doc.ref.update({cart:[]});
              console.log("Sepet boşaltıldı")
           });
         }
         ).catch(err => {
           console.log("Error: " + err)
         });

  },

  // Sepete ürün ekle
  async addProduct(state, product) {
      this.$fire.firestore.collection("carts").where("userId", "==", this.$fire.auth.currentUser.uid).get()
      .then((querySnapshot) =>{
        let cart
        querySnapshot.forEach(function(doc) {
          cart = doc.data()

          // ürün mevcut değilse ekle
          if(cart.cart.find(p => p.id !== product.id)){
            doc.ref.update({cart: [...cart.cart, product]});
          }
          else{
            cart.cart.splice(cart.cart.indexOf(product),1, product)
            doc.ref.update({cart: cart.cart});
          }
          console.log("product added")
          console.log(product)
        });
      }
      ).catch(err => {
        console.log("Error: " + err)
      });
  },

  // Sepetten ürün sil
  async removeProduct(state, index) {

      this.$fire.firestore.collection("carts").where("userId", "==", this.$fire.auth.currentUser.uid).get()
      .then((querySnapshot) =>{
        let cart
        querySnapshot.forEach(function(doc) {
          cart = doc.data()
          cart.cart.splice(index,1)
          doc.ref.update({cart:  cart.cart});
        });
      }
      ).catch(err => {
        console.log("Error: " + err)
      });
  },

  // Sepetteki ürünü güncelle
  async updateProduct(state, product) {
    this.$fire.firestore.collection("carts").where("userId", "==", this.$fire.auth.currentUser.uid).get()
    .then((querySnapshot) =>{
      let cart
      querySnapshot.forEach(function(doc) {
        cart = doc.data()
        cart.cart.splice(cart.cart.indexOf(product),1, product)
        doc.ref.update({cart:  cart.cart});
      });
    }
    ).catch(err => {
      console.log("Error: " + err)
    });
},

  // Yeni sepet oluştur
  async createCart(state){
    this.$fire.firestore.collection("carts").add(
      {userId: this.$store.state.user.currentUser.uid,
        items:  [], })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  },

}


export const mutations = {

  setCart(state,cart){
    state.mycart = cart
  },
  add (state, product) {
    state.mycart.cart.push(product)
    console.log("CART ADD: ")
    console.log(product)
  },
  remove (state, productId) {
    state.mycart = state.mycart.cart.filter(item => item.id !== productId)
  },
  sepetiBosalt(state){
    state.mycart.cart = [];
    state.totalPrice = 0;
  },
  removeItem(state,index){
    state.totalPrice -= state.mycart.cart[index].price * state.mycart.cart[index].quantity
    state.mycart.cart.splice(index,1)
  },
  priceInc(state,newPrice){
    state.totalPrice += newPrice;
  },
  priceDec(state,newPrice){
    state.totalPrice -= newPrice;
  }
}
