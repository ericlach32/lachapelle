<template>
  <div class="list">
    <div class="list__wrapper">
      <h1>Best Albums of 2019</h1>

      <div v-for="(album, key) in albums" v-bind:key='key'>
        <Album
          v-bind:title='album.data.album_title[0].text'
          v-bind:artist='album.data.album_artist[0].text'
          v-bind:albumArt='album.data.album_art.url'
          v-bind:albumInfo='album.data.album_info[0].text'
        />
      </div>
    </div>
  </div>
</template>

<script>
import Album from '@/components/Album.vue'

export default {
  name: 'home',
  components: {
    Album
  },
  data () {
    return {
      albums: []
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'album')
      ).then((response) => {
        this.albums = response.results
      })
    }
  },
  created () {
    this.getContent()
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  &__wrapper {
    width: 100%;
    padding: 0 1.5rem;

    @media only screen and (max-width: 768px) {
      h1 {
        text-align: center;
      }
    }
  }
}
</style>
