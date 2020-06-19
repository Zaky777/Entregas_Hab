<template>
  <div class="notas">
    <h2>eyy</h2>
    <h4>crea tus notas tio, no te rayer</h4>
    <form>
      <label for="texto">Texto de la nota:</label>
      <br />
      <textarea name="texto" id="textarea" cols="40" rows="5" v-model="texto"></textarea>
    </form>
    <button @click="add()">CREAR NOTA</button>
    <h2>NOTAS</h2>
    <p>actualizando tu nota...</p>
    <input v-model="newText" placeholder="el texto aqui!!" />
    <button>ACTUALIZAR</button>
    <notas :notas="notas" v-on:editar="showEditText" v-on:borrar="deleteNotas"></notas>
  </div>
</template>

<script>
import axios from "axios";
import notas from "@/components/Shownotas.vue";
export default {
  name: "Notas",
  components: {
    notas
  },
  data() {
    return {
      //variable donde guardo texto de las notas
      texto: "",
      //variable donde guardo todas las notas
      notas: [],
      //nuevo texto de la nota
      newText: "",
      id: null
    };
  },
  methods: {
    add() {
      var self = this;
      axios
        .post("http://localhost:3050/notas/add", {
          texto: self.texto
        })
        //me imprimira la respuesta en la consola
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getNotes() {
      var self = this;
      axios
        .get("http://localhost:3050/notas")
        //si sale bien que rellene el array de notas
        .then(function(response) {
          self.notas = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
     updateNotes() {
      var self = this;
      axios
        .get("http://localhost:3050/notes/update") + self.id{
          id: self.id
          texto: self.
        }
        //si sale bien que rellene el array de notas
        .then(function(response) {
          self.notas = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
     }
    
    showEditText(data) {
      this.newText = data.texto;
      this.id = data.id;
    }
  },
  created() {
    //llamo a get notes en cuanto la pagina se crea
    this.getNotes();
  }
};
</script>
