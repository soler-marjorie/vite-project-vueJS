<template>
    <h5>Event Binding Mode : Composition</h5>
    <div class="d-flex justify-content-center align-items-center my-2">
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button v-on:click="reduire(44)" type="button" class="btn btn-danger">-</button>
        <h3 class="mx-3">le nombre : {{ leNombre }}</h3>
        <button v-on:click="augmenter(10)" type="button" class="btn btn-success">+</button>
      </div>
    </div>
    </template>
  
  <script setup lang='js'>
  import { ref } from 'vue'
  
  const leNombre = ref(0);
  
  function reduire(val) {
    leNombre.value -= val;
  }
  
  function augmenter(val) {
    leNombre.value += val;
  }
  </script>