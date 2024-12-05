<template>
    <h5>TP 2 : Event Binding</h5>
    <div>
      <input v-on:input="capterInput($event)" type="text">
      <h3 class="mx-3">{{uneString}}</h3>
    </div>

    <div>
      <input v-on:input="capterInput($event)" type="text">
      <h3 class="mx-3">{{uneString}}</h3>
    </div>

    <button v-on:click="createAlert" ype="button" class="btn btn-success">Alert</button>
  </template>
  
  <script setup lang='js'>
  import { ref } from 'vue'
  
  const uneString = ref('Hello');

  function capterInput(event) {
    console.log(event);

    uneString.value = event.target.value;
  }

  function createAlert(){
    alert('OKKKKKKKKKK !')
  }

  </script>