<template>
  <div id="app">
    <!--<div id="nav">-->
    <!--</div>-->
    <router-view/>
  </div>
</template>

<script>
  //https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

  html, body, pre {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(41, 47, 54);
  }

  #app {
    display: grid;
    align-items: center;
    /*margin: 25vh auto;*/
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
  }
  a {
    font-weight: bold;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  a,
  a:visited {
    color: #111111;
    display: inline-block;
    position: relative;
    text-decoration: none;
    transition: color .5s ease-in;
  }

  a:focus,
  a:hover,
  a:visited:focus,
  a:visited:hover {
    outline: none;
    text-decoration: none;
    cursor: pointer;
    color: black;
  }

  a:after,
  a:visited:after {
    /*TODO: Personalize Color*/
    background-color: hsla(161, 51%, 57%, .4);
    content: "";
    display: block;
    height: 14px;
    position: absolute;
    top: 50%;
    transform: scaleX(0);
    transform-origin: right center;
    width: 90%;
    transition: transform .55s cubic-bezier(.19, 1, .22, 1)
  }


  a:focus:after,
  a:hover:after,
  a:visited:focus:after,
  a:visited:hover:after {
    transform: scaleX(1);
    transform-origin: left center
  }
</style>