<template>
  <div class="img_container">
      <img src="../assets/background.jpeg" alt="">
      <PageTitle/>
      <Menu/>
  </div>
</template>


<script>
import Menu from './Menu.vue'
import PageTitle from './PageTitle.vue'

export default {
  name: 'PageImage',
  components: {
    Menu,
    PageTitle
  }
}
</script>

<style>

div img {
  width: 100%;
  height: 60vh;
  background-position: center;
  background-size: cover;
  border-radius: 4px;
}

  .img_container {
    position: relative;
}

</style>

  
  