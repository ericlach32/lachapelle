<template>
  <div class="music">
    <!-- <h1>Music</h1> -->
    <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=802256657/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/" seamless><a href="http://lachapelle.bandcamp.com/album/spectrum">Spectrum by Lachapelle</a></iframe>
  </div>
</template>

<style lang="scss" scoped>
.music {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  height:calc(var(--vh, 1vh) * 100);
}
</style>
