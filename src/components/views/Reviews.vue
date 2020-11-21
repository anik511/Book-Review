<template>
  <div>
    <router-link :to="{path:'/login/'+status}">{{ msg }}</router-link>
  </div>
</template>

<script>
export default {
  props:{
    status:{
      type:Boolean
    }
  },
  data() {
    return {
      msg: 'Login',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
