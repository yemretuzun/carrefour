export const state = () => ({
  list: [
    {
      id:"sek-yarim-yagli-sut-1-lt-p-30261053",
      title:"Sek Yarım Yağlı Süt 1 lt",
      images:["https://reimg-carrefour.mncdn.com/mnresize/96/96/productimage/30261053/30261053_0_MC/8816282894386_1576825245791.jpg",
               "https://reimg-carrefour.mncdn.com/mnresize/96/96/productimage/30261053/30261053_7_MC/8816413900850_1578052739628.jpg"],
      brand:"SEK",
      ratings:4.5,
      price: 3.75,
      discount: 5,
      discounted_price: 2.9,
      category: "",
    },
    {
      id:"mandalina-kg-p-30113648",
      images:["https://reimg-carrefour.mncdn.com/mnresize/96/96/productimage/30113648/30113648_0_MC/8797061644338_1600691128723.jpg"],
      title:"Mandalina kg",
      brand:"MARKASIZ",
      ratings:0,
      price: 2.99,
      discount: 25,
      discounted_price: 2.9,
      category: ""
    },
    {
      id:"komili-sizma-2-lt-zeytinyagi-p-30011370",
      images:["https://reimg-carrefour.mncdn.com/mnresize/96/96/productimage/30011370/30011370_0_MC/8796357460018_1499976800896.jpg"],
      title:"Komili Sizma 2 lt Zeytinyağı",
      brand:"KOMİLİ",
      ratings:0,
      price: 59.90,
      discount: 25,
      discounted_price: 2.9,
      category: ""
    },
    {
      id:"torku-toz-seker-5-kg-p-30034134",
      images:["https://reimg-carrefour.mncdn.com/mnresize/96/96/productimage/30034134/30034134_0_MC/8796500885554_1573115013572.png",
              "https://reimg-carrefour.mncdn.com/mnresize/96/96/productimage/30034134/30034134_7_MC/8820149878834_1593515225771.jpg"],
      title:"Torku Toz Şeker 5 kg",
      brand:"TORKU",
      ratings:0,
      price: 23.90,
      discount: 25,
      discounted_price: 2.9,
      category: ""
    },
    {
      id:"prima-premium-care-firsat-3-beden-96-li-p-30210125",
      images:["https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30210125/30210125_0_MC/8806447972402_1588625934796.jpg",
              "https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30210125/30210125_1_MC/8813437485106_1588625934843.jpg",
              "https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30210125/30210125_2_MC/8813437517874_1588625934889.jpg",
              "https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30210125/30210125_3_MC/8813437517874_1588625934889.jpg"
            ],
      title:"Prima Premium Care Fırsat 3 Beden 96'lı",
      brand:"PRIMA",
      ratings:0,
      price: 123.92,
      discount: 25,
      discounted_price: 2.9,
      category: "Anne & Bebek"
    },
    {
      id:"king-balikli-kedi-mamasi-15-kg-p-30082259",
      images:["https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30082259/30082259_0_MC/8796812509234_1499977602881.jpg"
            ],
      title:"King Balıklı Kedi Maması 15 kg",
      brand:"KING",
      ratings:0,
      price: 149.90,
      discount: 25,
      discounted_price: 2.9,
      category: "Pet Shop"
    },
    {
      id:"danone-protein-sut-vanilyali-330-ml-p-30244083",
      images:["https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30244083/30244083_0_MC/8813659881522_1554905429492.jpg"
            ],
      title:"Danone Protein Süt Vanilyalı 330 ml",
      brand:"DANONE",
      ratings:4,
      price: 5.95,
      discount: 25,
      discounted_price: 2.9,
      category: "Fit Yaşam"
    },
    {
      id:"carrefour-200-lu-pecete-26x24-p-30081114",
      images:["https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30081114/30081114_0_MC/8796802646066_1499977586741.jpg"
            ],
      title:"Carrefour 200'lü Peçete 26x24",
      brand:"CARREFOUR",
      ratings:0,
      price: 3.25,
      discount: 25,
      discounted_price: 2.9,
      category: "Carrefour Ürünleri"
    },
    {
      id:"cif-jel-tum-yuzeyler-yasemin-ferahligi-1500-ml-p-30248305",
      images:["https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30248305/30248305_0_MC/8814119682098_1559289750474.jpg"
            ],
      title:"Cif Jel Tüm Yüzeyler Yasemin Ferahlığı 1500 ml",
      brand:"	CIF",
      ratings:0,
      price: 16.46,
      discount: 25,
      discounted_price: 2.9,
      category: "Carrefour Ürünleri"
    }
  ],

  products: []
})
export const actions = {
    getAll({state}) {
      let products = []
      this.$fire.firestore.collection("products").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          products.unshift(doc.data())
          this.commit('products/add',doc.data() )
        });

         return products
        });
        return products
  }
}



export const mutations = {
  add(state, product){
    state.products.push(product)
  }
}
