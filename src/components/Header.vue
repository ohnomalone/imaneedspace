<template>
    <header class="header">
        <div class='logo-title'>
            <h1 class="title">I'ma need space</h1>
            <img alt="NASA 60th Year Logo" src="../assets/nasa_logo.png">
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web:300,400&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
.header {
    background-color: #000;
    width: 100%;
    position: fixed;
    padding: 5px;
    z-index: 10;
}
.logo-title {
    display: flex;
    justify-content: center;
    color: white;
    align-items: center;
}
img {
    height: 25px;
    margin-left: 10px;
}
title {
    font-family: 'Titillium Web', sans-serif;
}
</style>