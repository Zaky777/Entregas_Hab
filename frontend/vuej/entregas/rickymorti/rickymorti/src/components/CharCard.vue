<template>
  <div class="card">
    <div v-for="char in chars" :key="char.id">
      <h2>Nombre:{{char.name}}</h2>
      <p>Id:{{char.id}}</p>
      <p>Genre: {{char.gender}}</p>
      <p>Estado: {{char.status}}</p>
      <img :src="char.image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "charCard",
  props: {
    chars: Array
  }
};
</script>

<style>
.card {
  width: 100%;
  border: 0.5px solid black;
}
</style>