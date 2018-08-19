<template>
    <div class="carousel-box">
        <v-layout wrap align-center>
        <v-carousel hide-controls class="carousel-controls-bg">
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
        </v-carousel>
        </v-layout>
    </div>
</template>
<script>
  export default {
    props: ['items']
  }
</script>
<style scoped>
.carousel-box {
 padding-bottom: -100px;
 border-bottom: solid 9px #bf9e56;
}
.v-carousel {
    height: 128px !important;
}
</style>
