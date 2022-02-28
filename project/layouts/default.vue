<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
html {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
