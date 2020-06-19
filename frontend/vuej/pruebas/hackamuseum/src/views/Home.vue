<template>
  <div class="home">
    <!-- menu -->
    <menucustom></menucustom>
    <!--title-->
    <h2 v-html="title"></h2>
    <!--video-->
    <iframe
      width="720"
      height="500"
      src="https://www.youtube.com/embed/u-ykRVPWw-k"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <!-- description -->
    <p v-html="desc"></p>
    <!-- footer -->
    <footercustom></footercustom>
    <greekgallery></greekgallery>
  </div>
</template>

<script>
// @ is an alias to /src
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
export default {
  name: "Home",
  components: {
    menucustom,
    footercustom,
    greekgallery,
  },
  data() {
    return {
      title: "Te damos la bienvenida <br> a HACK A MUSEUM",
      desc: "esto es una locura",
    };
  },
};
</script>
