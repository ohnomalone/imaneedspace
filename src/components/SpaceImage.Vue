<template>
    <div class="image-card">
        <img class="image" v-bind:alt="item.title" v-bind:src="item.url">
        <p class="image-card-title">{{item.title}}</p>
    </div>
</template>

<script>
export default {
    name: 'SpaceImage',
    props: {
        item: Object
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
  }
  .image {
      height: 90vh;
      margin: 15px;
  }
  .image-card-title {
      color: #fff;
  }
</style>