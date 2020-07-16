<template>
  <div class="hero">
    <img src="../assets/img/logo.svg" alt="">
    <img src="../assets/img/down.png" alt="" @click="scrollPage" class="downArrow">
  </div>
</template>

<script>

// import { TweenMax } from 'gsap'

export default {
  name: 'Hero',
  data () {
    return {
      // scrolled: false,
      top: true
    }
  },
  methods: {
    scrollPage () {

    }
    // handleScroll () {
    //   this.scrolled = window.scrollY > 0
    //   this.scrollPage()
    // }
  }
  // created () {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // destroyed () {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }
}
</script>

<style lang="scss" scoped>
.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    img {
        width: 75%;
    }

    .downArrow {
        width: 23px;
        position: absolute;
        bottom: 2rem;
    }
}
</style>
