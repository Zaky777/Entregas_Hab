<template>
  <div>
    <menucustom></menucustom>
    <h2>{{title}}</h2>
    <div class="peluchitos">
      <div v-for="item in Ipeluchitos" class="peluchito" :key="item.id">
        <p>{{item.name}}</p>
        <p>{{item.photographer}}</p>
        <img :src="item.urlImg" alt="imagen peluchito" />
      </div>
    </div>
    <colleciontitle :title="title"></colleciontitle>
    <footercustom></footercustom>
  </div>
</template>

<script>
//importando menu
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "GreekGallery",
  components: {
    menucustom,
    footercustom
  }
};
</script>

<style scoped>
</style>