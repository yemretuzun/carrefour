<template>
	<div class="pd-head">
    <!-- laptop, tablet için -->
    <div class="d-none d-lg-block">
      <div class="row">
          <!-- küçük resimler vertical-->
          <div class="p-5">
            <div class="container-fluid clearfix slider-area overflow-auto">
              <div v-for="(img,index) in product.images" :key="index">
                <div class="owl-item d-flex" style="cursor:pointer;">
                  <img class="img-thumbnail mb-2 p-1 border-primary d-flex"
                      :src="product.images[index]"
                      @click="setSelectedIndex(index)"/>
                </div>
              </div>
            </div>
          </div>
          <!-- detaylar -->
          <div class="w-75 p-5 row">
            <!-- büyük resim -->
            <div class="w-50 h-100">
                <div class="" style="cursor:pointer;">
                  <img class="img-fluid mb-2 p-1 border-primary big-img" :src="resize(product.images[selectedIndex])"/>
                </div>
            </div>
            <!-- marka-fiyat -->
            <div class="w-50 pl-2" carrefour-text>
              <div class="brand mt-2">
                <span >Marka: <a class="text-uppercase text-decoration-none">{{product.brand}}</a></span>
              </div>
              <div class="title mt-2">
                <h1> {{product.title}} </h1>
              </div>
              <!-- ratings -->
              <div class="ratings row align-items-center mt-3">
                <Ratings class="" :rating="product.ratings" />
                <span class="">(0) <a href="#">Yorum Yazın</a> </span>
              </div>
              <!-- fiyat -->
              <Price :price="product.price" :discount="product.discount" :discounted_price="product.discounted_price"/>

              <!--  quantity - sepete ekle -->
              <div class="buttons row align-items-center my-3">
                <QuantitySelector
                      @increased="quantityIncrement"
                      @decreased="quantityDecrement"/>
                  <!-- sepete ekle -->
                  <button class="btn ml-3 btn-sepet" carrefour @click="addToCart">Sepete Ekle</button>
              </div>
            </div>
          </div>
      </div>
      <!-- açıklama, yorum, taksit tabs-->
      <div class="row" carrefour-text>
        <div class="container-fluid">
          <b-card no-body class="border-0">
            <b-tabs v-model="tabIndex" card>
              <b-tab class="tabbody" carrefour-text title="ÜRÜN AÇIKLAMASI" :title-link-class="linkClass(0)">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida enim eros, aliquet pellentesque purus vulputate vitae. Donec malesuada dapibus diam sit amet elementum. Quisque aliquet felis a turpis pulvinar, ac aliquet nibh dictum. Pellentesque posuere ligula ac nisi elementum, a mollis mauris vestibulum. Maecenas lorem est, blandit id ligula in, malesuada mollis justo. Aenean varius dui at velit efficitur, in blandit mauris bibendum. Nulla ut eleifend urna.
              </b-tab>
              <b-tab class="tabbody" carrefour-text title="YORUMLAR" :title-link-class="linkClass(1)">
                <Comment :title="'title'"
                  :message="'message'"
                  :stars="5"
                  :date="'08.12.2020'"
                  :username="'Yunus Emre Tüzün'"/>
              </b-tab>
              <b-tab class="tabbody" carrefour-text title="TAKSİT BİLGİLERİ" :title-link-class="linkClass(2)">
                <a>Bu ürün için taksit imkanı bulunmamaktadır.</a>
              </b-tab>
              <b-tab class="tabbody" carrefour-text title="TESLİMAT İADE" :title-link-class="linkClass(3)">
               <div>
                 <div class="content iade">
                   <ul>
                    <li>ALICI, herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşme konusu ürünün/ürünlerin kendisine veya gösterdiği adresteki kişi veya kuruluşa tesliminden itibaren 14 (on dört) gün içinde sözleşmeden cayma hakkına sahiptir.</li>
                    <li>Cayma hakkının kullanılması için cayma hakkının kullanıldığına dair bu süre içinde SATICI'ya, e-mail ya da telefon ile bildirimde bulunulması gerekmektedir.</li>
                    <li>Tüketicinin, cayma hakkını kullanması halinde, 3. kişiye veya ALICI'ya teslim edilen ürünün/ürünlerin ve ürüne/ürünlere ait fatura aslının ve teslimata dair kargo teslim tutanağının SATICI’ya iade edilmesi zorunludur. Cayma bildirimi ile birlikte bu belgelerin SATICI’ya ulaşmasından sonraki 10 (on) gün içinde ürünün/ürünlerin bedeli ALICI’ya masraf yüklemeksizin iade edilir.</li>
                    <li>Cayma bildiriminin SATICI’ya ulaşmasından itibaren 20 (yirmi) gün içerisinde de ALICI’ya teslim edilen ürün/ürünleri geri alınır. Bu halde, ürünün/ürünlerin SATICI’ya iadesi kargo ile yapılır ve bu durumda kargo ücreti ALICI’ya aittir.</li>
                    <li>Teslim alınmış olan malın değerinin azalması veya iadeyi imkânsız kılan bir nedenin varlığı cayma hakkının kullanılmasına engel değildir. Ancak değer azalması veya iadenin imkânsızlaşması tüketicinin kusurundan kaynaklanıyorsa ALICI, SATICI’ya malın değerini veya değerindeki azalmayı tazmin etmeyi kabul ve beyan eder.</li>
                  </ul>
                  <p>Cayma Hakkı Kullanılamayacak Ürünler</p>
                  <p>Mesafeli Sözleşmelere Dair Yönetmelik uyarınca, gazete, dergi gibi kısa süreli yayınlar, gıda maddeleri, içecek ve diğer günlük tüketim maddeleri için sağlanan ürünler, tek seferde kullanılan ürünler, kopyalanabilir yazılım ve programlar ile niteliği itibari ile geri gönderilmeye elverişli olmayan, hızla bozulma veya son kullanma tarihi geçme ihtimali olan ürünlerde, ALICI cayma hakkını kullanamaz.</p>
                  <ul>
                      <li>Yazılım, program, DVD, VCD, CD ve kasetler, bilgisayar, kırtasiye sarf malzemeleri, ses ve görüntü kayıtları ile yukarıda sayılan kapsamda bulunmayan kozmetik ürünlerde ancak ambalajın açılmamış, bozulmamış ve ürünün kullanılmamış olması şartıyla ALICI tarafından cayma hakkı kullanılabilecektir.</li>
                      <li>Tüm iadeler orijinal ambalaj ve kutu ile yapılmalıdır. Cep telefonları kutusu garanti belgesi kaşelenmek suretiyle açık gelmekte olup, bu husus iade sebebi olarak kabul edilmez. Elektronik ürün ve cep telefonları yetkili servis garantisi ile satılmaktadır.</li>
                  </ul>
                  <p>Kargo ile yapılan teslimatlarda iade koşulları;</p>
                  <ul>
                      <li>CarrefourSA mağazalarından ürün iade ve değişim işlemi yapılamamaktadır.</li>
                      <li>İade için ürünün gönderilmesi gereken adres: Reysaş CarrefourSA Ulusal Depo Çayırova-9 549 Sok. 2080 Parselle Kayıtlı Akse Mah. Çayırova/Kocaeli</li>
                      <li>Yasal süreçler gereği cayma hakkı kapsamında iade işlemleri ürünün size teslim tarihinden itibaren ilk 14 gün içinde yapılabilmektedir. 14 günü aşan iade /değişim işlemleri için mutlaka yetkili servis tutanağı ibraz edilmelidir. Yetkili servis belgesinin iletilmediği durumlarda cayma hakkı kullanılamaz.</li>
                      <li>Siparişinizi size teslimatı yapan kargo firması ile geri iade etmeniz gerekmektedir. Beyaz eşya ürün grubu Horoz Lojistik ile taşınmaktadır. Servis raporu/ hasar tespit tutanağı ile birlikte beyaz eşya ürün grubu için ürünleri Reysaş CarrefourSA Ulusal Depo Çayırova-9 549 Sok. 2080 Parselle Kayıtlı Akse Mah. Çayırova/Kocaeli adresine göndermeniz gerekmektedir. Horoz lojistik tarafından ürününüz alınması için ürün orijinal ambalajında, yerinden sökülmüş ve taşımaya hazır durumuna getirilmelidir. Ürünü Horoz lojistiğe hazırlama sorumluluğu müşterimize aittir.</li>
                      <li>Beyaz eşya dışında ki ürünler UPS KARGO ile iade edilmektedir. UPS KARGO karşı ödemeli anlaşmalı kargo kodu ürün iadenizin onaylanması ile birlikte sizinle paylaşılacaktır. Kargo paketi için ürün irsaliyesini de mutlaka koymanız gerekmektedir.</li>
                      <li>Teslimat hizmeti ücret karşılığında sunulduğu için, teslimat sonrası iade taleplerinizde, teslimat hizmet bedeli iade edilmemektedir.</li>
                  </ul></div>
               </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>

      </div>
    </div>

    <!-- small ekranlar için -->
    <div class="d-md-block d-lg-none container-fluid">
      <div class="overflow-hidden text-center">
        <ProductDetailsMobile :product="product"/>
      </div>
    </div>
	</div>
