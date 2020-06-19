 
<template>
  <div class="about">
    <h1>Muajajaja!</h1>
    <p>
      Pardiez!
      <br />¡Esta página? jeje no existe !
    </p>

    <img src="../assets/error.jpg" title="La página no existe" />

    <footercustom></footercustom>
  </div>
</template>

<script>
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "ErrorV",
  components: {
    footercustom
  }
};
</script>