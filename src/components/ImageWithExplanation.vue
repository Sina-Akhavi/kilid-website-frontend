<template>
  <div class="image-explanation-container">
    <div class="image-container">
      <img src="../assets/images.jpeg" alt="Image" />
    </div>
    <div class="explanation-container">
      
      <p><b>Facilities: </b>parking rooms, balcony, Lobby</p>
      <p class="price-p"><b>Price: </b> 16600$</p>
      <p><b><i class="fas fa-map-marker-alt"></i>Address: </b> Pasdaran, Tehran</p>
    </div>

  </div>

  <div class="image-explanation-container">
    <div class="image-container">
      <img src="../assets/images2.jpeg" alt="Image" />
    </div>
    <div class="explanation-container">
      <h2>A luxurious house filled with Facilities</h2>
      <p>facilities including parking, rooms, balcony, Lobby</p>
    </div>
  </div>

  <div class="image-explanation-container">
    <div class="image-container">
      <img src="../assets/images3.jpeg" alt="Image" />
    </div>
    <div class="explanation-container">
      <h2>A fascinating house filled with Facilities</h2>
      <p>facilities including parking, rooms, balcony, Lobby</p>
    </div>
  </div>

  <div class="image-explanation-container">
    <div class="image-container">
      <img src="../assets/images4.jpeg" alt="Image" />
    </div>
    <div class="explanation-container">
      <h2>A spacious house filled with Facilities</h2>
      <p>facilities including parking, rooms, balcony, Lobby</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "ImagesWithExplanations",
};
</script>

<style scoped>
.image-explanation-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Adjust spacing as needed */
  border: 2px solid gray;
}

.image-container {
  flex: 0 0 50%; /* Adjust image width as needed */
}

.image-container img {
  width: 71%; /* Ensure image takes full width */
  height: 53vh; /* Maintain aspect ratio */
}

.explanation-container {
  flex: 1; /* Take remaining space */
  padding: 2px; /* Adjust spacing as needed */
}

.explanation-container p {
    padding: 10px;
}

p.price-p {
    color: brown;
}
</style>