</template>

<script>
import Ratings from './Ratings'
import Comment from './Comment'
import ProductDetailsMobile from './ProductDetailsMobile'
import Price from './Price'
import QuantitySelector from './QuantitySelector'
import CategoryMenu from './CategoryMenu'

export default {
  components: { Ratings },
  props: {
    product: Object
  },
  data() {
    return {
      quantity: 1,
      selectedIndex: 0,
      tabIndex: 0
    }
    },
    methods:{
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['px-3','py-2','border-primary','border-top','bg-light', 'border', 'border-bottom-0']
        } else {
          return ['px-3','py-2','bg-light']
        }
      },
      setSelectedIndex(index){
        this.selectedIndex = index
      },
      quantityIncrement()  {
        this.quantity++;
      },
      quantityDecrement()  {
          this.quantity--;
      },
      resize(img){
        try{
          try{
            const resizedImg = img.replace(/\/96/g,'/426')
            return resizedImg
          }catch (e){
            try{
              const resizedImg = img.replace(/\/600/g,'/426')
              return resizedImg
            }catch (e){};
          };
          return resizedImg
        }catch (e) { return img }

        },
      resize2(img){
        try{
          try{
            const resizedImg = img.replace(/\/96/g,'/256')
            return resizedImg
          }catch (e){
            try{
              const resizedImg = img.replace(/\/600/g,'/256')
              return resizedImg
            }catch (e){};
          };
          return resizedImg
        }catch (e) { return img }

      },
      addToCart(){
        this.$store.dispatch("cart/addProduct",{...this.product, quantity: this.quantity} ).then((x) => {});
      }
    },
    head () {
      return {
          bodyAttrs: {
              class: 'bg-white'
          }
      }
    }
}
</script>

