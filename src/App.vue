<template>
  <div id="app">
    <Nav/>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
      >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import { TweenMax, Power3 } from 'gsap'

export default {
  components: {
    Nav
  },
  methods: {
    beforeEnter: function (el) {
      console.log('beforeEnter', el.children[0])
    },
    leave: function (el, done) {
      console.log('leave', el.children[0])

      TweenMax.fromTo(el.children[0], 0.25, {
        opacity: 1
      }, {
        opacity: 0,
        ease: Power3.easeOut,
        onComplete: done
      })
    },
    enter: function (el, done) {
      console.log('enter', el.children[0])

      TweenMax.fromTo(el.children[0], 0.5, {
        opacity: 0
      }, {
        opacity: 1,
        ease: Power3.easeIn,
        onComplete: done
      })
    },
    setVh () {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)

      window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      })
    }
  },
  created () {
    this.setVh()
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #fd800a;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

img {
  max-width: 100%;
}
</style>
