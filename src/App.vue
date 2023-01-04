<template>
    <NavBar/>
    <router-view />
  <footerPage />

</template>

<script>
import NavBar from './components/NavBar.vue'
import footerPage from './components/footerPage.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    NavBar,
    footerPage,
  },
}
</script>
<style>

</style>