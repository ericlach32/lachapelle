<template>
  <vue-audio :file="track" />
</template>

<script>
import VueAudio from 'vue-audio'

export default {
  data () {
    return {
      track: '/assets/mp3/secondTryv2.mp3'
    }
  },
  components: {
    'vue-audio': VueAudio
  }
}
</script>
