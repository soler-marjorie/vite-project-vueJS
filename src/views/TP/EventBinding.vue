<template>
    <div class="bg-primary-subtle p-5">
    <h1 class="text-center">TP:Dynamic Styling Mode : Composition</h1>
    <div class="container">
      <div class="m-3">
        <div>
          <input v-model="nomClasse" type="text" class="form-control" />
          <!-- <h1 :class="{maClasseHello: nomClasse==='hello' }"  class="form-label mt-1">Hello World (class dynamique)</h1> -->
          <!-- version en passant par une fonction computed -->
          <h1 :class="classDynamique" class="form-label mt-1">
            Hello World (class dynamique)
          </h1>
        </div>
        <div class="mb-3">
          <input v-model="laCouleur" type="text" class="form-control" />
          <h1 :style="{ backgroundColor: laCouleur }" class="form-label mt-1">
            Hello World (couleur dynamique)
          </h1>
        </div>
        <div class="mb-3 form-check"></div>
        <button @click="affichage" class="btn btn-primary">
          Afficher 1er Titre
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref, computed } from 'vue';

// Variables réactives
const nomClasse = ref('');
const laCouleur = ref('');
const visible = ref(true);

// // Propriété calculée
// const classDynamique = computed(() => ({
// maClasseHello: nomClasse.value === 'hello',
// maClasseWorld: nomClasse.value === 'world',
// maClasseHidden: !visible.value,
// maClasseVisible: visible.value,
// }));

// // Méthode
// function affichage() {
// visible.value = !visible.value;
// }


const classDynamique = computed(() => {
  const classes = {};
  
  if (nomClasse.value === 'hello') {
    classes.maClasseHello = true;
  }
  
  if (nomClasse.value === 'world') {
    classes.maClasseWorld = true;
  }
  
  if (!visible.value) {
    classes.maClasseHidden = true;
  } else {
    classes.maClasseVisible = true;
  }
  
  return classes;
});
</script>



<!-- <template>
    <h5>TP : Event binding</h5>

    <div class="container mt-5">
      <input v-on:input="Affichage($event)" type="text">
      <p>{{text}}</p>

      <input v-on:keyup.input="capterInputEsc($event)" type="text">
      <p>Je change mon background-color</p>

      <button  v-on:click="Affichage()" type="button" class="btn btn-success">Alerte</button>
    </div>
</template>
    
<script setup lang='js'>
import { ref } from 'vue'


function capterInputEsc(event){
    console.log(event)
    uneString.value= event.target.value
}


const text= ref("");

function Affichage(event){
    console.log();
    text.value = event.target.value;
}
</script>

<style scoped lang="css">
</style> -->