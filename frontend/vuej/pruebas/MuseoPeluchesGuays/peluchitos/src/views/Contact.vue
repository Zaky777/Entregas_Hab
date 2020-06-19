<template>
  <div>
    <menucustom></menucustom>
    <form>
      <label for="name">Nombre</label>
      <br />
      <input name="name" type="text" placeholder="tu nombre" />
      <br />
      <label for="subjert">asunto del mensaje</label>
      <br />
      <input name="subject" type="text" placeholder="el asunto" />
      <br />
      <br />
      <textarea id="text area" name="text area" rows="4" cols="50"></textarea>
      <br />
      <button>Enviar</button>
      <button>Borrar Todo</button>
    </form>
    <footercustom></footercustom>
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "Contact",
  components: {
    menucustom,
    footercustom
  }
};
</script>

<style scoped>
</style>