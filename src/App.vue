<template>
<div class="closed"> 
  <router-view />
</div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Successfully logged out");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
          this.$router.push("/");
        });
    },
  },
};
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
}

input {
  margin-right: 20px;
}
body{
  background: url("assets/img/background.jpg") no-repeat center center  fixed;
-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: 0%;
}
html{
  width: 100%;
  height: 100%;
}
</style>
