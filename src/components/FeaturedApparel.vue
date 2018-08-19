<template>
	<v-container grid-list-md text-xs-center container-featued-bg>
		<v-layout row wrap>
			<v-flex xs12>
				<h3 class="text-md-center featuredApparelsHead featued-title">Featured Apparels</h3>
			</v-flex>
			<v-flex v-for="(item,i) in items" :key="`${i}`" lg4 sm12>
				<div>
					<img class="img-fluid" alt="" v-bind:src="item.src"/>
				</div>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
  export default {
    props: ['items']
  }
</script>
 <style scoped>
 .featued-title{
  text-align: center;
    margin-bottom: 3em;
    margin-top: 4em;
    text-transform: uppercase;
    color: #ba9e56;
    font-family: inknutAntiqua;
    font-size: 20px;
}
 </style>
 

