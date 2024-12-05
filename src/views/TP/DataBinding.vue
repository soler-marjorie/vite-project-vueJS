<template>
    <div class="card p-4 bg-danger-subtle">
      <h5>Tp-Databinding : Mode Composition</h5>
      <div class="image d-flex flex-column justify-content-center align-items-center">
        <!-- v-bind de l'attribut src de l'image -->
        <img v-bind:src="imageUser" height="100" width="100">
        <!-- interpolation du nom -->
        <span class="name mt-3">{{ nameUser }}</span>
        <!-- v-bind de l'attribut value d'un input -->
        <input type="text" :value="nameUser" class="texte-center from-control">
        <!-- <input type="text" v-model ="nameUser"> -->
        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
          <!-- interpolation de l'age -->
          <span>{{ ageUser }} ans</span>
        </div>
        <div class="d-flex flex-row justify-content-center align-items-center mt-3">
          <!-- interpolation fonction qui agmente l'age -->
          <span>age + 10 :
            <span class="follow">{{ augmenterAge() }} ans</span>
          </span>
        </div>
        <div class="px-2 rounded mt-4 date">
          NB Fétiche :
          <!-- interpolation de la fonction qui génère un nb random  -->
          <span>{{ nombreRandom() }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang='js'>
  import { ref } from 'vue'
  
  const nameUser = ref('Dr Mario');
  const ageUser = ref(30);
  const imageUser = 'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg'
  
  const augmenterAge = () => {
    return ageUser.value + 10;
  }
  
  const nombreRandom = () => {
    return Math.floor(Math.random() * 100);
  }
  </script>