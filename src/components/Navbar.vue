<template>
  <nav class="navbar navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{ path: '/' }"
      >Book Review</router-link
    >
    <form @submit.prevent="search" class="form-inline">
      <input
        v-model="keyword"
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      keyword: "",
    };
  },

  methods: {
    search() {

    },
  },
};
</script>

<style>
</style>
