<template>
  <div id="error">
    <menucustom></menucustom>
    <h3>
      Ey! La página a la que estás intentando acceder no existe o no
      tienes acceso a ella.
    </h3>

    <p>ERROR!!¿Te gustaria acceder aqui?</p>
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";

export default {
  name: "error",
  components: { menucustom }
};
</script>

<style scoped>
</style>