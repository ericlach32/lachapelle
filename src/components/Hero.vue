<template>
  <div class="hero">
    <img src="../assets/img/logo.svg" alt="Lachapelle logo">
    <img src="../assets/img/down.png" alt="Scroll" class="downArrow" @click="scrollPage">
  </div>
</template>

<script>
// eslint-disable-next-line
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { TweenMax, Power3 } from 'gsap'

export default {
  name: 'Hero',
  data () {
    return {}
  },
  methods: {
    scrollPage () {
      // TweenMax.to(window, 0.74, {
      //   scrollTo: document.body.scrollHeight,
      //   ease: Power3.easeIn
      // })
    }
  }
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
    // cursor: pointer;
    position: absolute;
    bottom: 2rem;
    width: 23px;
  }
}
</style>
