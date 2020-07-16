<template>
  <div class="nav">
    <router-link to="/" class="border-right">Home</router-link>
    <router-link to="/list" class="border-right">2019</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  position: fixed;
  top: 0;
  padding: 1rem;
  z-index: 100;

  a {
    line-height: 17px;
    font-size: 17px;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    padding: 0 .5rem;
    transition: text-shadow .25s ease;

    &.router-link-exact-active {
      text-shadow: 1px 1px #222;
    }
  }

  .border-right {
    border-right: 2px solid #fff;
  }
}
</style>
