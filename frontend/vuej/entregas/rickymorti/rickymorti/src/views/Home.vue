<template>
  <div class="home">
    <figure>
      <img src="../assets/logo.png" alt="logo de rick y morty" title="logo de rick y morty" />
    </figure>
    <!-- barra de busqueda -->
    <label for="bySearch">Busca tu personaje -></label>
    <input v-model="search" id="search" type="search" placeholder="Búsqueda..." />
    <charcard :chars="filteredChars"></charcard>
  </div>
</template>

<script>
// @ is an alias to /src
import charcard from "@/components/CharCard.vue";
//importando configuración APi
import api from "@/api/api.js";

export default {
  name: "Home",
  components: {
    charcard
  },
  data() {
    return {
      chars: [],
      search: ""
    };
  },
  computed: {
    filteredChars() {
      //si search esta vacio
      if (!this.search) {
        return this.chars;
      }
      //si search contiene algo
      return this.chars.filter(char =>
        char.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  created() {
    api.getAll().then(response => (this.chars = response.data.results));
  }
};
</script>
<style scoped></style>

