<template>
  <div class="about">
    <h1>About</h1>
    <p>Lachapelle is a Canadian producer, multi-instrumentalist and emcee. His debut consists of sample-heavy hip hop beats inspired by the great loop-diggers before him.</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  components: {

  },
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  h1, p {
    padding: 0 1.5rem;
  }

  p {
    max-width: 747px;
  }
}
</style>
