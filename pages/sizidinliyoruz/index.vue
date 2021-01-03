<template>
  <div>
    <button class="btn text-center mx-auto mt-5" @click="ekle" >...</button>

    <div class="container-contact"><h1 style="color: #015aac;">Sizi Dinliyoruz</h1>  		<p><strong style="font-family: 'omnessemibold';">Şikayet Politikamız;</strong> Siz müşterilerimiz tarafından farklı iletişim kanallarından gelen bildirimleri etkili ve verimli bir şekilde, yasa ve şirket kuralları dahilinde değerlendirip, gerekli kaynakları sağlayarak, müşterilerimize değer yaratan ürün ve hizmetlerle, süreçlerimizi sürekli iyileştirmektir.</p>  		<p>Bildirimlerinizi aşağıdaki iletişim kanallarını kullanarak bizimle paylaşabilir, dilerseniz aşağıda bulunan iletişim formunu da doldurabilirsiniz. Bildirimlerinize ortalama iki iş günü içerisinde cevap dönülecektir.<br> 		Müşteri şikâyetleri ve çözüme ilişkin bilgilendirme süreci CarrefourSA Genel Müdürü Kutay Kartallıoğlu ve CarrefourSA Üst Yönetimi tarafından bizzat takip edilmektedir.</p>  		<div class="top-big-banner"><div class="row"><div class="col-md-3 col-sm-6"><div class="kutu-iletisim"><img src="https://reimg-carrefour.mncdn.com/bannerimage/phonesn_0_MC/8814709473330.png" style="margin-bottom: 6px;" alt=""><br>Çağrı Merkezi<br> 						<strong style="font-family: 'omnessemibold';">444 10 00</strong><br> 						<span style="font-size: 12px; line-height: 12px; display: block;">08:00 – 24:00 saatleri arasında hizmet vermektedir</span></div></div> 				<div class="col-md-3 col-sm-6"><div class="kutu-iletisim"><img src="https://reimg-carrefour.mncdn.com/bannerimage/mailsn_0_MC/8814709440562.png" style="margin-bottom: 6px;" alt=""><br>Kurumsal e-posta<br> 						<strong style="font-family: 'omnessemibold';"><a href="mailto:bilgi@carrefoursa.com" style="color: #015aac;">bilgi@carrefoursa.com</a></strong></div></div> 				<div class="col-md-3 col-sm-6"><div class="kutu-iletisim"><img src="https://reimg-carrefour.mncdn.com/bannerimage/boss_0_MC/8814709309490.png" style="margin-bottom: 6px;" alt=""><br>Genel Müdür e-posta<br> 						<strong style="font-family: 'omnessemibold';"><a href="mailto:kutaykartallioglu@carrefoursa.com" style="color: #015aac;">kutaykartallioglu@carrefoursa.com</a></strong></div></div> 				<div class="col-md-3 col-sm-6"><div class="kutu-iletisim"><img src="https://reimg-carrefour.mncdn.com/bannerimage/location_0_MC/8814709342258.png" style="margin-bottom: 6px;" alt=""><br>Mektup Adresi<br> 						<span style="font-size: 12px; line-height: 15px; display: block;">Müşteri Hizmetleri Birimi CarrefourSA Plaza Cevizli Mahallesi Tugay Yolu Caddesi No:67 Blok: B 34846 Maltepe İstanbul</span></div></div> 				<div class="col-md-12 col-sm-12"><div class="contact-iframe-form"><br>İletişim Formu<br><br> 						<iframe id="listeningtoyouframe" src="https://carrefoursa.mi4biz.net/Customer/AnonymousIssueEntry.aspx?BusinessChannelID=TWtUd2hadUE5bk90b0FXYWl0Y0Nxdz090&amp;catID=720" frameborder="0" scrolling="no" height="1250" width="100%"></iframe></div></div></div></div></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
head:{
    title:'Sizi Dinliyoruz | CarrefourSA'
  },
  created() {


  },
   data() {
		  return {
        products: []
		  };
	},
  methods:{
    ...mapActions([
      'getAll'
    ]),
    async ekle({commit, state, rootState })
    {

      this.$store.dispatch('cart/getCart')
    },
  },
  computed: {
    cart(){
        this.$store.state.cart.mycart
    },
    products(){
      return this.getAll()
    }
  },
  watch: { cart(n,o){console.log('New: Cart ' + n)} },

}
</script>
