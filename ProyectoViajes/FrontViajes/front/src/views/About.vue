<template>
  <div class="container">
    <menucustom></menucustom>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h1>página en construcción</h1>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h6>Algunas funcionalidades aún no están disponibles</h6>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <footercustom></footercustom>
  </div>
</template>
<script>
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "About",
  components: {
    menucustom,
    footercustom,
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 100px rgb(5, 86, 179);
  height: 100%;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 10px;
}
</style>
