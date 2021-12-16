<template>
<div class="flexcontainer">
      <!-- navbar component -->
    <div class="navbar">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <router-link to="/Dashboard" >
              <a><li>Tableau de bord</li></a>
            </router-link>
            <router-link to="/Add" >
              <a><li>Ajout</li></a>
            </router-link>
            <router-link to="/favorite" >
              <a><li>Favoris</li></a>
            </router-link>
            <router-link to="/Fish" >
              <a><li>Poissondex</li></a>
            </router-link>
            <router-link to="/Logout" >
              <a><li>Déconnection</li></a>
            </router-link>
          </ul>
        </div>
      </nav>
      <h2 class="menu">TABLEAU DE BORD</h2>
    </div>

    <div>
          <!-- logout component -->
      <div class="background">
        <form @submit.prevent="register">
            <br>
          <h2 class="h2">Voulez vous vraiment<br>Vous déconnecter?</h2>
            <div class="activities">
                <div>
                  <router-link to="/Dashboard" >
                        <button class="nobtn">Non</button>
                    </router-link>
                </div>
              <div>
                <button class="yesbtn" @click="logout"><a>Oui</a></button>
              </div>
            </div>
          
        </form>
        <br><br>
      </div>
    </div>
      
  </div>
  
</template>


<script>
//importaion des modules de connexion 
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

//Construction de la méthode de déconnexion
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
  height: 120%;
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
  justify-content: space-around;
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
.nobtn {
  -webkit-border-radius: 10;
  -moz-border-radius: 10;
  border-radius: 10px;
  font-family: Arial;
  color: #7d7d7d;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  border: solid #262829 2px;
  text-decoration: none;
}

.nobtn:hover {
  background: #b5b5b5;
  background-image: -webkit-linear-gradient(top, #b5b5b5, #dedede);
  background-image: -moz-linear-gradient(top, #b5b5b5, #dedede);
  background-image: -ms-linear-gradient(top, #b5b5b5, #dedede);
  background-image: -o-linear-gradient(top, #b5b5b5, #dedede);
  background-image: linear-gradient(to bottom, #b5b5b5, #dedede);
  text-decoration: none;
}
.yesbtn {
  background: #d93434;
  background-image: -webkit-linear-gradient(top, #d93434, #b82b2b);
  background-image: -moz-linear-gradient(top, #d93434, #b82b2b);
  background-image: -ms-linear-gradient(top, #d93434, #b82b2b);
  background-image: -o-linear-gradient(top, #d93434, #b82b2b);
  background-image: linear-gradient(to bottom, #d93434, #b82b2b);
  -webkit-border-radius: 10;
  -moz-border-radius: 10;
  border-radius: 10px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  border: solid #e62222 2px;
  text-decoration: none;
}

.yesbtn:hover {
  background: #bd5a5a;
  background-image: -webkit-linear-gradient(top, #bd5a5a, #b84747);
  background-image: -moz-linear-gradient(top, #bd5a5a, #b84747);
  background-image: -ms-linear-gradient(top, #bd5a5a, #b84747);
  background-image: -o-linear-gradient(top, #bd5a5a, #b84747);
  background-image: linear-gradient(to bottom, #bd5a5a, #b84747);
  text-decoration: none;
}
</style>