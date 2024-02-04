<template>
  <Navbar/>
  
  <router-link to="/"></router-link>
  <router-link to="/estates"></router-link>
  <router-link to="/agency-form"></router-link>
  <router-link to="/login-user"></router-link>

  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import PageImage from './components/PageImage.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    PageImage
  },
}
</script>

<style>

*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

</style>
