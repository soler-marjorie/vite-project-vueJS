<template>
    <div class="container">
        <div class="m-3">
        <h2>WatchList 🎬 (Films à voir + v-if+v-for) Mode : Composition</h2>
        <input v-model="nomFilm" type="text" class="form-control" />
        <button @click="ajouterFilm" class="btn btn-primary mt-3">
            Ajouter à votre Liste
        </button>
        <hr />
       
      <ul >
          <!-- avec la directive v-for on répète un template en fonction de data (généralement tableaux ou listes) -->
          <li v-for="(unFilm, index) in mesFilms" v-on:click="supprimerFilm(index)">{{index}}-{{unFilm}}</li>
    </ul>
        </div>  
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'
const nomFilm = ref('')
const mesFilms = ref([])

function ajouterFilm() {
mesFilms.value.push(nomFilm.value);
nomFilm.value = '';
}

function supprimerFilm(index){
mesFilms.value.splice(index, 1);
}
</script>