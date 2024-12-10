<template>
  <div class="container py-5">
    <header class="text-center mb-5">
      <h1 class="display-4 fw-bold">Les Méthodes dans Vue.js</h1>
      <p class="lead">
        Découvrez comment les méthodes permettent d'ajouter de l'interactivité et de gérer des comportements dans vos composants Vue.js.
      </p>
    </header>

    <section id="explanations" class="mb-5">
      <h2 class="fw-bold mb-3">Qu'est-ce qu'une méthode ?</h2>
      <p>
        Une méthode est une fonction définie dans un composant Vue pour encapsuler une logique réutilisable. Ces méthodes peuvent être appelées depuis le template ou d'autres parties du composant.
      </p>
    </section>

    <section id="text-transform" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple : Transformation de texte</h2>
      <p>
        Utilisons une méthode pour transformer un texte (mise en majuscules et inversion des caractères) :
      </p>
      <div class="card shadow-sm border-0">
        <div class="card-body">
          <p>Texte d'origine : <strong>{{ originalText }}</strong></p>
          <p>Texte transformé : <strong>{{ transformedText }}</strong></p>
          <button class="btn btn-primary" @click="changeText">Transformer le texte</button>
        </div>
      </div>
    </section>

    <section id="counter" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple : Gestion d'un compteur</h2>
      <p>Manipulons un compteur avec des méthodes pour incrémenter et décrémenter sa valeur :</p>
      <div class="card shadow-sm border-0">
        <div class="card-body">
          <p>Compteur : <strong>{{ counter }}</strong></p>
          <button class="btn btn-success me-2" @click="increment">Incrémenter</button>
          <button class="btn btn-danger" @click="decrement">Décrémenter</button>
        </div>
      </div>
    </section>

    <div class="text-center mt-5">
      <p>
        Pour en savoir plus, consultez la 
        <a href="https://vuejs.org/guide/essentials/template-syntax.html#v-on-event-handling" class="link-primary">
          documentation officielle
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';

// Données réactives
const originalText = ref('Bonjour, Vue.js !');
const transformedText = ref('');
const counter = ref(0);

// Méthodes
function transformText(text) {
  return text.toUpperCase().split('').reverse().join('');
}

function changeText() {
  transformedText.value = transformText(originalText.value);
}

function increment() {
  counter.value++;
}

function decrement() {
  counter.value--;
}
</script>

<style scoped>
/* Styles personnalisés */
.container {
  max-width: 800px;
  margin: auto;
}

.display-4 {
  font-size: 2.5rem;
}

.fw-bold {
  font-weight: bold;
}

.card {
  margin-top: 20px;
}

.btn {
  font-size: 1rem;
}
</style>
