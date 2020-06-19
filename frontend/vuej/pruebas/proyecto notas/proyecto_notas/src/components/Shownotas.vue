<template>
  <div>
    <div class="nota" v-for="(nota,index) in notas" :key="nota.id">
      {{nota.texto}}
      <button @click="editNoteEvent(index)">EDITAR</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shownotas",
  props: {
    notas: Array
  },
  methods: {
    editNoteEvent(index) {
      //guardando la info de la nota seleccionada
      let data = this.notas[index];
      //enviando la info de la nota a la vista
      this.$emit("editar", data);
    }
  }
};
</script>

<style>
</style>