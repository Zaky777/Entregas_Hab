<template>
  <div>
    <ul>
      <li class="artistacos" v-for="artist in artists" :key="artist.id">
        <h2>
          ARTISTA: {{ artist.name }}
          OYENTES: {{ artist.listeners}}
          <img
            :src="artist.image[2]['#text']"
          />
        </h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopArtistsTable",

  props: {
    artists: Array
  }
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>