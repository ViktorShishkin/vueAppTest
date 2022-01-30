<script setup>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<style>
body {
  margin: 0px !important;
  background-color: #14110E;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  /* font-weight: bold; */
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #C99E71;
}
p {
  margin: 0;
}
</style>
