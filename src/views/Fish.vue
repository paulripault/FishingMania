<template>
<div>
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
        <!-- Searchbar component -->
    <div>
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">

      <!-- Contenus de la Search bar -->
<ul id="myUL">
  <li><a href="#">Truite</a></li>
  <li><a href="#">Esturgeon</a></li>

  <li><a href="#">Gardon</a></li>
  <li><a href="#">Carpe</a></li>

  <li><a href="#">Ecrevisse</a></li>
  <li><a href="#">Blackbass</a></li>
  <li><a href="#">Brochet</a></li>
</ul>
  </div>
  </div>
  
</template>

<script>
//fonction permettant le tri des éléments pour les sélectionner en fonction de l'entré de l'input de la search bar
/*function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}*/

</script>

<style>
body {
  padding-top: 75px;
}

* {
  box-sizing: border-box;
}

#myInput {
  background-image: url('/css/searchicon.png');
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}

#myUL {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#myUL li a {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block
}

#myUL li a:hover:not(.header) {
  background-color: #eee;
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



.search-container {
  width: 490px;
  display: block;
  margin: 0 auto;
}

input#search-bar {
  margin: 0 auto;
  width: 100%;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #d0cfce;
  outline: none;
  &:focus {
    border: 1px solid #008abf;
    transition: 0.35s ease;
    color: #008abf;
    &::-webkit-input-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &::-moz-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &:-ms-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
  }
}

.search-icon {
  position: relative;
  float: right;
  width: 75px;
  height: 75px;
  top: -62px;
  right: -45px;
}
</style>