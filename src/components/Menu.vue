<template>

    <div class="city-search-menu">
        <small id='label-input'>Enter the city, area or district</small>
        <div class="button-input-div">
            <button type="submit"><i class="fa fa-search"></i>Search</button>
            <input type="text" name="input-city" id="" placeholder="e.g. Niavaran ">
        </div>
    </div>

</template>

<script>

export default {
    name: 'Menu'   
}

</script>

<style scoped>

.city-search-menu {
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  left: 24rem;
  bottom: 5rem;
  background-color: white;
  padding: 28px 30px;
  border-radius: 5px;
}

#label-input {
  font-size: x-small;
}

.button-input-div button {
  background-color: brown;
  border-radius: 5px;
  padding: 5px;
  color: white;
}

.button-input-div input {
  margin-left: 2px;
  height: 6vh;
}

</style>
