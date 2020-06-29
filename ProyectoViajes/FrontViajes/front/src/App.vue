<template>
  <div class="container-fluid">
    <div id="app">
      <div id="nav"></div>
      <router-view />
    </div>
  </div>
</template>
<script>
import { clearLogin } from "./api/utils";

export default {
  name: "app",

  methods: {
    logoutUser() {
      this.$router.push("/");
      return clearLogin();
      alert("Hasta luego!");
    },
  },
};
</script>

<style scoped></style>
