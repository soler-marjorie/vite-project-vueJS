<template>
    <div class="container bg-success-subtle">
      <h5>Computed Mode : Composition</h5>
  
      <div class="mb-3">
        <button v-on:click="augmenter(20)" type="button" class="btn btn-success mt-3">+</button>
        <button v-on:click.left="reduire(10)" type="button" class="btn btn-danger mt-3">-</button>
      </div>
      <div class="mb-3">
        <p>{{ afficherNameUser }}</p>
      </div>
      <div class="mb-3">
        <p>{{ leNombre }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang='js'>
  import { ref, computed } from 'vue';
  
  // Déclarez vos variables réactives avec `ref`
  const leNombre = ref(0);
  const nameUser = ref('');
  
  // Déclarez vos propriétés calculées avec `computed`
  const afficherNameUser = computed(() => {
    console.log('fonction qui gère le NAME exécutée');
    return nameUser.value === '' ? 'test' : 'autre Test';
  });
  
  // Déclarez vos méthodes
  function augmenter(num) {
    leNombre.value += num;
  }
  
  function reduire(num) {
    leNombre.value -= num;
  }
  </script>