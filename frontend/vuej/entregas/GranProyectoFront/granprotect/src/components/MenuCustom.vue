<template>
  <div>
    <div class="nav" id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name: 'About'}">About</router-link>|
      <router-link :to="{ name: 'addClients'}">Añadir Clientes</router-link>|
      <router-link :to="{ name: 'login'}">Login</router-link>|
      <router-link :to="{ name: 'clientes'}">Clientes</router-link>|
      <router-link :to="{ name: 'register'}">register</router-link>
|
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
