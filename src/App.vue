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

    <div class="img_container">
      <img src="./assets/images.jpeg" alt="">

      <div class="city-search-menu">
        <p for="label-input-city">Enter the city, area or district</p>
        
        <button type="submit">Search</button>
        <input type="text" name="input-city" id="">
      </div>
    </div>
  </nav>

  

</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

nav {
  width: 100%;
  height: 70px;
  line-height: 70px;
  padding: 0x 100px;
  position: fixed;  
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

.city-search-menu {
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  left: 27rem;
  bottom: 5rem;
  background-color: white;
  padding: 0px 30px;
  border-radius: 5px;

}

</style>
