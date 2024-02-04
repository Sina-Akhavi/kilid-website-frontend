<template>
  <div class="container">
    <img src="../assets/background.jpeg" alt="Agency Image" class="background-image">
    <div class="form-container">
      <h1>Agency Information Form</h1>
      <form @submit.prevent="">
        <fieldset>
          <legend>Agency Details</legend>
          <label for="agencyName">Agency Name:</label>
          <input type="text" id="agencyName" v-model="agency.persianName" required />
          <br /><br />

          <label for="telephone">Telephone:</label>
          <input type="text" id="telephone" v-model="agency.phone" required />
          <br /><br />

          <label for="city">City:</label>
          <input type="text" id="city" v-model="agency.city" required />
          <br /><br />

          <label for="numberOfEmployees">Number of Employees:</label>
          <input
            type="number"
            id="numberOfEmployees"
            v-model="agency.numberOfEmployees"
            min="1"
            required
          />
          <br /><br />
        </fieldset>

        <fieldset>
          <legend>Manager Information</legend>
          <label for="managerName">First Name:</label>
          <input
            type="text"
            id="managerName"
            v-model="manager.managerFirstName"
            required
          />
          <br /><br />

          <label for="managerFamilyName">Family Name:</label>
          <input
            type="text"
            id="managerFamilyName"
            v-model="manager.managerLastName"
            required
          />
          <br /><br />

          <label for="managerTelephone">Telephone Number:</label>
          <input
            type="text"
            id="managerTelephone"
            v-model="manager.managerPhoneNumber"
            required
          />
          <br /><br />

          <label for="managerUsername">Manager Username:</label>
          <input
            type="text"
            id="managerUsername"
            v-model="manager.managerUsername"
            required
          />

          <br /><br />
        </fieldset>

        <fieldset>
          <legend>Password</legend>
          <label for="password">Create a Password:</label>
          <input type="password" id="password" v-model="password" required />
          <br /><br />
        </fieldset>

        <button @click="handleSubmit">Submit Information</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      agency: {
        persianName: "",
        phone: "",
        city: "",
        numberOfEmployees: 0,
      },
      manager: {
        managerFirstName: "",
        managerLastName: "",
        managerUsername: "",
        managerPhoneNumber: "",
      },
      password: "",
    };
  },
  methods: {
    handleSubmit() {

      console.log((JSON.stringify({
          persianName: this.agency.persianName,
          phone: this.agency.phone,
          city: this.agency.city,
          numberOfEmployees: this.agency.numberOfEmployees,
          managerUsername: this.manager.managerUsername,
          managerFirstName: this.manager.managerFirstName,
          managerLastName: this.manager.managerLastName,
          managerPhoneNumber: this.agency.managerPhoneNumber,
          password: this.password,
        })))


      fetch("http://localhost:8080/agency/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        mode: "no-cors",

        body: JSON.stringify({
          persianName: this.agency.persianName,
          phone: this.agency.phone,
          city: this.agency.city,
          numberOfEmployees: this.agency.numberOfEmployees,
          managerUsername: this.manager.managerUsername,
          managerFirstName: this.manager.managerFirstName,
          managerLastName: this.manager.managerLastName,
          managerPhoneNumber: this.agency.managerPhoneNumber,
          password: this.password,
        }),
      })
        .then((response) => {
          if (response.status === 201) {
            // Check for successful creation
            return response.json(); // Parse the response body (assuming it's JSON)
          } else {
            throw new Error("Agency Registration Failed."); // Handle other status codes
          }
        })
        .then((agency) => {
          // Handle successful registration (e.g., redirect to login, show success message)
          console.log("Agency created:", agency);
          this.$router.push({ name: 'AgencyProfile'});  
        })
        .catch((error) => {
          // Handle errors (e.g., display error message to user)
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
/* Reset browser styles for cleaner base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

h1 {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
}

fieldset {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 1rem;
}

legend {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
select {
  display: block;
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

input[type="number"] {
  width: 50px;
}

input[type="password"] {
  letter-spacing: 2px;
}

button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}

button:hover {
  background-color: #444;
}

/* Add additional styles for specific elements if needed */

.error {
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
}

.image-container {
  flex: 0 0 50%; /* Adjust image width as needed */
  background-color: #eee; /* Optional background color */
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 70%; /* Adjust image size as needed */
  height: auto;
}


.container {
  position: relative; /* Allow form to position over image */
  min-height: 100vh; /* Adjust height as needed */
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure image covers entire container */
}

.form-container {
  position: relative; /* Position form elements within container */
  z-index: 1; /* Ensure form appears above image */
  padding: 20px; /* Adjust spacing  from image edges */
  background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
  /* Other form styling as needed */
}

/* Existing form styles */
/* ... */


/* Apply your existing form styles here */

</style>
