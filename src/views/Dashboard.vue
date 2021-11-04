<template>
  <div>
    <h2>Tableau de bord</h2>
    <p>Cet page est visible seulement par les utilisateurs connecté</p>
    <button @click="logout">Logout</button>
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
