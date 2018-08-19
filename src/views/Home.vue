<template>
	<div>
    <v-flex hidden-sm-and-down >
		    <TopCarousel v-bind:items="topCarouselItems"/>
    </v-flex>
     <v-flex hidden-md-and-up >
        <TopCarouselMini v-bind:items="topCarouselItems"/>
     </v-flex>
		<FeaturedApparel v-bind:items="featuredApparelItems"/>
		<LegacyBlack/>
		<InstaFeed/>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        featuredApparelItems: [
          {
            src: 'http://d1omq7rgi4bf9x.cloudfront.net/THUMB_d007180b1f98497492d9cac8db811c73.jpg'
          },
          {
            src: 'http://d1omq7rgi4bf9x.cloudfront.net/THUMB_753777d367834e7ab51a58635d26e43c.jpg'
          },
          {
            src: 'http://d1omq7rgi4bf9x.cloudfront.net/THUMB_4975003a43864f248de22c38cde036b9.jpg'
          }
        ],
        topCarouselItems: [
          {
            src: 'http://abhipri.com/images/abhipri-home-banner-3.png'
          },
          {
            src: 'http://abhipri.com/images/abhipri-home-banner-2.png'
          },
          {
            src: 'http://abhipri.com/images/abhipri-home-banner-1.png'
          }
        ]
      }
    },
    components: {
      TopCarousel: () => import('@/components/TopCarousel.vue'),
      TopCarouselMini: () => import('@/components/TopCarouselMini.vue'),
      FeaturedApparel: () => import('@/components/FeaturedApparel.vue'),
      LegacyBlack: () => import('@/components/LegacyBlack.vue'),
      InstaFeed: () => import('@/components/InstaFeed.vue')
    }
  }
</script>
<style scoped>
.featuredApparelsHead {
    text-align: center;
    margin-bottom: 3em;
    margin-top: 4em;
    text-transform: uppercase;
    color: #ba9e56;
    font-family: inknutAntiqua;
    font-size: 20px;
}
</style>
