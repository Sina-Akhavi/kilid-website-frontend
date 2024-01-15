<template>
  <nav>

    <div class="logo">
      <p>Kilid</p>
    </div>

    <ul>
      <li><a href="#">Purchase</a></li>
      <li><a href="#">Sale</a></li>
      <li><a href="#">Mortgage</a></li>
      <li><a href="#">Price of your home</a></li>
      <li><a href="#">Housing market</a></li>
      <li><a href="#">Estate Agencies</a></li>
    </ul>

  </nav>
</template>


<script>

export default {
  name: 'Navbar',
}
</script>

<style scoped>

nav {
  width: 100%;
  height: 70px;
  line-height: 70px;
  padding: 0x 100px;
  position: relative;  
  background-image: linear-gradient(#033747, #012733);
}

nav .logo p {
  font-size: 30px;
  font-weight: bold;
  float: left;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1.5px;
  padding: 0px 30px;
}

nav li {
  display: inline-block;
  list-style: none;
}

nav ul {
  float: right;
} 

nav ul a {
  font-size: 14px;
  color: white;
  padding: 0px 10px;
  text-transform: uppercase;
  text-decoration: none;
}

nav ul a:hover {
  color: #ff8c69;
  transition: all 0.4s ease 0s;
}

</style>

  
  