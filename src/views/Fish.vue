<template>
  <form class="search-container">
    <input
      type="text"
      id="search-bar"
      placeholder="Veuillez entrer un nom de poisson"
    />
    <a href="#"
      ><img
        class="search-icon"
        src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
    /></a>
  </form>

  <div class="fishcontainer">
    <p>Hey !</p>
  </div>
</template>

<script>
</script>

<style>
body {
  padding-top: 75px;
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