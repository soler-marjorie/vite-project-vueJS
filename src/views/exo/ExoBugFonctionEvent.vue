<template>
    <div class="container">
      <h5>Computed Bug Mode  : Composition</h5>
      <div class="mb-3">
        <button v-on:click="augmenter(20)" type="button" class="btn btn-success mt-3">+</button>
        <button v-on:click.left="reduire(10)" type="button" class="btn btn-danger mt-3">-</button>
      </div>
      <div class="mb-3">
        <p>{{ afficherNameUser() }}</p>
      </div>
      <div class="mb-3">
        <p>{{ leNombre }}</p>
      </div>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const leNombre = ref(0);
const nameUser = ref('');

const afficherNameUser = () => {  
console.log('fonction qui gere le NAME exécutée');
    if(nameUser.value ===''){
        return 'test'
    }
    else{
        return 'autre Test';        
    }
};

const augmenter = (nb) => {
leNombre.value += nb;
};

const reduire = (nb) => {
leNombre.value -= nb;
}
</script>