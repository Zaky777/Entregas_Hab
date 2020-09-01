<template>
<div>
  <div class="menu">
    <menucustom></menucustom>
  </div>
  <!-- 
    INDICANDO EL USO DE BOOTSTRAP 

  -->
  <div class="bootstrap">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </div>

  <body>
    <script
      type="application/javascript"
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      type="application/javascript"
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      type="application/javascript"
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
      integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
      crossorigin="anonymous"
    ></script>
  </body>

  <!-- 
  -->
  <!-- 
  FORMULARIO DE AÑADIR viaje

  -->
  <form>
    <div class="form-row">
      <div class="col" id="selecciondefoto">
        <label for="file">Selecciona tus fotos.</label>
        <input type="file" id="fotos" name="fotos" ref="fotos" @change="handleFileUpload()" />
      </div>
      <div class="col"></div>
    </div>
    <br />
    <br />
    <div class="form-row">
      <div class="col">
        <label for="localizacion">Localización:</label>
        <input type="text" name="localizacion" placeholder="lugar del viaje" v-model="localizacion" />
        <br />
      </div>
      <div class="col">
        <label for="pais">País:</label>
        <input type="text" name="pais" placeholder="pais del usuario" v-model="pais" />
        <br />
      </div>

      <div class="col">
        <label for="enclaves_de_interes">Enclaves de Interés:</label>
        <input
          type="text"
          name="enclaves_de_interes"
          placeholder="enclaves del lugar"
          v-model="enclaves_de_interes"
        />
        <br />
      </div>
      <div class="col">
        <label for="fecha">Fecha:</label>
        <input type="text" name="fecha" placeholder="fecha del viaje" v-model="fecha" />
        <br />
      </div>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Dispuesto a comenzar la aventura!</label>
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      @click="
          createViaje(
            localizacion,
            fotos,
            pais,
           enclaves_de_interes,
            fecha
          )
        "
    >Registra tu aventura</button>
  </form>
</div>
</template>

<script>
import axios from "axios";
import menucustom from "@/components/MenuCustom.vue";
export default {
  name: "addViajes",
  components: {
    menucustom,
  },
  data() {
    return {
      localizacion: "",
      fotos: "",
      pais: "",
      valoracion_media: "",
      enclaves_de_interes: "",
      fecha: "",
      correctData: false,
      required: false,
    };
  },
  methods: {
    validatingData() {
      if (
        this.localizacion === "" ||
        this.fotos === "" ||
        this.pais === "" ||
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
    handleFileUpload() {
      this.fotos = this.$refs.fotos.files[0];
    },
    createViaje() {
      this.validatingData();
      const self = this;
      const token = localStorage.getItem("token");
      let formData = new FormData();
      formData.append("fotos", self.fotos);
      formData.append("localizacion", self.localizacion);
      formData.append("pais", self.pais);
      formData.append("enclaves_de_interes", self.enclaves_de_interes);
      formData.append("fecha", self.fecha);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .post(
          "http://localhost:3003/lugares_experiencias",
          formData,
          {
            fotos: self.fotos,
            localizacion: self.localizacion,
            pais: self.pais,
            enclaves_de_interes: self.enclaves_de_interes,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function (response) {
          Swal.fire({
            icon: "success",
            title: "Viaje creado con exito, gracias!",
            timer: "3000",
          });
          self.emptyProduct();
          self.seeProduct = false;
        })
        .catch(function (error) {
          console.error(error.response.data.message);
        });
    },
    /*   registroViaje(
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
          .post("http://localhost:3003/lugares_experiencias", {
            localizacion: self.localizacion,
            fotos: (self.fotos = "http://localhost:3003/uploads/" + self.fotos),
            pais: self.pais,
            valoracion_media: self.valoracion_media,
            enclaves_de_interes: self.enclaves_de_interes,
            fecha: self.fecha,
          })
          .then(function (response) {
            self.emptyFields();
            self.required = false;
            console.log(response);
          })
          .catch(function (error) {
            console.error(error);
          });
      } else {
        alert("ey! debes rellenar todos los campos");
      }
    }, */

    /*   subirFoto(fotos) {
      this.validatingData();
      if (this.correctData === true) {
        var self = this;
        axios
          .post("http://localhost:3003/uploads", {
            fotos: self.fotos,
          })

          .then(function (response) {
            self.subirFoto();
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.log(error);
      }
    },
 */
    emptyFields() {
      this.localizacion = "";
      this.fotos = "";
      this.pais = "";

      this.enclaves_de_interes = "";
      this.fecha = "";
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.menu {
  height: 200px;
}
</style>
