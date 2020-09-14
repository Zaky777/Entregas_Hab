<template>
  <div>
    <div id="app">
      <div id="nav"></div>
      <router-view />
    </div>
  </div>
</template>
<script>
import { clearLogin } from "./api/utils";
import footercustom from "@/components/FooterCustom.vue";
import menucustom from "@/components/MenuCustom.vue";

export default {
  name: "app",
  components: {
    footercustom,
    menucustom,
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
/* .banner {
  height: 100vh;
  width: 100%;
  background: url("tur.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
} */
</style>
