<template>
  <div>
    <menucustom></menucustom>
    <h2>
      <input
        v-model="search"
        id="search"
        name="bySearch"
        type="search"
        placeholder="Nombre artistaco..."
      />
    </h2>
    <TopArtistsTable :artists="filteredArtists"></TopArtistsTable>

    <footercustom></footercustom>
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
import TopArtistsTable from "@/components/TopArtistsTable.vue";
import api from "@/api/index.js";

export default {
  name: "TopArtist",
  components: {
    menucustom,
    footercustom,
    TopArtistsTable
  },

  data() {
    return {
      artists: [],
      search: ""
    };
  },

  computed: {
    filteredArtists() {
      if (!this.search) {
        return this.artists;
      } else {
        return this.artists.filter(artist =>
          artist.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    }
  },
  created() {
    api
      .getArtists()
      .then(response => (this.artists = response.data.topartists.artist));
  }
};
</script>

<style scoped>
</style>