<template>
    <div>
        <div class="images">
                <NasaImage v-bind:key="i" v-for="(item, i) in this.nasaImages" v-bind:item="item"></NasaImage>
        </div>
    </div>
</template>

<script>
import NasaImage from './NasaImage'
export default {
    name: 'AllImages',
    components: {
        NasaImage
    },
    props: {
        nasaImages: Array
    }
}
</script>

<style scoped>
/* * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } */
  .images {
      align-items: center;
      background-color: #000;
      display: flex;
      flex-direction: row-reverse;
      overflow: scroll;
  }
</style>