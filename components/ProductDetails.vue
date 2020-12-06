<template>
	<div class="container-fluid">
		<div class="col-xs-12 col-sm-12 col-md-6 col-lg-5 pd-left pd-tabs-content">
			<div class="product-cont">
				<div class="image-gallery js-gallery">
					<div class="carousel gallery-image js-gallery-image big-images owl-carousel owl-theme" style="opacity: 1; display: block;">
						<div class="owl-wrapper-outer">
							<div class="owl-wrapper clearfix" style="width: 936px; left: 0px; display: block; transition: all 0ms ease 0s; transform: translate3d(0px, 0px, 0px);">
								<div class="owl-item">
									<div class="item">
										<div class="thumb">
											<b-img :src="product.images[0]"/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-6 col-lg-7 pd-right pd-tabs-content">
			<div class="row">
				<div class="container-fluid">
					<div class="product-cont subscription-mode">
						<div class="row hidden-md hidden-lg visible-xs visible-sm">
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pd-camp-text">
								<div class="bundle"></div>
							</div>
						</div>
						<div class="product-details-cont">
							<div class="product-details">
								<div class="brand float-left">
									<span> Marka:
                    <a href="/tr/caykur/b/BRN-1507"> {{product.brand}}</a>
									</span>
								</div>
								<div class="name float-left">
									<h1>{{product.title}}</h1>
								</div>
								<div class="rating js-ratingCalc" data-rating="{&quot;rating&quot;:0.0,&quot;total&quot;:5}">
									<div class="rating-stars">
										<b-rating inline  no-border  :value="product.rating"/>
									</div>
									<span class="reviews reviewsNumber">
										<span class="no-review">
											<span>
												<a class="js-no-review"> Yorum Yazın</a>
											</span>
										</span>
									</span>
									<span class="reviews reviewsText"></span>
								</div>
								<div class="row price-row ">
									<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pd-price-cont">
										<span class="price-cont " content="TRY" itemprop="priceCurrency">
											<span class="hidden" content="InStock" itemprop="availability">InStock</span>
											<label class="textLabel"> Fiyatı: </label>
											<span class="item-price " :content="product.price" itemprop="price">{{product.price}} TL</span>
										</span>
										<p class="item-price-unit"></p>
									</div>
								</div>
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pd-price-cont"></div>
								<div class="addtocart-component row">
									<input type="hidden" name="displayUnit" id="displayUnit" path="displayUnit&quot;" value="adet">
										<div class="qty-selector input-group  js-qty-selector">
											<div class="qty-cont">
												<span class="input-group-btn">
													<button id="js-qty-selector-minus_30037044" @click.prevent="quantityDecrement" class="btn btn-primary js-qty-selector-minus" data-nr="30037044" type="button" data-submit="" data-place="productaddtocartcomponent" :disabled="this.quantity == 1">
														<b-icon-dash class="glyphicon glyphicon-minus"/>
														<span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
													</button>
												</span>
												<span class="pull-left">
													<input type="text" name="quantity" id="quantity_30037044" maxlength="5" class="form-control js-qty-selector-input js-quantity-selector-input" size="1" :value="this.quantity" data-nr="30037044" data-increment="1" data-min="1" data-max="6.0" data-submit=" " data-place="productaddtocartcomponent">
														<div class="a-title">
															<span class="productUnit">adet</span>
														</div>
													</span>
													<span class="input-group-btn">
														<button id="js-qty-selector-plus_30037044" @click.prevent="quantityIncrement" class="btn btn-primary js-qty-selector-plus" data-nr="30037044" type="button" data-submit="" data-place="productaddtocartcomponent">
															<b-icon-plus class="glyphicon glyphicon-plus" />
															<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
														</button>
													</span>
												</div>
											</div>
											<div class="col-xs-12 col-sm-6 col-md-8 col-lg-9">
												<div class="AddToCart-AddToCartAction" data-index="1">
													<div id="addToCartTitle" style="display:none">
                            Sepetinize eklendi</div>
													<div class="row pd-center-right-cont">
														<form id="addToCartForm" class="add_to_cart_form" action="/tr/cart/add" method="post">
															<input type="hidden" maxlength="3" size="1" id="submitquantity_30037044" name="quantity" class="qty js-qty-selector-input" value="1">
																<input type="hidden" name="frequencyId" value="">
																	<input type="hidden" name="productCodePost" value="30037044">
																		<input type="hidden" id="productBrandNamePost" name="productBrandNamePost" value="ÇAYKUR">
																			<input type="hidden" id="productNamePost" name="productNamePost" value="Çaykur Rize Turist Çay 1000 g">
																				<input type="hidden" id="productPricePost" name="productPricePost" value="33.50">
																					<input type="hidden" id="productMainCategoryPost" name="productMainCategoryPost" value="Çaylar">
																						<div class="col-xs-12 col-sm-12 col-md-8 col-lg-5 add-cartbtn-cont">
																							<div class="cart-btn">
																								<button type="submit" class="btn btn-primary  js-add-to-cart js-add-to-cart-product-detail"> Sepete Ekle</button>
																								<button id="addToCartSubscriptions" type="submit" class="btn btn-primary js-add-to-cart js-add-to-subscriptions js-add-to-subscriptions-product-detail hidden">
                                                Sepete Ekle</button>
																							</div>
																						</div>
																						<div>
																							<input type="hidden" name="CSRFToken" value="938e9054-3029-4b67-8c7d-3b9a1acc85b2">
																							</div>
																						</form>
																						<form id="updateProductFavoriteStatusForm" action="/tr/updateProductFavorite" method="post">
																							<input type="hidden" name="productCode" value="30037044">
																								<div>
																									<input type="hidden" name="CSRFToken" value="938e9054-3029-4b67-8c7d-3b9a1acc85b2">
																									</div>
																								</form>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="row hidden-xs hidden-sm">
																				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pd-camp-text"></div>
																			</div>
																		</div>
																		<div class="row hidden-xs hidden-sm">
																			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pd-camp-text">
																				<div class="bundle"></div>
																			</div>
																		</div>
																		<div class="recommendationAlert row hidden">
																			<div class="col-xs-6 col-sm-7"> Bu ürün için önerilmiş ürün bulunmamaktadır.</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
	</div>
