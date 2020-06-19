<template>
  <div>
    <vue-headful title="Contact" description="contact page of the museum" />
    <menucustom></menucustom>
    <form>
      <label for="name">Nombre</label>
      <br />
      <input name="name" type="text" placeholder="Tu nombre" />
      <br />
      <label for="subject">Asunto del mensaje</label>
      <br />
      <input name="subject" type="text" placeholder="El asunto" />
      <br />
      <label for="textarea">Asunto del mensaje</label>
      <br />
      <textarea id="textarea" name="textarea" rows="">
        <br>
        </textarea
      >
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
    footercustom,
  },
};
</script>

<style scoped></style>
