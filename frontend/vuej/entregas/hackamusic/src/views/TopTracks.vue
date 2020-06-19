<template>
  <div>
    <menucustom></menucustom>
    <toptrackst class="cancionzacas" :tracks="tracks"></toptrackst>
    <footercustom></footercustom>
  </div>
</template>

<script>
import api from "@/api/index.js";
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
import toptrackst from "@/components/TopTracksT";

export default {
  name: "TopTracks",
  components: {
    menucustom,
    footercustom,
    toptrackst
  },
  created() {
    api
      .getTopTracks()
      .then(response => (this.tracks = response.data.tracks.track));
  },
  data() {
    return {
      tracks: []
    };
  }
};
</script>

<style scoped>
</style>