<template>
<div class="container-fluid banner">
  <div class="menu">
    <menucustom></menucustom>
  </div>
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

  <!-- Formulario para la búsqueda -->
  <!-- <div id="busqueda">
    <label for="bySearch">Búsqueda</label>
    <br />
    <input
      v-model="search"
      id="search"
      name="bySearch"
      type="search"
      placeholder=" Lugar, pais, valoracion,..."
    />
  </div>-->
  <!--      
      ENLACES PARA HACER COSITAS SI ERES USUARIO

  -->
  <br />

  <div class="dropdown dropleft recomendar">
    <router-link class="text-white" to="/addViajes">
      <button class="btn btn-secondary" type="button">¿Eres usuario? Recomienda tu viaje!</button>
    </router-link>
  </div>
  <!-- 
MUESTRO INFORMACION DE LOS VIAJES
  -->

  <div class="Mostrar">
    <div class="container">
      <h1>DESCUBRE TU VIAJE</h1>
      <div class="col-lg-12 text-center">
        <div class="row">
          <div
            v-for="lugares in lugares_experiencias"
            :key="lugares.id"
            class="col-lg-4 col-md-12 mb-4 cartita"
          >
            <img :src="lugares.fotos" class="card-img-top" alt="..." />
            <div class="card-header f">{{lugares.localizacion}}</div>
            <div class="card-body body">
              <p class="card-text">
                País:
                <br />
                {{ lugares.pais }}
              </p>
              <p class="card-text">
                Sitios de interes:
                <br />
                {{ lugares.enclaves_de_interes }}
              </p>
              <div class="card-footer footer">
                <star-rating
                  v-bind:show-rating="false"
                  inactive-color="#fff"
                  read-only
                  v-model=" lugares.valoracion_media"
                  class="list-group-item estrellas"
                >Valoración de nuestra gente: {{ lugares.valoracion_media}}</star-rating>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  <div class="row row-cols-1 row-cols-md-3">
    <div v-for="lugares in lugares_experiencias" :key="lugares.id" class="card border-dark h-100">
      <div class="col mb-4">
        <img :src="lugares.fotos" alt="..." class="card-img-top" />

        <div class="card-body">
          <h5 class="card-title text-center">
            Localización:
            <br />
            <br />
            {{ lugares.localizacion }}
          </h5>
          <p class="card-text">
            País:
            {{ lugares.pais }}
          </p>
          <p class="card-text">
            Sitios de interes:
            <br />
            {{ lugares.enclaves_de_interes }}
          </p>
    <p class="card-text">Fecha: {{ lugares.fecha }}</p>-->
    <!--      <div class="card-footer h-100">
            <star-rating
              v-bind:show-rating="false"
              inactive-color="#fff"
              read-only
              v-model=" lugares.valoracion_media"
              class="list-group-item"
            >Valoración de nuestra gente: {{ lugares.valoracion_media}}</star-rating>
          </div>
        </div>
      </div>
    </div>
    </div>-->
    <footercustom></footercustom>
  </div>
</div>
</template>

<script>
import axios from "axios";
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
import StarRating from "vue-star-rating";

export default {
  name: "lugares_experiencias",
  components: {
    menucustom,
    StarRating,
    footercustom,
  },
  data() {
    return {
      lugares_experiencias: [],
      lugares: {},
      fotos: [],
      valoracion_media: {},

      /*   search: "", */
    };
  },
  computed: {
    // Función para filtrar clientes en función del texto en el campo de búsqueda, si no hay nada, nos lo devuelve todo.
    /*   filteredViajes() {
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
    }, */
  },
  methods: {
    mostrarLugares() {
      var self = this;
      axios
        .get("http://localhost:3003/lugaresexp")
        // SI TODOO OK
        .then(function (response) {
          self.lugares_experiencias = response.data.data;
          self.lugares_experiencias = response.data.data.map((lugares) => {
            lugares.fotos = "http://localhost:3003/uploads/" + lugares.fotos;
            return lugares;
          });
          console.log(response);
        })
        // SI SALE MAL
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.mostrarLugares();
  },
};
</script>

<style scoped>
.Mostrar .cartita img {
  margin-top: -20px;
  height: 240px;
}

.Mostrar .cartita .f {
  background: linear-gradient(-90deg, black, rgb(0, 26, 255));
  font-family: "Mystery Quest";
  box-shadow: 1px 5px 15px aqua;
  color: aliceblue;
}
.Mostrar .cartita .footer .estrellas {
  background: linear-gradient(-90deg, black, rgb(0, 26, 255));
  font-family: "Mystery Quest";
  box-shadow: 1px 5px 15px aqua;
  color: aliceblue;
  width: 110%;
}
.Mostrar .cartita .body {
  background: linear-gradient(-90deg, rgb(0, 26, 255), rgb(255, 255, 255));
  font-family: "Mystery Quest";
  box-shadow: 1px 5px 15px aqua;
  color: rgb(0, 4, 7);
  height: 280px;
}

.Mostrar .container .cartita a {
  background: aquamarine;
  color: black;
  height: 40px;
  width: 100%;
  font-size: 20px;
  margin-top: 10px;
}
h1 {
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: "Mystery Quest";
  text-align: center;
}
.recomendar {
  margin-top: 50px;
  font-family: "Mystery Quest";
  text-align: start;
}
.recomendar button {
  font-family: "Mystery Quest";
  text-align: start;
  background: linear-gradient(-110deg, rgb(0, 26, 255), green);
  font-size: 2.5rem;
}
</style>
