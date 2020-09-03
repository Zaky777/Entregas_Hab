<template>
  <div class="container-sm">
    <div id="app">
      <div id="nav"></div>
      <router-view />
    </div>
    <div class="mx-auto" style="width: 200px;">
      <footercustom></footercustom>
    </div>
  </div>
</template>
<script>
import { clearLogin } from "./api/utils";
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "app",
  components: {
    footercustom,
  },

  methods: {
    logoutUser() {
      this.$router.push("/");
      return clearLogin();
      alert("Hasta luego!");
    },
  },
};
</script>

<style scoped>
</style>
