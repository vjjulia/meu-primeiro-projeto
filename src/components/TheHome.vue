<template>
    <BannerMenu/>
    <BodyPag/>
</template>
  
<script>
  import BannerMenu from './BannerMenu.vue'
  import BodyPag from './BodyPag'
  export default {
    nome: 'home',
    components: {
      BannerMenu,
      BodyPag,

    },
  }
</script>