</template>

<script>
export default {
  props: {
    product: Object
  },
    data() {
        return {
          quantity: 1,
        }
    },
    methods:{
      quantityIncrement()  {
        this.quantity++;
      },
      quantityDecrement()  {
          this.quantity--;
      }
    },
    computed: {
    }
}
</script>

<style scoped>

  *{
    font-family: 'Nunito',Helvetica,Arial,sans-serif;
    color: var(--carrefour-blue);
     -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

  }
  .product-cont {
    background: #ffffff;
    height: auto;
    border-radius: 6px;
}
.hidden {
    display: none !important;
    visibility: hidden !important;
}
.price-cont .textLabel {
    display: none;
}

 .item-price {
    display: inline-block;
    font-size: 34px;
    color: #005baa;
    line-height: 1;
    font-family: 'Nunito';
    font-weight: 600;
}
.container-fluid .product-details-cont .product-details {
    background: #fff;
    padding: 0 20px 0 25px;
    min-height: 370px;
    margin: 0;
    border-radius: 6px;
}

.pd-tabs-content {
    margin-top: 10px;
}
.col-lg-5 {
    width: 41.66666667%;
}
.col-lg-12 {
    float: left;
}
 .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
    position: relative;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
}

.product-cont {
    background: #ffffff;
    height: auto;
    border-radius: 6px;
}

.image-gallery {
    position: relative;
}

.image-gallery .carousel {
    width: 83%;
    display: inline-block;
    float: right;
}

