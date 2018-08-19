<template>
	<v-app>
		<v-toolbar
      app
      :clipped-left="clipped"
      dark
      class="bg-abhi-apri-color"
    >
			<v-toolbar-title>
				<router-link class="nav-link-text-color" to="/">
					<img src="static/images/abhipri-logo.png" class="img-fluid"/>
				</router-link>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn flat>
					<router-link class="nav-link-text-color" to="/">Home</router-link>
				</v-btn>
				<v-btn flat>
					<router-link class="nav-link-text-color" to="/apparel">Apparels</router-link>
				</v-btn>
				<v-btn flat>
					<router-link class="nav-link-text-color" to="/contact">Contact us</router-link>
				</v-btn>
				<v-btn flat>
					<router-link class="nav-link-text-color" to="/cart">Cart</router-link>
				</v-btn>
				<v-btn flat>
					<router-link class="nav-link-text-color" to="/login-signup">Login/Signup</router-link>
				</v-btn>
			</v-toolbar-items>
			<v-btn class="hidden-md-and-up navbar-toggler" icon @click.stop="rightDrawer = !rightDrawer">
				<v-icon>menu</v-icon>
			</v-btn>
		</v-toolbar>
		<v-content>
			<router-view/>
		</v-content>
		<v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
			<v-list>
				<v-list-tile class="nav-link-text-color">
					<v-list-tile-title>
						<router-link class="nav-link-text-color" to="/">Home</router-link>
					</v-list-tile-title>
				</v-list-tile>
				<v-list-tile class="nav-link-text-color">
					<v-list-tile-title>
						<router-link class="nav-link-text-color" to="/apparel">Apparels</router-link>
					</v-list-tile-title>
				</v-list-tile>
				<v-list-tile class="nav-link-text-color">
					<v-list-tile-title>
						<router-link class="nav-link-text-color" to="/contact">Contact us</router-link>
					</v-list-tile-title>
				</v-list-tile>
				<v-list-tile class="nav-link-text-color">
					<v-list-tile-title>
						<router-link class="nav-link-text-color" to="/cart">Cart</router-link>
					</v-list-tile-title>
				</v-list-tile>
				<v-list-tile class="nav-link-text-color">
					<v-list-tile-title>
						<router-link class="nav-link-text-color" to="/login-signup">Login/Signup</router-link>
					</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<FooterBlock/>
		<SubscriptionPopup/>
		 <v-progress-circular
      :size="60"
      :width="5"
      color="purple"
      indeterminate class="loading"
			v-if="loading"
    ></v-progress-circular>
	</v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      dialog: false,
      loading: false
    }
  },
  name: 'App',
  components: {
    FooterBlock: () => import('@/components/Footer.vue'),
    SubscriptionPopup: () => import('@/components/SubscriptionPopup.vue')
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
.img-fluid {
  width: 12em;
}
.bg-abhi-apri-color,.v-navigation-drawer--temporary {
  background-color: #231f20 !important;
}
.navbar-toggler {
    background: #bf9e56 !important;
    color: rgba(0,0,0,.5);
    border-color: rgba(0,0,0,.1);
}
.nav-link-text-color {
    color: #ba9e56 !important;
    text-transform: uppercase;
    font-size: 15px;
    width: 12em;
    text-align: center;
    text-decoration: none;
}
  .loading {
      z-index: 9999;
      position: fixed;
      display: inline-block;
      background-color: white;
      padding: 20px 50px;
      border-radius: 12px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      left: 50%;
      top: 50%;
      -ms-transform: translate(-50%,-50%);
      -moz-transform: translate(-50%,-50%);
      -webkit-transform: translate(-50%,-50%); 
      transform: translate(-50%,-50%);
  }
</style>

