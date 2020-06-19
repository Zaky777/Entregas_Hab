<template>
  <div>
    <p>{{copyright}}</p>
  </div>
</template>

<script>
export default {
  name: "FooterCustom",
  data() {
    return {
      copyright: "Antonio Espejo, 2020"
    };
  }
};
</script>

<style scoped>
p {
  font-size: 0.8rem;
}
</style>