<style scoped>

  .owl-item{
     width: 80px !important;
  }

  .big-img{
    max-height: 426px;
  }

  .brand span{
    color: #82a4c0;
    font-size: 14px;
  }
  .brand span a {
    color: #005baa;
    font-family: 'Nunito';
    font-weight: 600;
  }

  .title h1 {
    font-size: 34px;
    font-family: 'Nunito';
    font-weight: 600;
    color: #303030;
    margin: 0;
    padding: 0;
}

.price span {
    display: inline-block;
    font-size: 34px;
    color: #005baa;
    line-height: 1;
    font-family: 'Nunito';
    font-weight: 600;
}
.indirim{
    background: #f8e71c;
    width: 59px;
    height: 59px;
    text-align: center;
    border-radius: 50%;
    font-weight: normal;
    font-size: 22px;
    line-height: 61px;
    color: #303030;
}
.indirim span{
    font-size: 28px;
}
.priceLineThrough {
    font-size: 22px;
    display: block;
    color: #878787 !important;
    line-height: 1;
    font-family: 'Nunito';
    font-weight: 600;
    text-decoration: line-through;
}

  .icon-plus{
    background-color: #f0f8ff !important;
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
  .icon{
   width: 20px;
    height: 20px;
  }

  .slider-area {
    transform: translate3d(0, 0, 0);
    transition: all .4s ease 0s;
    padding: 0;
    position: relative;
}

.btn-sepet {
    text-transform: none;
    font-size: 22px;
    height: 58px;
    line-height: 30px;
    display: inline-block;
    border-radius: 6px;
}

.tabbody{
    background: #f6f9fc;
    color: #465e72;
    border-radius: 6px;
    padding: 80px 60px;
}


</style>
