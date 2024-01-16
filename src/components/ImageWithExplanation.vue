<template>

  <div class="image-explanation-container" v-for="house in houses" :key="house.path">
    <div class="image-container">
      <img :src="house.path" alt="Image" />
    </div>

    <div class="explanation-container">
          
      <p><b>explanation: </b>{{ house.explanation }}</p>
      <p class="price-p"><b>Price: </b> {{ house.price }}$</p>
      <p><b><i class="fas fa-map-marker-alt"></i>Address: </b> {{ house.address }} </p>
       <div class="feature-buttons">
        <button v-for="feature in house.features" :key="feature">{{ feature }}</button>
        
       </div>
       <hr>

       <i class="fa-solid fa-share-nodes" id="share-node"></i>
       <i class="fa-solid fa-bookmark" id="book-mark"></i>
    </div>
  </div>

</template>

<script>
export default {
  name: "ImagesWithExplanations",
  data() {
    return {
        houses: [
            {
                path: "../images/images.jpeg",
                explanation: "phase8 - 2 rooms",
                price: 16600,
                address: "16 Pasdaran, Tehran",
                features: ['balcony', '135m', 'residential']
            },
            {
                path: '../images/images1.jpeg',
                explanation: "phase8 - 2 rooms",
                price: 20000,
                address: "18 niyavaran, Tehran",
                features: ['balcony', '135m', 'residential']
            },
            {
                path: "../images/images2.jpeg",
                explanation: "phase8 - 2 rooms",
                price: 25000,
                address: "25 Eslamshahr, Tehran",
                features: ['lobby', '400', 'residential', 'negotiable']
            },
            {
                path: "../images/images3.jpeg",
                explanation: "phase8 - 2 rooms",
                price: 35700,
                address: "14 Azadi, Esfahan",
                features: ['2 rooms', 'parking', 'commercial']
            },
            {
                path: "../images/images4.jpeg",
                explanation: "phase8 - 2 rooms",
                price: 16600,
                address: "16 Pasdaran, Tehran",
                features: ['sports gym', '135m', 'residential']
            },
        ]
    }
  }
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
  /* flex: 1; Take remaining space */
  padding: 2px; /* Adjust spacing as needed */
}

.explanation-container p {
    padding: 10px;
}

p.price-p {
    color: brown;
}

.feature-buttons button {
    padding: 2px 5px;
    color: rgb(185, 175, 175);
    margin-right: 5px;
    border: none;
    border-radius: 5px;
    margin-top: 30px;
}

hr {
    margin-top: 15px;
}

#share-node {
    margin-right: 30px;

}

#share-node:hover, #book-mark:hover {
    cursor:pointer;
    color: brown;
    transition: all 0.4s ease 0s;
}

</style>
