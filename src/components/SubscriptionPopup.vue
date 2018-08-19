<template>
	<div class="text-xs-center" >
		<v-dialog persistent  v-model="dialog" class="model-height" width="550">
			<v-card class="model-bg">
      

				<v-container grid-list-md text-xs-center>
					<v-layout row wrap style="margin: -24px;">
            
						<v-flex xs5>
							<v-card>
              
								<v-card-text class="px-0">
									<div class="top_box" style="font-size: 22px;line-height: 30px;">
										<span>
											<img class="img-height" src="/static/images/_gmail.png"/>
										</span>
										<p class="black--text p-signup" subheading>SIGN UP FOR OUR </p>
										<p class="black--text p-new" subheading>NEWSLETTTER </p>
										<p class="p-details" caption>Be the first to know about ASICS 
                 exclusive offers. products and more. 
                Free shopping on all orders over $50 </p>
									</div>
								</v-card-text>
							</v-card>
						</v-flex>
						<v-flex xs7>
							<v-card height="100%">
                            <v-btn absolute  light     top    right 
         @click="dialog = false"  icon color="white" style="top: 0px; right:0px;">
              <v-icon>close</v-icon>  </v-btn>
								<v-card-text class="px-0">
									<v-flex xs12 sm12 md12>
										<v-text-field class="text-margin" placeholder="Full Name"></v-text-field>
									</v-flex>
									<v-flex xs12 sm12 md12>
										<v-text-field class="text-margin" placeholder="Contact No."></v-text-field>
									</v-flex>
									<v-flex xs12 sm12 md12>
										<v-text-field class="text-margin" placeholder="Email"></v-text-field>
									</v-flex>
									<v-flex xs12 sm12 md12>
										<v-btn class="text-margin" color="btn-color">SING UP NOW</v-btn>
									</v-flex>
								</v-card-text>
        
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card>
		</v-dialog>
	</div>
</template>
<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  mounted () {
    var self = this
    setTimeout(() => {
      self.dialog = true
    }, 6000)
  }
}
</script>
<style scoped>
.imagebkg_box {
  white-space: nowrap;
  word-wrap: break-word;
  display: inline-block;
  position: absolute;
  height: 100%;
  background-size: 100% auto;
  background-color: #4285f4;
  background: linear-gradient(141deg, #4285f4 0%, #2eb0ce 51%, #3fc7e6 75%);
}
.img-height {
  height: 64px;
}
.text-margin {
  margin-top: 0px;
}
.model-bg {
  background-color: rgba(0,0,0,.87) !important;
}
.model-height {
  max-height: 100%;
  height: auto;
}
.p-new {   
  font-family: -webkit-pictograph;
}
.p-signup {
  font-weight: bold;
}
.p-details {
font-family: -webkit-pictograph;
    color: rgba(0,0,0,.87);
    padding: 1%;
}
.btn-color {
  background-color: #ba9e56 !important;
}
.dialog-close-btn{
  background-color: #27232352;
    border-radius: 30px;
    margin-top: -10px !important;
}
</style>
