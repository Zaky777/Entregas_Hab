<template>
<!-- MENU DE NAVEGACIÓN-->

<div class="MENU">
  <nav class="navbar fixed-bottom navbar-collapse navbar-dark bg-dark juju">
    <h7 class="text-white">Antonio Espejo, 2020</h7>
  </nav>

  <!--  INDICANDO EL USO DE bootstrap -->
  <div class="bootstrap">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </div>

  <body>
    <script
      type="application/javascript"
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      type="application/javascript"
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      type="application/javascript"
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
      integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
      crossorigin="anonymous"
    ></script>
  </body>

  <!-- 
  -->
</div>
</template>

<script>
import { clearLogin } from "@/api/utils";
import vueHeadful from "vue-headful";

export default {
  name: "MenuCustom",
  components: {
    vueHeadful,
  },
  methods: {
    logoutUser() {
      this.$router.push("/");
      return clearLogin();
    },
  },
};
</script>

<style scoped>
.MENU {
  font-family: "Times New Roman", Times, serif;
}
.juju {
  background: linear-gradient(-90deg, rgb(0, 26, 255), black);
}
</style>
