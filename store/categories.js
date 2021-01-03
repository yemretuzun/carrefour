
export const state = () => ({
  list: [
    {
      mainCategory:"Meyve, Sebze",
      to:"meyve-sebze",
      icon:"https://www.flaticon.com/svg/static/icons/svg/3081/3081887.svg",
      subCategories: [
        { title:"Meyve", to:"meyve" },
        { title:"Sebze", to:"sebze" },
      ],
    },
    {
      mainCategory:"Et, Balık, Kümes",
      to:"et-balik-kumes",
      icon:"https://www.flaticon.com/svg/static/icons/svg/3081/3081928.svg",
      subCategories: [
        { title:"Balık ve Deniz Mahsülleri", to:"balik" },
        { title:"Kırmızı Etler", to:"et" },
        { title:"Kümes hayvanları", to:"kumes" },
        { title:"Meze", to:"meze" },
        { title:"Şarküteri", to:"sarkuteri" },
      ]
    },
    {
      mainCategory:"Süt, Kahvaltılık",
      to:"kahvaltilik",
      icon:"https://www.flaticon.com/svg/static/icons/svg/3081/3081932.svg",
      subCategories: [
        { title:"Kahvaltiliklar", to:"#" },
        { title:"Krema ve Kaymak", to:"#" },
        { title:"Peynir", to:"#" },
        { title:"Süt", to:"#" },
        { title:"Tereyağı ve Margarin", to:"#" },
        { title:"Yoğurt", to:"#" },
        { title:"Yumurta", to:"#" },
        { title:"Zeytin", to:"#" },
        { title:"Yoğurt & Kefir Mayası", to:"#" },
      ],
    },
    {
      mainCategory:"Gıda, Şekerleme",
      to:"gida",
      icon:"https://www.flaticon.com/svg/static/icons/svg/3081/3081792.svg",
      subCategories: [
        { title:"Salça, Harç ve Bulyon", to:"#" },
        { title:"Turşular ve Salamuralar", to:"#" },
        { title:"Dondurulmuş Ürünler", to:"#" },
        { title:"Dondurma", to:"#" },
        { title:"Sıvı Yağlar", to:"#" },
        { title:"Makarna, Pirinç ve Bakliyat", to:"#" },
        { title:"Konserveler", to:"#" },
        { title:"Şeker, Tuz ve Baharat", to:"#" },
        { title:"Çorbalar ve Hazır Yemekler", to:"#" },
        { title:"Unlu Mamüller ve Tatlılar", to:"#" },
      ],
    },
    {
      mainCategory:"İçecekler",
      to:"gida",
      icon:"https://www.flaticon.com/svg/static/icons/svg/1244/1244369.svg",
      subCategories: [
        { title:"Çay, Kahve", to:"#" },
        { title:"Gazsız İçecekler", to:"#" },
        { title:"Gazlı İçecekler", to:"#" },
        { title:"Sular", to:"#" },
        { title:"Maden Suları", to:"#" },
        { title:"Sporcu İçecekleri", to:"#" },
      ],
    },
  ]
})

export const actions = {
  getAll({state}) {
    let products = []
    this.$fire.firestore.collection("categoryMenuItems").get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        products.unshift(doc.data())
      });

       return products
      });

      return products
}
}

export const mutations = {

}
