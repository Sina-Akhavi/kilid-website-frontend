<template>
  <div class="agency-profile">
    <div class="hero">
      <img
        class="hero-image"
        src="../assets/estate_agency.jpeg"
        alt="Cityscape or agency office"
      />
      <div class="hero-content">
        <h1>{{ agencyName }}</h1>
        <h4>Manager: {{ manager }}</h4>
      </div>

      <button
        @click="this.$router.push({ name: 'EstateForm'})"
        class="btn-on-image"
        style="position: absolute; bottom: 20px; left: 20px"
      >
        Your Button Text
      </button>
    </div>

    <div class="about">
      <h2>About Us</h2>
      <p class="description">{{ aboutUs }}</p>
      <ul class="features">
        <li>
          <i class="fa fa-check-circle"></i>
          Experienced and dedicated team
        </li>
        <li>
          <i class="fa fa-house-alt"></i>
          Wide range of properties
        </li>
        <li>
          <i class="fa fa-handshake"></i>
          Personalized service
        </li>
        <li>
          <i class="fa fa-star"></i>
          Exceptional customer satisfaction
        </li>
      </ul>
    </div>

    <div class="contact">
      <h2>Contact Us</h2>
      <div class="contact-info">
        <i class="fa fa-map-marker-alt"></i>
        <p>city: {{ city }}, Address: {{ address }}</p>
      </div>
      <div class="contact-info">
        <i class="fa fa-phone"></i>
        <a href="tel:{{ phone }}">{{ phone }}</a>
      </div>

      <div class="social-media">
        <a href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agencyName: "Momtaz Agency",
      manager: "Sina Akhavi",
      address: "Agency Address",
      city: "Tehran",
      aboutUs: "Your agency's brief introduction",
      phone: "(555) 555-5555",
      email: "your-email@example.com",
    };
  },

  // methods: {
  //   buttonAction() {
  //     this.$router.push({ name: 'EstateForm'});  
  //   }
  // }
};
</script>

<style scoped>
/* Overall page styles */
.agency-profile {
  font-family: sans-serif;
  color: #333;
  margin: 0 auto;
  padding: 2rem;
  max-width: 1200px;
}

/* Hero section styles */
.hero {
  position: relative;
  height: 400px;
  background-color: #f5f5f5; /* Lighter gray for contrast */
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: grayscale(100%); Stylish grayscale effect */
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

h1 {
  font-size: 2.5rem; /* Larger for greater impact */
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Subtle text shadow */
}

.tagline {
  font-size: 1.4rem;
  font-weight: 500;
}

.btn {
  padding: 10px 20px;
  background-color: #4a90e2; /* Deeper blue for contrast */
  color: #fff;
  border: none;
  border-radius: 10px; /* Sightly rounded corners */
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15); /* Add depth */
}

/* About section styles */
.about {
  margin-top: 5rem;
  padding: 2rem;
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
}

/* Contact section styles */
.contact {
  margin-top: 5rem;
  padding: 2rem;
  background-color: #eee; /* Light gray for distinction */
  border-radius: 10px;
}

.contact h2 {
  margin-bottom: 1rem;
  text-align: center; /* Centered heading */
}

.contact-info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc; /* Separator between blocks */
}

.contact-info i {
  margin-right: 1rem;
  font-size: 1.4rem; /* Slightly larger icons */
  color: #333;
}

.contact-info p {
  margin-bottom: 0;
}

.contact-info a {
  color: #4a90e2; /* Matching link color */
  text-decoration: none;
}

.social-media {
  margin-top: 1rem;
  text-align: center;
}

.social-media a {
  margin-right: 1rem;
  font-size: 1.5rem; /* Larger social media icons */
  color: #4a90e2; /* Matching icon color */
}

.btn-on-image {
  background-color: #378e41; /* Blue background */
  color: #fff; /* White text */
  padding: 10px 20px; /* Adjust padding */
  border-radius: 5px; /* Rounded corners */
  text-decoration: none; /* Remove underline */
  border: none;
}

.btn-on-image:hover {
  background-color: #0e711a; /* Blue background */
  cursor: pointer;
}


</style>