.image-gallery .carousel {
    margin: auto auto;
    width: auto;
    text-align: center;
}
.thumb {
    position: relative;
}

.image-gallery .carousel .item {
    margin: 0;
    background: #fff;
    display: block;
    border-radius: 6px;
}

.owl-carousel .owl-item {
    position: relative;
    min-height: 1px;
    float: left;
    -webkit-backface-visibility: hidden;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.image-gallery .carousel {
    text-align: center;
}

.owl-carousel .owl-wrapper-outer {
    overflow: hidden;
    position: relative;
    width: 100%;
    transition: all .3s;
}

.image-gallery .carousel {
    width: 83%;
    display: inline-block;
    float: right;
}

.pd-right {
    font-style: normal;
    font-size: 13px;
}
.container .pd-tabs-content {
    margin-top: 10px;
}
.col-lg-7 {
    width: 58.33333333%;
}
.col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
    float: left;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
    position: relative;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
}
.row {
    margin-left: -10px;
    margin-right: -10px;
}
.container-fluid {
    margin-right: auto;
    margin-left: auto;
    padding-left: 10px;
    padding-right: 10px;
}
.product-cont {
    background: #ffffff;
    height: auto;
    border-radius: 6px;
}
.hidden-lg {
    display: none !important;
}
.product-details-cont {
    min-height: 370px;
}
.product-details {
    background: #fff;
    padding: 0 20px 0 25px;
    min-height: 370px;
    margin: 0;
    border-radius: 6px;
}
.name {
    margin: 8px 0 10px 0;
    display: block;

}
h1{
  line-height: 1.42857143;
  color: #303030 ;
}
.price-row {
    margin-bottom: 5px;
}
.addtocart-component {
    margin: 20px 0 0 0;
}
.rating {
    margin-bottom: 8px;
}
.rating .rating-stars {
    float: left;
    margin: 0 5px 0 0;
    padding: 3px 0 1px;
    letter-spacing: 50px;
}
 .rating span.reviews {
    color: #333;
    font-size: 14px;
    vertical-align: sub;
}
.price-row {
    margin-bottom: 5px;
}
.addtocart-component {
    margin: 20px 0 0 0;
}
.addtocart-component .qty-selector {
    width: 120px;
    padding: 0;
    float: left;
    margin: 12px 10px 10px 0;
}
.col-lg-9 {
    width: 75%;
}

.addtocart-component .qty-selector .qty-cont {
    margin-right: 3px;
}

.addtocart-component .qty-selector .input-group-btn {
    width: 28px;
}
.addtocart-component .qty-selector .input-group-btn .btn {
    width: 28px;
    height: 28px;
    background: #f0f8ff;
    color: #005baa;
    padding: 5px 4px;
    float: left;
    border-radius: 17px;
    border: 0;
}
.addtocart-component .AddToCart-AddToCartAction {
    margin-left: -10px;
    margin-right: -10px;
}

.addtocart-component .qty-selector .input-group-btn .btn:disabled {
    background-color: #f0f8ff !important;
}
.addtocart-component .qty-selector .form-control {
    height: auto;
    border: 0;
    padding: 1px 1px 0 1px;
    background: transparent;
    display: block;
    font-weight: bold;
}
.addtocart-component .qty-selector .a-title {
    font-size: 12px;
    text-align: center;
    display: block;
}
.addtocart-component .qty-selector .a-title {
    font-size: 12px;
    text-align: center;
}
.glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.container .pd-right {
    font-style: normal;
    font-size: 13px;
}

input, button, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
.addtocart-component .cart-btn .btn {
    text-transform: none;
    font-size: 22px;
    height: 58px;
    line-height: 30px;
    display: inline-block;
    border-radius: 6px;
}
.addtocart-component .cart-btn {
    text-align: center;
    margin: 0;
}

.btn-primary {
    color: #fff;
    background-color: #085fae;
    border-color: transparent;
}
.btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
