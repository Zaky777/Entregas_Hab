<template>
  <div>
    <menucustom></menucustom>
    <h2>{{title}}</h2>
    <div class="estatuas">
      <div v-for="item in GreekStatues" class="estatua" :key="item.id">
        <p>{{item.name}}</p>
        <p>{{item.photographer}}</p>
        <img :src="item.urlImg" />
      </div>
    </div>
    <footercustom></footercustom>
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";
import footerCustom from "@/components/FooterCustom.vue";
export default {
  name: "GreekGallery",
  components: {
    menucustom,
    footerCustom
  },
  data() {
    return {
      GreekStatues: [
        {
          name: "Peluchito 1",
          photographer: "Camarón",
          urlImg: "https://unsplash.com/photos/XGoqsrXWmgw"
        },
        {
          name: "Peluchito 2",
          photographer: "El vaquilla",
          urlImg: "https://unsplash.com/photos/XGoqsrXWmgw"
        },
        {
          name: "Peluchito 3",
          photographer: "Alegre bandolero",
          urlImg: "https://unsplash.com/photos/XGoqsrXWmgw"
        },
        {
          name: "Peluchito 4",
          photographer: "Curro Jimenez",
          urlImg: "https://unsplash.com/photos/XGoqsrXWmgw"
        },
        {
          name: "Peluchito 5",
          photographer: "El Empecinado",
          urlImg: "https://unsplash.com/photos/XGoqsrXWmgw"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>