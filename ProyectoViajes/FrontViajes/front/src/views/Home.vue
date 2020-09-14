<template>
<div class="container-fluid banner">
  <menucustom></menucustom>
  <div class="row">
    <div class="col mandanga">
      <div class="btn-group mr-2" role="group" aria-label="First group">
        <router-link class="btn1" :to="{ name: 'login' }">
          <button type="button" class="btn btn-secondary btn-lg font-weight-bold">Login</button>
        </router-link>
      </div>
      <div class="btn-group mr-2" role="group" aria-label="First group">
        <router-link class="btn2" :to="{ name: 'registro' }">
          <button type="button" class="btn btn-secondary btn-lg font-weight-bold">Registrate!</button>
        </router-link>
      </div>
    </div>
    <div class="col">
      <div class="jumbotron">
        <h1 class="display-4" style="¡">Encuentra, conoce y comparte!</h1>
        <div class="lead">
          <hr class="my-4" />
          <router-link :to="{ name: 'lugares_experiencias' }">
            <button
              type="button"
              class="btn btn-primary btn-dark font-weight-bold"
            >DESCUBRE NUESTROS VIAJES!</button>
          </router-link>
        </div>
      </div>
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

    <!--  INDICANDO EL USO DE bootstrap -->

    <!--  <div class="row">
      <div class="position-sticky">
        <router-link :to="{ name: 'login' }">
          <button type="button" class="btn btn-primary btn-lg font-weight-bold">Login</button>
        </router-link>
      </div>
      <div class="col">
        <router-link :to="{ name: 'registro' }">
          <button type="button" class="btn btn-primary btn-lg font-weight-bold">Registrate!</button>
        </router-link>
      </div>
    </div>--->

    <footercustom></footercustom>
  </div>
</div>
</template>

<script>
import axios from "axios";
import login from "@/views/login.vue";
import registro from "@/views/registro.vue";
import lugares from "@/views/lugares_experiencias.vue";
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "Home",
  components: {
    menucustom,
    footercustom,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Mystery+Quest");
.banner {
  height: 100vh;
  width: 100%;
  background: url("tur.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.banner .info {
  margin-top: 20%;
  transform: translateY(-20%);
}
.banner .info h1 {
  font-size: 4.5em;
  font-weight: 700;
  color: rgb(0, 26, 255);
  letter-spacing: 2px;
  font-family: "Mystery Quest", cursive;
}
.banner .info p {
  font-size: 2em;
  font-weight: 500;
  color: rgb(0, 0, 0);
  letter-spacing: 2px;
}
.banner .info a {
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  font-size: 2.5rem;
  font-weight: 600;
}
/* button {
  background: linear-gradient(-90deg, rgb(0, 26, 255), black);
  font-size: 3rem;
  width: 300px;
  color: aliceblue;
  margin-top: 300px;

  margin-left: 1300px;
  font-family: "Mystery Quest", cursive;
} */
.banner .jumbotron {
  margin-top: 300px;
  margin-left: -1300px;
  height: 400px;
  width: 500px;
  background: linear-gradient(-90deg, black, rgb(0, 26, 255));
  font-family: "Mystery Quest";
  box-shadow: 3px 5px 15px rgb(0, 10, 10);
  text-align: center;
  color: cornsilk;
  font-size: 1.5rem;
  opacity: 0.7;
}
.jumbotron button {
  font-size: 2.5rem;
  background: white;
  color: rgb(0, 26, 255);
}

.banner .mandanga {
  margin-top: 200px;
  margin-left: 1300px;
}
.banner .mandanga .btn1 button {
  background: linear-gradient(-90deg, black, rgb(0, 26, 255));
  font-family: "Mystery Quest";
  font-size: 2.5rem;
  margin-top: 200px;
  width: 350px;
}
.banner .mandanga .btn2 button {
  background: linear-gradient(-90deg, black, rgb(0, 26, 255));
  font-family: "Mystery Quest";
  font-size: 2.5rem;
  margin-top: 100px;
  width: 350px;
}
</style>
