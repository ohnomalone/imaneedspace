<template>
    <div class="image-card">
        <img class="image" v-bind:alt="item.title" v-bind:src="item.url">
        <div class="text-holder">
            <p class="image-card-title">{{this.changeDateFormat(item.date)}}</p>
            <p class="image-card-title">{{item.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NasaImage',
    props: {
        item: Object
    },
    methods: {
        changeDateFormat(date) {
            const newDate = new Date(date)
            const day = date.slice(8);
            const monthAndDate = newDate.toString().slice(4,8)
            const year =  newDate.toString().slice(11,15)
            if (new Date(Date.now()).getDate() === parseInt(date.slice(8))) {
                return `Today, ${monthAndDate} ${day} ${year}`
            } else {
                return `${monthAndDate} ${day} ${year}`
            }
        },
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .image-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      position: relative;
      scroll-snap-align: center;
      scroll-snap-coordinate: 0% 0%; /* older (Firefox/IE) */  
        -webkit-scroll-snap-coordinate: 0% 0%; /* older (Safari) */  
  }
  .image {
      height: 95vh;
      margin: 15px 0;
      padding: 0 2%;
      position: relative;
      width: 100vw;
  }
  .text-holder {
      display: flex;
      flex-direction: column;
      align-content: flex-end;
      align-items: flex-end;
      width: 100%;
      margin-right: 30px;
      position: absolute;
      bottom: 20px;
      right: 10px;
  }
  .image-card-title {
      color: #fff;
  }
</style>