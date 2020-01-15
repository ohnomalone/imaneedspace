<template>
    <div class="images">
        <SpaceImage images:this.nasaImages />
    </div>
</template>

<script>
import SpaceImage from './SpaceImage'
export default {
    name: 'AllImages',
    components: {
        SpaceImage
    },
    props: ['nasaImages']
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .images {
      align-items: center;
      background-color: white;
      display: flex;
      flex-direction: row-reverse;
  }
</style>