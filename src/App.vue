<template>
  <div>
    <comHeader />
    <router-view></router-view>
    <comFooter />
  </div>
</template>

<script>
import comHeader from "./components/Header-Footer/Header";
import comFooter from "./components/Header-Footer/Footer";

export default {
  name: 'App',
  components: {
    comHeader,
    comFooter
  },
  created(){
    this.$store.dispatch('admin/refreshToken')
  }
}
</script>

<style>
@import "./assets/style.css";
</style>
