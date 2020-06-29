<template>
  <div class="Formulario">
    <div>
      <p v-show="required">tienes datos aún por rellenar</p>
      <br />
      <label for="localizacion">Localización:</label>
      <input type="text" name="localizacion" placeholder="lugar del viaje" v-model="localizacion" />
      <br />
      <label for="fotos">Fotos:</label>
      <input type="text" name="fotos" placeholder="fotos del lugar" v-model="fotos" />
      <br />
      <label for="pais">País:</label>
      <input type="text" name="pais" placeholder="pais del usuario" v-model="pais" />
      <br />
      <label for="valoracion_media">Valoración de nuestros usuarios:</label>
      <input
        type="text"
        name="valoracion_media"
        placeholder="valoracion del lugar"
        v-model="valoracion_media"
      />
      <br />
      <label for="enclaves_de_interes">Enclaves de Interés:</label>
      <input
        type="text"
        name="enclaves_de_interes"
        placeholder="enclaves del lugar"
        v-model="enclaves_de_interes"
      />
      <br />
      <label for="fecha">Fecha:</label>
      <input type="text" name="fecha" placeholder="fecha del viaje" v-model="fecha" />
      <br />
    </div>
    <button
      @click="registroViaje(
      localizacion,
      fotos,
      pais,
      valoracion_media,
      enclaves_de_interes,
      fecha
    )"
    >REGISTRAR AVENTURA</button>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  name: "addViajes",
  data() {
    return {
      localizacion: "",
      fotos: "",
      pais: "",
      valoracion_media: "",
      enclaves_de_interes: "",
      fecha: "",
      correctData: false,
      required: false
    };
  },
  methods: {
    validatingData() {
      if (
        this.localizacion === "" ||
        this.fotos === "" ||
        this.pais === "" ||
        this.valoracion_media === "" ||
        this.enclaves_de_interes === "" ||
        this.fecha === ""
      ) {
        this.correctData = false;
        this.required = true;
      } else {
        this.correctData = true;
        this.required = false;
      }
    },
    registroViaje(
      localizacion,
      fotos,
      pais,
      valoracion_media,
      enclaves_de_interes,
      fecha
    ) {
      this.validatingData();
      if (this.correctData === true) {
        var self = this;
        axios
          .post("http://localhost:3051/lugares_nuevos", {
            localizacion: self.localizacion,
            fotos: self.fotos,
            pais: self.pais,
            valoracion_media: self.valoracion_media,
            enclaves_de_interes: self.enclaves_de_interes,
            fecha: self.fecha
          })
          .then(function(response) {
            self.emptyFields();
            self.required = false;
            console.log(response);
          })
          .catch(function(error) {
            console.error(error);
          });
      } else {
        alert("ey! debes rellenar todos los campos");
      }
    },
    emptyFields() {
      this.localizacion = "";
      this.fotos = "";
      this.pais = "";
      this.valoracion_media = "";
      this.enclaves_de_interes = "";
      this.fecha = "";
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>