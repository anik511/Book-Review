<template>
  <div id="app">
    <!-- <Reviews v-if="status"></Reviews> -->
    <router-view :status="status"></router-view>
  </div>
</template>

<script>
// import Login from "./components/views/Login";
// import Reviews from './components/views/Reviews'

export default {
  name: "App",
  components: {
    // Reviews,
    // Login,
  },
  data() {
    return {
      status: true
    };
  },
  methods:{
  }

};
</script>

<style>
</style>
