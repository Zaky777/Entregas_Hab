<template>
  <div>
    <menucustom></menucustom>
    <h2>Tu login, colega:</h2>
    <input type="text" placeholder="Escribe tu email" v-model="email" />
    <input type="password" placeholder="Escribe tu password" v-model="password" />
    <button @click="login()">Haz login</button>
  </div>
</template>

<script>
import { loginUser } from "../api/utils.js";
import menucustom from "@/components/MenuCustom.vue";
export default {
  name: "login",
  components: {
    menucustom
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        await loginUser(this.email, this.password);
        this.$router.push("/home");
      } catch (error) {
        alert(`Error:${error}`);
      }
    }
  }
};
</script>

<style scoped></style>
