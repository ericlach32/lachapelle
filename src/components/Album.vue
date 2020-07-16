<template>
  <div class="album">
    <img v-bind:src="albumArt" alt="">
    <div class="album__info">
      <div class="album__headings">
        <h2>{{ title }}</h2>
        <h3>{{ artist }}</h3>
      </div>
      <p>{{ albumInfo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Album',
  props: {
    title: String,
    artist: String,
    albumInfo: String,
    albumArt: String
  },
  data () {
    return {
      // albumArt: 'https://placehold.it/777x777.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.album {
  display: flex;
  padding: 2rem 0;

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3, p {
      margin: 0;
    }
  }

  img {
    width: 30vw;
    max-width: 777px;
    padding-right: 2rem;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    &__headings {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 0;

      h2 {
        margin-right: 1rem;
      }
    }

    img {
      width: 75vw;
      max-width: 100%;
      padding: 0;
    }
  }
}
</style>
