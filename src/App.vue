<template>
  <div id="app">
    <Navbar/>
    <!-- <Reviews v-if="status"></Reviews> -->
    <router-view ></router-view>
  </div>
</template>

<script>
// import Login from "./components/views/Login";
// import Reviews from './components/views/Reviews'
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    // Reviews,
    // Login,
    Navbar,
  },
  data() {
    return {};
  },
  methods:{
  }

};
</script>

<style>
</style>
