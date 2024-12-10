<template>
  <div class="container py-5">
    <!-- Titre de la leçon -->
    <header class="text-center mb-5">
      <h1 class="display-4 fw-bold">Les Computed Properties dans Vue.js</h1>
      <p class="lead">
        Les Computed Properties (propriétés calculées) sont utilisées pour calculer des valeurs dérivées de façon réactive et optimisée.
      </p>
    </header>

    <!-- Section Théorie -->
    <section id="theory" class="mb-5">
      <h2 class="fw-bold mb-3">Qu'est-ce qu'une Computed Property ?</h2>
      <p>
        Une Computed Property est une fonction déclarative utilisée pour calculer une valeur basée sur des données réactives. Elle est automatiquement mise à jour lorsque les données sous-jacentes changent.
      </p>
      <div class="alert alert-info">
        <strong>Avantages :</strong>
        <ul>
          <li>Cache le résultat jusqu'à ce que les dépendances changent.</li>
          <li>Idéal pour des opérations coûteuses ou répétitives.</li>
        </ul>
      </div>
    </section>

    <!-- Exemple 1 : Nom Complet -->
    <section id="example1" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple de Base : Nom Complet</h2>
      <p>
        Voici un exemple où une Computed Property est utilisée pour concaténer le prénom et le nom :
      </p>
      <div class="row">
        <!-- Code Exemple -->
        <div class="col-md-6">
          <pre class="bg-dark text-white p-3 rounded">
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;label for="firstName"&gt;Prénom :&lt;/label&gt;
    &lt;input id="firstName" v-model="firstName" class="form-control" /&gt;

    &lt;label for="lastName" class="mt-3"&gt;Nom :&lt;/label&gt;
    &lt;input id="lastName" v-model="lastName" class="form-control" /&gt;

    &lt;p class="mt-3"&gt;Nom complet : {{ fullName }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed } from 'vue';

const firstName = ref('');
const lastName = ref('');

const fullName = computed(() => `${firstName.value} ${lastName.value}`);
&lt;/script&gt;
</code>
          </pre>
        </div>
        <!-- Rendu Exemple -->
        <div class="col-md-6">
          <label for="firstName">Prénom :</label>
          <input id="firstName" v-model="firstName" class="form-control" />
          <label for="lastName" class="mt-3">Nom :</label>
          <input id="lastName" v-model="lastName" class="form-control" />
          <p class="mt-3">Nom complet : {{ fullName }}</p>
        </div>
      </div>
    </section>

    <!-- Exemple 2 : Comptage Dynamique -->
    <section id="example2" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple Dynamique : Comptage de Mots</h2>
      <p>
        Cet exemple montre comment une Computed Property peut être utilisée pour calculer le nombre de mots dans une chaîne de caractères :
      </p>
      <div class="row">
        <!-- Code Exemple -->
        <div class="col-md-6">
          <pre class="bg-dark text-white p-3 rounded">
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;label for="sentence"&gt;Entrez une phrase :&lt;/label&gt;
    &lt;textarea id="sentence" v-model="sentence" rows="3" class="form-control"&gt;&lt;/textarea&gt;

    &lt;p class="mt-3"&gt;Nombre de mots : {{ wordCount }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed } from 'vue';

const sentence = ref('');

const wordCount = computed(() => {
  return sentence.value.trim() ? sentence.value.trim().split(/\s+/).length : 0;
});
&lt;/script&gt;
</code>
          </pre>
        </div>
        <!-- Rendu Exemple -->
        <div class="col-md-6">
          <label for="sentence">Entrez une phrase :</label>
          <textarea id="sentence" v-model="sentence" rows="3" class="form-control"></textarea>
          <p class="mt-3">Nombre de mots : {{ wordCount }}</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="text-center mt-5">
      <p>
        Pour plus d'informations, consultez la 
        <a href="https://vuejs.org/guide/essentials/computed.html" class="link-primary" target="_blank">
          documentation officielle de Vue.js
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Exemple 1 : Nom Complet
const firstName = ref('');
const lastName = ref('');
const fullName = computed(() => `${firstName.value} ${lastName.value}`);

// Exemple 2 : Comptage Dynamique
const sentence = ref('');
const wordCount = computed(() => {
  return sentence.value.trim() ? sentence.value.trim().split(/\s+/).length : 0;
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
</style>
