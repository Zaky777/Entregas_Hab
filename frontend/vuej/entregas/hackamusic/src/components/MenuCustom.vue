<template>
  <div>
    <div class="nav" id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name: 'About'}">About</router-link>|
      <router-link :to="{ name: 'tartists'}">TopArtists</router-link>|
      <router-link :to="{ name: 'ttracks'}">TopTracks</router-link>|
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCustom",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  background: #ffffff;
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
