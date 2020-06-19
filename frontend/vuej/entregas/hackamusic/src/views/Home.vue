<template>
  <div class="home">
    <h2>MUSIKOTEEEE!!!</h2>
    <p>no rayarse nada</p>
    <menucustom></menucustom>
    <table class="Tags"></table>
    <iframe
      width="856"
      height="482"
      src="https://www.youtube.com/embed/TvyOS3YZbJo"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <toptags class="tags" :tags="tags"></toptags>

    <footercustom></footercustom>
    <tartists></tartists>
    <ttracks></ttracks>
  </div>
</template>

<script>
// @ is an alias to /src
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
import api from "@/api/index.js";
import tartists from "@/views/TopArtist.vue";
import ttracks from "@/views/TopTracks.vue";
import toptags from "@/components/TopTags.vue";

export default {
  name: "Home",
  components: {
    menucustom,
    footercustom,
    toptags
  },
  created() {
    api.getTopTags().then(response => (this.tags = response.data.tags.tag));
  },

  data() {
    return {
      tags: []
    };
  }
};
</script>
<style scoped>
</style>