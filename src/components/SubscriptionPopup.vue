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
											<img class="img-height" src="data:image/png;base64,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"/>
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
