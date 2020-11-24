<template>
  <div id="app">
    <Navbar />
    <!-- <Reviews v-if="status"></Reviews> -->
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Login from "./components/views/Login";
// import Reviews from './components/views/Reviews'
import Navbar from "./components/Navbar";
// import Card from "./components/Card"

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
  methods: {},
};
</script>

<style>
</style>
