<template>
  <div>
    <ul>
      <li v-for="track in tracks" :key="track.id">
        CANCIÓN: {{ track.name }}
        OYENTES: {{ track.listeners}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopTracksT",

  props: {
    tracks: Array
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