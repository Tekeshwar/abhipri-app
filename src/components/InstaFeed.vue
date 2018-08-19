<template>
	<div class="instagram container-featued-bg">
		<v-container grid-list-md text-xs-center container-featued-bg>
			<v-layout row wrap>
				<v-flex xs12>
					<h3 class="text-md-center featuredApparelsHead featued-title">INSTAGRAM</h3>
				</v-flex>
			</v-layout>
		</v-container >
		<div class="container desktopInsta">
			<div class="carousel-box">
				<v-layout wrap align-center>
          <v-container hidden-md-and-up >
					<v-carousel hide-delimiters>
						<v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
					</v-carousel>
          </v-container>
          <v-container hidden-sm-and-down >
					<v-carousel hide-controls>
						<v-carousel-item :key="i" v-for="i in Math.ceil(items.length/3.0)">
							<v-container >
								<v-layout row>
									<v-flex xs3 :key="j" v-for="j in 4">
										<img :src="items[j-1].src" alt="">
										</v-flex>
									</v-layout>
								</v-container>
							</v-carousel-item>
						</v-carousel>
          </v-container >
					</v-layout>
				</div>
			</div>
		</div>
	</template>
<script>
import {
    getInstaData
} from '@/api/api.js'
export default {
  data () {
    return {
      items: []
    }
  },
  created () {
    getInstaData().then(response => {
      this.items = response.data.items
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
 .container-featued-bg {
  background-color: #ba9e56;
}
.featued-title {
  text-align: center;
  margin-top: 3em;
  text-transform: uppercase;
  color: #fff;
  font-family: inknutAntiqua;
  font-size: 20px;
}
.v-carousel {
  height: 350px !important;
}
</style>
