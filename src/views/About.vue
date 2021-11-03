<template>
  <div class="flexcontainer">
    <div class="background">
    <form @submit.prevent="register">
      <br><br>
      <h2>S'enregistrer</h2>
      <div><input type="email" class="inpt" placeholder="Email address..." v-model="email" /></div>
      <div><input type="password" class="inpt" placeholder="password..." v-model="password" /></div>
      <div><button type="submit" class="btn">S'enregistrer</button> </div>
      <router-link to="/CGU" >
      <div class="title">Condition générale d'utilisation</div>
      </router-link>
      <router-link to="/">
      <div class="title">Se connecter</div>
      </router-link>

    </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      console.log(firebase.app);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Votre compte à bien été créer, veuillez vous enregistrer.");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style>

.flexcontainer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:20%;
}
.background{
  border-color: grey;
  border-width: 5px;
  border-radius: 30px;
  width: 600px;
  height: 350px;
  background-color: #33bb77;
  background-size: cover;
  display: flex;
  flex-direction: column;
}
.inpt{
  background-color: #ffffff;
  border-color: grey;
  border-width: 2px;
  border-radius: 2px;
  width: 30%;
  height: 25px;
  margin-top: 6px;
}
h2{
  color: white;
}
.btn{
  border-color: #33bb77;
  border-width: 2px;
  border-radius: 10px;
  color:#33bb77;
  background-color: #ffffff;
  width: 30%;
  height: 30px;
  margin-top: 6px;
  margin-right: 22px;
}
.title{
  margin-top: 10px;
  text-decoration: none;
}
.title:link {
  text-decoration: none;
}

.title:visited {
  text-decoration: none;
}

.title:hover {
  text-decoration: underline;
}

.title:active {
  text-decoration: underline;
}

</style>
