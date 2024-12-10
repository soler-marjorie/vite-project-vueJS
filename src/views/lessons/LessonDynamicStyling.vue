<template>
  <div class="container py-5">
    <!-- Titre de la leçon -->
    <header class="text-center mb-5">
      <h1 class="display-4 fw-bold">Dynamic Styling avec Vue.js</h1>
      <p class="lead">
        Apprenez comment utiliser <code>v-bind</code> pour appliquer des styles et des classes dynamiquement dans Vue.js.
      </p>
    </header>

    <!-- Section Théorie -->
    <section id="theory" class="mb-5">
      <h2 class="fw-bold mb-3">Qu'est-ce que le Dynamic Styling ?</h2>
      <p>
        Vue.js permet de modifier dynamiquement les styles CSS et les classes d'un élément en utilisant la directive <code>v-bind</code>. 
        Cela permet de rendre vos applications plus interactives et réactives.
      </p>
      <div class="alert alert-info">
        <strong>Principaux usages :</strong>
        <ul>
          <li>Changer l'apparence en fonction de l'état d'une donnée.</li>
          <li>Appliquer plusieurs classes ou styles conditionnels.</li>
        </ul>
      </div>
    </section>

    <!-- Exemple 1 : Style Dynamique avec v-bind:style -->
    <section id="example1" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple 1 : Dynamic Styling avec <code>v-bind:style</code></h2>
      <p>
        Cet exemple montre comment appliquer un style dynamique basé sur une donnée réactive :
      </p>
      <div class="row">
        <!-- Code Exemple -->
        <div class="col-md-6">
          <pre class="bg-dark text-white p-3 rounded">
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;p :style="dynamicStyle"&gt;Texte stylé dynamiquement&lt;/p&gt;
    &lt;button class="btn btn-primary" @click="changeColor"&gt;Changer la couleur&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const dynamicStyle = ref({
  color: 'blue',
  fontSize: '18px',
});

function changeColor() {
  dynamicStyle.value.color = dynamicStyle.value.color === 'blue' ? 'red' : 'blue';
}
&lt;/script&gt;
</code>
          </pre>
        </div>
        <!-- Rendu Exemple -->
        <div class="col-md-6">
          <p :style="dynamicStyle">Texte stylé dynamiquement</p>
          <button class="btn btn-primary" @click="changeColor">Changer la couleur</button>
        </div>
      </div>
    </section>

    <!-- Exemple 2 : Classes Dynamiques avec v-bind:class -->
    <section id="example2" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple 2 : Dynamic Styling avec <code>v-bind:class</code></h2>
      <p>
        Cet exemple montre comment appliquer des classes dynamiquement en fonction de l'état d'une donnée :
      </p>
      <div class="row">
        <!-- Code Exemple -->
        <div class="col-md-6">
          <pre class="bg-dark text-white p-3 rounded">
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;p :class="{'text-success': isActive, 'text-danger': !isActive}"&gt;Statut : {{ isActive ? 'Actif' : 'Inactif' }}&lt;/p&gt;
    &lt;button class="btn btn-secondary" @click="toggleStatus"&gt;Changer le statut&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const isActive = ref(true);

function toggleStatus() {
  isActive.value = !isActive.value;
}
&lt;/script&gt;
</code>
          </pre>
        </div>
        <!-- Rendu Exemple -->
        <div class="col-md-6">
          <p :class="{'text-success': isActive, 'text-danger': !isActive}">
            Statut : {{ isActive ? 'Actif' : 'Inactif' }}
          </p>
          <button class="btn btn-secondary" @click="toggleStatus">Changer le statut</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="text-center mt-5">
      <p>
        Pour en savoir plus sur le dynamic styling, consultez la 
        <a href="https://vuejs.org/guide/essentials/class-and-style.html" class="link-primary" target="_blank">
          documentation officielle de Vue.js
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Exemple 1 : Style Dynamique
const dynamicStyle = ref({
  color: 'blue',
  fontSize: '18px',
});

function changeColor() {
  dynamicStyle.value.color = dynamicStyle.value.color === 'blue' ? 'red' : 'blue';
}

// Exemple 2 : Classes Dynamiques
const isActive = ref(true);

function toggleStatus() {
  isActive.value = !isActive.value;
}
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
</style>
