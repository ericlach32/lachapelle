<template>
  <div class="home">
    <Hero/>
    <Info/>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Info from '@/components/Info.vue'

export default {
  name: 'home',
  components: {
    Hero,
    Info
  }
}
</script>

<style lang="scss" scoped>
  .home {}
</style>
