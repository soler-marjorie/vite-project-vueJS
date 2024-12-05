<template>
    <h5>TP : Dynamic style css</h5>

    <div class="container mt-5">
      <input v-on:keyup:input="capterInputBtn($event)" type="text">
      <p>{{premierInput}}</p>

      <input v-on:keyup.esc.input="capterInputEsc($event)" type="text">
      <p>{{uneString}}</p>

      <button  v-on:click="createAlert" type="button" class="btn btn-success">Afficher le texte du premier input</button>
    </div>
</template>
    
<script setup lang='js'>
import { ref } from 'vue'

const uneString = ref('Hello');
const premierInput = ref('Hiiiiii');


function capterInputBtn(event){
    console.log(event)
    uneString.value= event.target.value
}

// function capterInput(event) {
//     console.log(event);

//     premierInput.value = event.target.value;
// }
</script>

<style scoped lang="css">
</style>