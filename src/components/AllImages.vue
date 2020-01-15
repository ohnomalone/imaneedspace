<template>
    <div>
        <div class="images">
                <NasaImage class="nasaImages" v-bind:key="i" v-for="(item, i) in this.nasaImages" v-bind:item="item"></NasaImage>
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
  .images {
    align-items: center;
    background-color: #000;
    display: flex;
    flex-direction: row-reverse;
    overflow: scroll;
    scroll-snap-type: x mandatory;
    scroll-snap-type: mandatory; /* Firefox */  
    -ms-scroll-snap-type: mandatory; /* IE/Edge */  
    -webkit-scroll-snap-type: x mandatory; /* Safari */  
    -webkit-scroll-snap-destination: 0% 0%;  
    -webkit-overflow-scrolling: touch; /* important for iOS */ 
  }
  .nasaImages {
    scroll-snap-align: center;
  }
</style>