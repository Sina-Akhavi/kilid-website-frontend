<template>
  <form class="estate-form" @submit.prevent="handleTemperory">
    <h2>Property Information</h2>

    <div class="field">
      <label for="city">City:</label>
      <input type="text" id="city" name="city" v-model="city" />
    </div>

    <div class="field">
      <label for="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="Street address, City, State/Province"
        v-model="address"
      />
    </div>

    <div class="field">
      <label for="bedrooms">Bedrooms:</label>
      <input
        type="number"
        id="bedrooms"
        name="bedrooms"
        min="1"
        v-model="bedrooms"
      />
    </div>

    <div class="field">
      <label for="bathrooms">Bathrooms:</label>
      <input
        type="number"
        id="bathrooms"
        name="bathrooms"
        min="0.5"
        step="0.5"
        v-model="bathrooms"
      />
    </div>

    <div class="field">
      <label for="square-footage">Square Footage:</label>
      <input type="number" id="square-footage" name="square_footage" />
    </div>

    <div class="field">
      <label for="mortgage-price">Mortgage Price:</label>
      <input type="number" id="mortgage-price" name="mortgage_price" />
    </div>

    <div class="field">
      <label for="rental-price">Rental Price:</label>
      <input type="number" id="rental-price" name="rental_price" />
    </div>

    <div class="field">
      <label for="property-type">Property Type:</label>
      <select id="property-type" name="property_type" v-model="propertyType">
        <option value="">-- Select --</option>
        <option value="residential">residential</option>
        <option value="commercial">commercial</option>
        <option value="official">official</option>
        <option value="industrial">industrial</option>
      </select>
    </div>

    <div class="field">
      <label>Facilities:</label>
        
      <div>
        <input type="checkbox" id="lobby" name="facilities[]" value="lobby" v-model="facilities"/>
        <label for="lobby" class="check-box-label">Lobby</label>
      </div>
      
      <div>
        <input
          type="checkbox"
          id="parking"
          name="facilities[]"
          value="parking"
          class="checkbox-class"
          v-model="facilities"
        />
        <label for="parking" class="check-box-label">Parking</label>
      </div>
      <div>
        <input type="checkbox" id="gym" name="facilities[]" value="gym"
             class="checkbox-class" v-model="facilities"/>
        <label for="gym" class="check-box-label">Sports Gym</label>
      </div>
    </div>

    <div class="field">
      <label>Conditions:</label>
        
      <div>
        <input type="checkbox" id="collaborative" name="conditions[]" value="collaborative" v-model="conditions"/>
        <label for="collaborative" class="check-box-label">collaborative</label>
      </div>
      
      <div>
        <input
          type="checkbox"
          id="exchange"
          name="conditions[]"
          value="exchange"
          class="checkbox-class"
          v-model="conditions"
        />
        <label for="exchange" class="check-box-label">Exchange</label>
      </div>

      <div>
        <input type="checkbox" id="presell" name="conditions[]" value="presell" class="checkbox-class" v-model="conditions"/>
        <label for="presell" class="check-box-label">Presell</label>
      </div>
    </div>

    <h2>Contact Information</h2>
    <div class="field">
      <label for="name">Full Name:</label>
      <input type="text" id="name" name="name"/>
    </div>

    <div class="field">
      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email"/>
    </div>

    <div class="field">
      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone"/>
    </div>

    <!-- <button type="submit">Submit Inquiry</button> -->
    <button>Submit Inquiry</button>
  </form>
</template>

<script>
export default {
  name: "EstateForm",

  data() {
    return {
      city: "",
      address: "",
      bedrooms: 0,
      bathrooms: 0,
      squareFootage: 0,
      mortgagePrice: "",
      rentalPrice: 0,
      propertyType: "",
      name: "",
      emailAddress: "",
      phone: "",
      facilities: [],
      conditions: []
    };
  },

  methods: {
    handleTemperory() {
      console.log(this.city);
      console.log(this.address);
      console.log(this.propertyType);
      console.log(this.bedrooms);
      console.log(this.bathrooms);
      
      console.log(this.facilities);
      console.log(this.conditions);


    },
  },
};
</script>

<style>
.estate-form {
  width: 500px; /* Adjust width as needed */
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  text-align: center;
}

.field {
  margin-bottom: 15px;
  display: flex;
  align-items: baseline;
}

.field label {
  width: 150px;
  text-align: right;
  margin-right: 10px;
  font-weight: bold;
}

input,
select {
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 200px; /* Adjust width as needed */
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

button {
  background-color: #4a90e2;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
}

button:hover {
  background-color: #3a7eb2;
}

.checkbox-class {
    width: 100px;
}

.check-box-label {
    font-size: smaller;
}
/* .field {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
} */
</style>