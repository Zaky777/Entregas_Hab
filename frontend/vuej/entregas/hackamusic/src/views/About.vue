<template>
  <div class="about">
    <menucustom></menucustom>
    <h1>Pagina realizada por mi mismo, por Antonio Espejo muajaja</h1>
    <p>aún en construcción pero en breves dispondreis de toda la información relativa a la pagina</p>
    <footercustom></footercustom>
  </div>
</template>
<script>
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "About",
  components: {
    footercustom,
    menucustom
  }
};
</script>