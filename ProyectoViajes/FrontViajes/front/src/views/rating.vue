<template>
<div class="container">
  <menucustom></menucustom>
  <!--  INDICANDO EL USO DE bootstrap -->

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
  <!-- HAGO UN DIV PARA LA BUSQUEDA-->

  <h2>DESCUBRE TU VIAJE</h2>

  <!-- Formulario para la búsqueda -->
  <div id="busqueda">
    <label for="bySearch">Búsqueda</label>
    <br />
    <input
      v-model="search"
      id="search"
      name="bySearch"
      type="search"
      placeholder=" Lugar, pais, valoracion,..."
    />
  </div>

  <!--     MUESTRO LA INFORMACIÓN DE LOS VIAJES -->
  <div
    class="card"
    style="width: 18rem;"
    v-for="(lugares, index) in filteredViajes"
    :key="lugares.id"
  >
    <img :src="lugares.fotos" class="card-img-top" alt="..." />
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Localización: {{ lugares.localizacion }}</li>
      <li class="list-group-item">País: {{ lugares.pais }}</li>
      <li class="list-group-item">Valoración de nuestra gente: {{ lugares.valoracion_media }}</li>
      <li class="list-group-item">Enclaves de Interes: {{ lugares.enclaves_de_interes }}</li>
      <li class="list-group-item">Fecha: {{ lugares.fecha }}</li>
    </ul>
  </div>

  <div class="votos">
    <ul id="votos" v-for="(valoracion,index) in valoracion" :key="valoracion.id"></ul>
    <label for="valoracion">valoracion:</label>
    <input type="text" name="valoracion" placeholder="valoracion" v-model="valoracion" />
    <button @click="
          voteLugar
        ">Votar</button>

    <br />
  </div>
  <div class="rutaAdd">
    <router-link to="/addViajes">¿Eres Usuario? Recomienda tu viaje!</router-link>
  </div>
</div>
</template>

<script>
import axios from "axios";
import menucustom from "@/components/MenuCustom.vue";

export default {
  name: "lugares_experiencias",
  components: {
    menucustom,
  },
  data() {
    return {
      lugares_experiencias: [],
      valoracion: [],
      search: "",
    };
  },
  computed: {
    // Función para filtrar clientes en función del texto en el campo de búsqueda, si no hay nada, nos lo devuelve todo.
    filteredViajes() {
      if (!this.search) {
        return this.lugares_experiencias;
      }
      return this.lugares_experiencias.filter(
        (lugares) =>
          lugares.localizacion
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          lugares.pais.toLowerCase().includes(this.search.toLowerCase()) ||
          lugares.valoracion_media
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          lugares.enclaves_de_interes
            .toLowerCase()
            .includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    mostrarLugares() {
      var self = this;
      axios
        .get("http://localhost:3003/lugaresexp")
        // SI TODOO OK
        .then(function (response) {
          self.lugares_experiencias = response.data.data;
          console.log(response);
        })
        // SI SALE MAL
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  voteLugar(valoracion) {
    var self = this;
    axios
      .post("http://localhost:3003/valoraciones", {
        valoracion: self.valoracion,
      })
      .then(function (response) {
        self.emptyFields();
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  emptyFields() {
    this.valoracion = "";
    this.$router.push("/");
  },
  created() {
    this.mostrarLugares();
    this.voteLugar();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 100px rgb(5, 86, 179);
  height: 100%;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 10px;
}
.viajes {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid;
}
</style>
