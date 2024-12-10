<template>
  <div class="container py-5">
    <header class="text-center mb-5">
      <h1 class="display-4 fw-bold">Apprendre la directive <code>v-bind</code> dans Vue.js</h1>
      <p class="lead">
        La directive <code>v-bind</code> permet de lier dynamiquement des attributs HTML à des données Vue.
      </p>
    </header>

    <section id="introduction" class="mb-5">
      <h2 class="fw-bold mb-3">Qu'est-ce que <code>v-bind</code> ?</h2>
      <p>
        La directive <code>v-bind</code> est utilisée pour lier dynamiquement des données Vue à des attributs HTML.
        Cela signifie que vous pouvez modifier ces attributs en fonction des données de votre composant.
      </p>
      <p>
        La syntaxe abrégée pour <code>v-bind</code> est <code>:</code>, ce qui facilite son utilisation dans vos templates.
      </p>
    </section>

    <section id="examples" class="mb-5">
      <h2 class="fw-bold mb-3">Exemples d'utilisation</h2>

      <!-- Exemple 1 : Lien dynamique -->
      <div class="mb-4">
        <h3 class="fw-bold mb-3">Exemple 1 : Lier un lien dynamique</h3>
        <p>
          Dans cet exemple, <code>v-bind</code> est utilisé pour lier une URL à l'attribut <code>href</code> d'une balise <code>a</code>.
        </p>
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <p>URL actuelle : <strong>{{ websiteUrl }}</strong></p>
            <a :href="websiteUrl" class="btn btn-primary">Visiter le site</a>
          </div>
        </div>
      </div>

      <!-- Exemple 2 : Attribut d'image -->
      <div class="mb-4">
        <h3 class="fw-bold mb-3">Exemple 2 : Lier dynamiquement une image</h3>
        <p>
          Vous pouvez utiliser <code>v-bind</code> pour lier une source d'image à l'attribut <code>src</code>.
        </p>
        <div class="card shadow-sm border-0">
          <div class="card-body text-center">
            <img :src="imageUrl" alt="Exemple d'image" class="img-fluid mb-3 rounded">
            <button class="btn btn-secondary" @click="changeImage">Changer l'image</button>
          </div>
        </div>
      </div>
    </section>

    <div class="text-center mt-5">
      <p>
        Consultez la 
        <a href="https://vuejs.org/guide/essentials/template-syntax.html#v-bind" class="link-primary" target="_blank">
          documentation officielle de Vue.js
        </a> pour plus d'informations.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Exemple 1 : URL dynamique
const websiteUrl = ref('https://vuejs.org');

// Exemple 2 : Source d'image dynamique
const imageUrl = ref('https://picsum.photos/200/300');

// Méthode pour changer l'image
function changeImage() {
  imageUrl.value =
    imageUrl.value === 'https://picsum.photos/200/300'
      ? 'https://picsum.photos/200/300?random=1'
      : 'https://picsum.photos/200/300?random=1';
}
</script>

<style scoped>
/* Styles personnalisés */
.display-4 {
  font-size: 2.5rem;
}

.card {
  margin-top: 20px;
}

.card img {
  max-width: 100%;
  height: auto;
}
</style>
