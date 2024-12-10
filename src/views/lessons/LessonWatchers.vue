<template>
  <div class="container py-5">
    <!-- Titre de la leçon -->
    <header class="text-center mb-5">
      <h1 class="display-4 fw-bold">Les Watchers dans Vue.js</h1>
      <p class="lead">
        Les watchers permettent d'observer et de réagir aux changements des données réactives, 
        parfaits pour gérer des effets secondaires ou effectuer des tâches asynchrones.
      </p>
    </header>

    <!-- Section Théorie -->
    <section id="theory" class="mb-5">
      <h2 class="fw-bold mb-3">Qu'est-ce qu'un Watcher ?</h2>
      <p>
        Un watcher est une fonction déclarative utilisée pour réagir aux changements d'une donnée réactive ou d'une propriété calculée. 
        Ils sont souvent utilisés pour des tâches complexes ou lorsque vous avez besoin d'effectuer des actions spécifiques suite à un changement.
      </p>
      <div class="alert alert-info">
        <strong>Utilisations communes :</strong>
        <ul>
          <li>Surveiller et synchroniser des données avec une API.</li>
          <li>Effectuer des validations en temps réel.</li>
          <li>Réagir aux changements d'une propriété calculée.</li>
        </ul>
      </div>
    </section>

    <!-- Exemple 1 : Surveillance d'un compteur -->
    <section id="example1" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple 1 : Surveillance d'un compteur</h2>
      <p>
        Cet exemple montre comment un watcher peut être utilisé pour détecter lorsque le compteur dépasse une certaine limite :
      </p>
      <div class="row">
        <!-- Code Exemple -->
        <div class="col-md-6">
          <pre class="bg-dark text-white p-3 rounded">
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Compteur : {{ counter }}&lt;/p&gt;
    &lt;button class="btn btn-primary" @click="increment"&gt;Incrémenter&lt;/button&gt;
    &lt;p class="mt-3 text-danger" v-if="limitReached"&gt;⚠️ Limite atteinte !&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, watch } from 'vue';

const counter = ref(0);
const limitReached = ref(false);

function increment() {
  counter.value++;
}

watch(counter, (newVal) => {
  limitReached.value = newVal >= 10;
});
&lt;/script&gt;
</code>
          </pre>
        </div>
        <!-- Rendu Exemple -->
        <div class="col-md-6">
          <p>Compteur : {{ counter }}</p>
          <button class="btn btn-primary" @click="increment">Incrémenter</button>
          <p class="mt-3 text-danger" v-if="limitReached">⚠️ Limite atteinte !</p>
        </div>
      </div>
    </section>

    <!-- Exemple 2 : Surveillance d'une chaîne -->
    <section id="example2" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple 2 : Validation d'une chaîne de caractères</h2>
      <p>
        Cet exemple montre comment un watcher peut être utilisé pour valider une chaîne de caractères saisie par l'utilisateur :
      </p>
      <div class="row">
        <!-- Code Exemple -->
        <div class="col-md-6">
          <pre class="bg-dark text-white p-3 rounded">
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;label for="username"&gt;Nom d'utilisateur :&lt;/label&gt;
    &lt;input id="username" v-model="username" class="form-control" /&gt;
    &lt;p class="mt-3 text-danger" v-if="errorMessage"&gt;{{ errorMessage }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, watch } from 'vue';

const username = ref('');
const errorMessage = ref('');

watch(username, (newVal) => {
  errorMessage.value = newVal.length < 3 ? "Le nom d'utilisateur doit contenir au moins 3 caractères." : "";
});
&lt;/script&gt;
</code>
          </pre>
        </div>
        <!-- Rendu Exemple -->
        <div class="col-md-6">
          <label for="username">Nom d'utilisateur :</label>
          <input id="username" v-model="username" class="form-control" />
          <p class="mt-3 text-danger" v-if="errorMessage">{{ errorMessage }}</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="text-center mt-5">
      <p>
        Pour en savoir plus sur les watchers, consultez la 
        <a href="https://vuejs.org/guide/essentials/watchers.html" class="link-primary" target="_blank">
          documentation officielle de Vue.js
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// Exemple 1 : Surveillance d'un compteur
const counter = ref(0);
const limitReached = ref(false);

function increment() {
  counter.value++;
}

watch(counter, (newVal) => {
  limitReached.value = newVal >= 10;
});

// Exemple 2 : Validation d'une chaîne
const username = ref('');
const errorMessage = ref('');

watch(username, (newVal) => {
  errorMessage.value = newVal.length < 3 ? "Le nom d'utilisateur doit contenir au moins 3 caractères." : "";
});
</script>

<style scoped>
/* Styles personnalisés */
.display-4 {
  font-size: 2.5rem;
}

.fw-bold {
  font-weight: bold;
}

.mb-5 {
  margin-bottom: 3rem;
}

.bg-dark {
  background-color: #343a40 !important;
}

.text-white {
  color: white !important;
}

.text-danger {
  color: #dc3545 !important;
}
</style>
