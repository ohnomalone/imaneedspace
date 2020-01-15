<template>
    <div>
        <div class="images">
                <SpaceImage v-bind:key="i" v-for="(item, i) in this.nasaImages" v-bind:item="item"></SpaceImage>
        </div>
    </div>
</template>

<script>
import SpaceImage from './SpaceImage'
export default {
    name: 'AllImages',
    components: {
        SpaceImage
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
  }
</style>