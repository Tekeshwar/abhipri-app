<template>
	<div class="app-footer">
		<v-container >
			<v-layout wrap align-center>
				<v-flex  sm8 lg8>
					<ul class="footerLinks">
						<li>
							<router-link class="nav-link-text-color" to="/contact">CONTACT US</router-link>
						</li>
						<li>
							<a href="http://purplestylelabs.com/shipping.html" target="_blank">SHIPPING &amp; DELIVERY</a>
						</li>
						<li>
							<router-link class="nav-link-text-color scrolltotop" to="/">TERMS OF USE</router-link>
						</li>
						<li>
							<router-link class="nav-link-text-color storeLocatorlink" to="/">STORE LOCATOR</router-link>
						</li>
					</ul>
				</v-flex>
				<v-flex text-xs-center sm4 lg4 right>
					<div class="footerLinksRight">
						<p class="followUs">FOLLOW US AT</p>
						<p class="socialIcons">
							<a href="https://www.facebook.com/abhinavnpriyanka/" target="_blank">
								<img src="static/images/facebook.png"/>
							</a> &nbsp;
							<a href="https://www.instagram.com/abhipri_thejodhpuriparidhan" target="_blank">
								<img src="static/images/instagram.png"/>
							</a>
						</p>
					</div>
				</v-flex>
				<v-flex  sm12 lg12>
					<div class="clearfix text-sm-left"></div>
					<p class="copyright">Copyright © 2018 All rights Reserved by 
						<a href="http://purplestylelabs.com/" target="_blank" class="nav-link-text-color">Purple Style Labs</a>
					</p>
					<p class="termsLower">
						<a href="#terms" class="scrolltotop">Terms of use</a> · 
						<a href="#policy" class="scrolltotop">Privacy Policy</a>
					</p>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<style scoped>
.app-footer {
  background: #231f20;
  padding: 3em 3em;
  width: 100%;
}
.socail-white {
  color: #fff !important;
}
.app-footer .footerLinks {
  list-style-type: none;
  font-size: 14px;
  line-height: 27px;
  font-family: 'museosans';
  float: left;
  padding-left: 0;
}
a {
  color: #bf9e56;
  text-decoration: none;
}
.app-footer .footerLinks a {
  text-decoration: none;
  background-color: transparent;
  color: #bf9e56;
  cursor: pointer;
}
.app-footer .footerLinksRight {
  list-style-type: none;
  font-size: 14px;
  line-height: 27px;
  font-family: 'museosans';
  float: right;
  color: #fff;
}
.app-footer .socialIcons {
  float: right;
}
.termsLower {
  font-size: 13px;
  line-height: 27px;
  font-family: 'museosans';
}
.copyright {
  font-size: 12px;
  line-height: 27px;
  font-family: 'museosans';
  color: #bf9e56;
  margin-top: 5em;
  margin-bottom: 0;
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}
.socialIcons > a > img {
  width: 3em;
}
</style>