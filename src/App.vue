<template>
  <div class="closed">
    <router-view />
  </div>
</template>

<script>

</script>

<style>
.closed {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0%;
  border: 0ch;
  overflow: hidden;
}

input {
  margin-right: 20px;
}
body {
  background: url("assets/img/background.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: 0%;
}
html {
  width: 100%;
  height: 80%;
}
</style>
