
<div class="w-100 p-3">
  <menucustom></menucustom>

  <br />
  <br />
  <div class="d-flex p-2">
    <img src="@/assets/tipoletra.png" class="d-block w-100" alt="..." />
  </div>
  <div class="container p-3 mb-2 bg-dark text-white">
    <div class="row">
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
    </div>
  </div>
  <br />
  <br />
  <br />

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

  <!--  CAROUSEL!!!
  -->
  <div class="c-flex p-2 bd-highlight w-100 p-3 h-25 d-inline-block">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1496523720220-b62e33cf3161?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1446160657592-4782fb76fb99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <!-- 
  -->
  <div class="lugares">
    <router-link :to="{ name: 'lugares_experiencias' }">
      <button
        type="button"
        class="btn btn-primary btn-dark btn-block font-weight-bold"
      >DESCUBRE NUESTROS VIAJES!</button>
    </router-link>
  </div>
  <br />
  <br />

  <div class="mx-auto" style="width: 200px;">
    <footercustom></footercustom>
  </div>
</div>

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  padding-top: 100%;
  padding-bottom: 100%;
}

.d-flex {
  font-family: Tahoma;
  background: rgb(255, 255, 255);
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 0px;
  margin-left: 0px;
}