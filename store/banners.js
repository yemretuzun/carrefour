
export const state = () => ({
  list: [
    {
      src:"https://reimg-carrefour.mncdn.com/bannerimage/firsat-banner-sekdsut-min_0_MC/8825620365362.png",
      to:"sek-yarim-yagli-sut-1-lt-p-30261053"
    },
    {
      src:"https://reimg-carrefour.mncdn.com/bannerimage/ddmandalina-mindd_0_MC/8825620299826.png",
      to:"mandalina-kg-p-30113648"
    },
    {
      src:"https://reimg-carrefour.mncdn.com/bannerimage/kmli311_0_MC/8825553649714.png",
      to:"komili-sizma-2-lt-zeytinyagi-p-30011370"
    },
    {
      src:"https://reimg-carrefour.mncdn.com/bannerimage/torku2711_0_MC/8825553780786.png",
      to:"torku-toz-seker-5-kg-p-30034134"
    }
  ]
})


export const actions = {
  getAll({state}) {
    let banners = []

    this.$fire.firestore.collection("banners").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        banners.unshift(doc.data())
      });

       return banners
      });

      return banners
}
}

export const mutations = {

}
