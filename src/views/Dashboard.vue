<template>
<div class="flexcontainer">

    <div class="navbar">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#"><li>Tableau de bord</li></a>
            <a href="#"><li>Favoris</li></a>
            <a href="#"><li>Ajout</li></a>
            <a @click="logout" href="#"><li>Déconnection</li></a>
          </ul>
        </div>
      </nav>
      <h2 class="menu">TABLEAU DE BORD</h2>
    </div>

    <div>
      <div class="background">
        <form @submit.prevent="register">
            <br><br>
          <h2 class="h2">Progression</h2>
          <img src="../assets/img/Progres.png"/>
          <h2 class="h2">Dernière activités</h2>
            <div class="activities">
                <div>
                  <img class="fish" src="../assets/img/fish1.jpg"/>
                </div>
              <div>
                <img class="fish" src="../assets/img/fish2.jpg"/>
              </div>
            </div>
          <h2 class="h2">Autour de vous</h2>
            <img class="lake" src="../assets/img/lake.png"/>
        </form>
      </div>
    </div>
      
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
}

</script>

<style>

.flexcontainer{
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:10%;
}
.background{
  margin-top: 10%;
  border-color: grey;
  border-width: 5px;
  border-radius: 30px;
  height: 90%;
  background-color: #ffffff;
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
.h2{
  color: grey;
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
.lake{
  width: 80%;
  height: 60%;
}
.activities{
  justify-content: center;
  flex-direction: row;
  display: flex;
}
.fish{
  width: 90%;
  height: 90%;
}
.navbar{
  margin-top: -10%;
  color: #ffffff;
  border-width: 5px;
  width: 100%;
  height: 100%;
  background-color: #33bb77;
  background-size: cover;
  display: flex;
  flex-direction: column;
}
.menu{
  color: #ffffff;
}
#menuToggle
{
  display: block;
  position: relative;
  top: 50px;
  left: 50px;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a
{
  text-decoration: none;
  color: #232323;
  
  transition: color 0.3s ease;
}

#menuToggle a:hover
{
  color: tomato;
}


#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; 
  z-index: 2;
  
  -webkit-touch-callout: none;
}
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #cdcdcd;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}
#menu
{
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background: #f0f0f0;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0); 
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}
#menu li
{
  padding: 10px 0;
  font-size: 22px;
}
#menuToggle input:checked ~ ul
{
  transform: none;
}
</style>