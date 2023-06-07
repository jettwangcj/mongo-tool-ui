<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from '@/views/Login.vue'
export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
body {
  margin: 0px auto;
  padding: 0px;
}
</style>

