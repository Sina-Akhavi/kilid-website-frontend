<template>
  <h2>User Rigistration</h2>
  <form @submit.prevent="" >

  <label for="firstName">First Name:</label>
  <input type="text" id="firstName" name="firstName" v-model="firstName" required>
  <br>
  <label for="lastName">Last Name:</label>
  <input type="text" id="lastName" name="lastName" v-model="lastName" required>   
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" v-model="email" required>

  <label for="username">Username:</label>
  <input type="text" id="username" name="username" v-model="username" required>
  <br>

  <label for="password">Password:</label>
  <input type="text" id="password" name="password" v-model="password" required>
  <br>
  <br>
  
  <br>
  <button @click="handleSubmit" >Submit</button>
</form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      firstName: "",
      lastName: "",
      email:"",
      username: "",
      password: "",
      url: "http://localhost:8080/",
    };
  },

  methods: {

    handleSubmit() {
      // ------------------ req for delete ok ---------------

      // -------------- req for user/register ---------------
      fetch("http://localhost:8080/user/register", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json charset=utf-8", 
        },
        
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,



        }),
      })
        .then((response) => {
          if (response.status === 201) {
            // Check for successful creation
            return response.json(); // Parse the response body (assuming it's JSON)
          } else {
            throw new Error("Registration failed."); // Handle other status codes
          }
        })
        .then((user) => {
          // Handle successful registration (e.g., redirect to login, show success message)
          console.log("User registered:", user);
          this.$router.push({ name: 'Home'});  
        })
        .catch((error) => {
          // Handle errors (e.g., display error message to user)
          console.error(error);
        });

      // -------------- req for /manager ---------------
    //   fetch("http://localhost:8080/manager/", {
    //     method: "POST", // Specify POST method
    //     headers: {
    //       "Content-Type": "application/json", // Indicate JSON data format
    //     },
    //     body: JSON.stringify({
    //       username: "sinaakhavi",
    //       estateAgencyId: 1,
    //     }),
    //     mode: "no-cors",
    //   })
    //     .then((response) => {
    //       if (response.status === 201) {
    //         // Check for successful creation
    //         return response.json(); // Parse the response body (assuming it's JSON)
    //       } else {
    //         throw new Error("Registration failed."); // Handle other status codes
    //       }
    //     })
    //     .then((res) => {
    //       // Handle successful registration (e.g., redirect to login, show success message)
    //       console.log("res:", res);
    //     })
    //     .catch((error) => {
    //       // Handle errors (e.g., display error message to user)
    //       console.error(error);
    //     });
    },

    // createManager() {},
  },
};
</script>

<style scoped>

form {
  /* Add your desired styles here */
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

</style>
