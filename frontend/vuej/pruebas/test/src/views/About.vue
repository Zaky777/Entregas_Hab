<template>
  <div class="about">
    <MenuCustom></MenuCustom>
    <h1>This is an about page</h1>
    <footer></footer>
  </div>
</template>

<script>
import MenuCustom from "@/components/MenuCustom.vue";
import footer from "@/components/footer.vue";
export default {
  name: "About",
  components: {
    MenuCustom,
    footer
  }
};
</script>