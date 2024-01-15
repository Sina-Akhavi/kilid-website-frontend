<template>

  <nav id="navbar">

    <div class="dropdown" v-for="item in items" :key="item.name">

      <button
        class="dropdown-toggle"
        @click="item.showDropdown = !item.showDropdown"
      >
        {{ item.name }}
        <i class="fas fa-caret-down"></i>
      </button>


      <div class="dropdown-menu" v-if="item.showDropdown">
        
        <label class="dropdown-item" v-for="option in item.options" :key="option">
          <input type="checkbox" :value="option" v-model="item.selectedOptions"/>
          {{ option }}
        </label>

      </div>

    </div>
  </nav>

</template>

<script>
export default {
  name: "FilterButtons",

  data() {
    return {
      items: [
        {
          name: "Sale",
          options: ["Sale", "Mortgage And Rent"],
          showDropdown: false,
          selectedOptions: [],
        },
        {
          name: "Price",
          options: ["250 milion", "500 milion", "1 billion", "2 billion", "3 billion", "5 billion", "7 billion", "10 billion"],
          showDropdown: false,
          selectedOptions: [],
        },
        {
          name: "Meterage",
          options: ["40", "50", "60", "80", "100", "120"],
          showDropdown: false,
          selectedOptions: [],
        },
        {
          name: "Rooms",
          options: ["1", "2", "3", "4", "5", "6", "7"],
          showDropdown: false,
          selectedOptions: [],
        },
        {
          name: "Age",
          options: ["1", "3", "5", "7", "10", "15"],
          showDropdown: false,
          selectedOptions: [],
        },
        {
          name: "Facilities",
          options: ["Parking", "Warehouse", "Lobby", "sports gym", "elevator", "reception", " Balcony"],
          showDropdown: false,
          selectedOptions: [],
        },
        {
          name: "Conditions",
          options: ["Collaborative", "exchange", "Presell", "Negotiable"],
          showDropdown: false,
          selectedOptions: [],
        },
        
      ],
    };
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  margin-right: 18px;
}

.dropdown-toggle {
  background-color: #f8f9fa;
  border: none;
  padding: 10px 10px;
  cursor: pointer;
  border-radius: 5px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  z-index: 1;
}

.dropdown-item {
  padding: 10px 15px;
  display: block;
  text-decoration: none;
  color: #333;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}

#navbar {
  background-color: #ceeb6e;
  padding: 10px;
}

</style>

