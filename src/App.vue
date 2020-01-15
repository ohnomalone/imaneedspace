<template>
  <div>
    <div id="app">
      <Header/>
      <AllImages class="allImages" images:this.nasaImages />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import AllImages from './components/AllImages'
import { getSpaceImages } from './apiCall'

export default {
  name: 'app',
  components: {
    Header,
    AllImages
  },
  methods: {
    getDate() {
      const endDate = Date.now();
      const newEndDate = new Date(endDate);
      const endYear = newEndDate.getFullYear().toString();
      const endMonth = this.checkDateLength(newEndDate.getMonth()+1);
      const endDay = this.checkDateLength(newEndDate.getDate());
      const endDateReturn = `${endYear}-${endMonth}-${endDay}`
  
      const startDate = endDate - 2592000000;
      const newStartDate = new Date(startDate);
      const startYear = newStartDate.getFullYear().toString();
      const startMonth = this.checkDateLength(newStartDate.getMonth()+1);
      const startDay = this.checkDateLength(newStartDate.getDate());
      const startDateReturn = `${startYear}-${startMonth}-${startDay}`

      return {startDate: startDateReturn, endDate: endDateReturn}
    },
    checkDateLength(date) {
      const dateToString = date.toString()
      if (!(dateToString.length > 1)) {
        return '0' + dateToString
      } else {
        return dateToString
      }
    }
  },
  mounted() {
  getSpaceImages(this.getDate())
    .then( res => this.nasaImages = res)

  this.getDate()
  },
  data: function() {
    return {
      nasaImages: []
    }
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Titillium Web', sans-serif;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
