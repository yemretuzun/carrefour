
export default ({ app }, inject) => {
  const products = function(){

    let _products = []

    try{

      this.$fire.firestore.collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          _products.push(doc.data())
      });

        return _products
      }).catch(function(error) {
        return [error]
    })

    }catch (err){
      return [err]
    }
   return _products
  }



  inject('products', products)
}



