<template>
  <div class="home">
    <MenuCustom></MenuCustom>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <footer></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MenuCustom from "@/components/MenuCustom.vue";
import footer from "@/components/footer.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    MenuCustom,
    footer
  }
};
</script>
