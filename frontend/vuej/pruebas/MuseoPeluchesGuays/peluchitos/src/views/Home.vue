<template>
  <div class="home">
    <menucustom></menucustom>
    <h2 v-html="title"></h2>
    <p v-html="desc"></p>
    <iframe
      width="720"
      height="400"
      src="https://www.youtube.com/embed/euvHUwnbZaQ"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <footercustom></footercustom>
    <greekgallery></greekgallery>
  </div>
</template>

<script>
// @ is an alias to /src
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
import greekgallery from "@/views/GreekGallery.vue";

export default {
  name: "Home",
  components: {
    menucustom,
    footercustom
  },
  data() {
    return {
      title: "Museo Peluchitos",
      desc: "Un museo de peluchitos?<br> eso puede existir? <br>Pues aqui si"
    };
  }
};
</script>
