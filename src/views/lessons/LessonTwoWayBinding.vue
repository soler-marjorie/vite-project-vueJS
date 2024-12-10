<template>
  <div class="container py-5">
    <!-- Titre de la leçon -->
    <header class="text-center mb-5">
      <h1 class="display-4 fw-bold">Comprendre la Directive `v-model` dans Vue.js</h1>
      <p class="lead">
        La directive `v-model` permet de créer une liaison bidirectionnelle entre des données et des entrées
        utilisateur, facilitant ainsi le développement d'interfaces dynamiques.
      </p>
    </header>

    <!-- Section Théorie -->
    <section id="theory" class="mb-5">
      <h2 class="fw-bold mb-3">Concepts Théoriques</h2>
      <p>
        Vue.js utilise un modèle **MVVM** (Model-View-ViewModel), où :
      </p>
      <ul>
        <li>
          <strong>Model</strong> : Les données de votre application.
        </li>
        <li>
          <strong>View</strong> : L'interface utilisateur visible par l'utilisateur.
        </li>
        <li>
          <strong>ViewModel</strong> : La couche intermédiaire qui lie les données au DOM grâce à des directives comme
          `v-model`.
        </li>
      </ul>
      <p>
        Contrairement au modèle **MVC** (Model-View-Controller), où le contrôleur joue un rôle clé, **MVVM** se
        concentre sur des liaisons déclaratives et réactives.
      </p>
      <div class="alert alert-info">
        <strong>Two-Way Data Binding :</strong> Grâce à `v-model`, les modifications dans le DOM (par exemple, dans un
        champ de formulaire) mettent automatiquement à jour le modèle, et vice versa.
      </div>
    </section>

    <!-- Exemple de Base -->
    <section id="basic-example" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple de Base</h2>
      <p>
        Dans cet exemple, `v-model` est utilisé pour synchroniser une valeur entre un champ de texte et une variable :
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
    &lt;p class="mt-3"&gt;Bonjour, {{ username }} !&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const username = ref('');
&lt;/script&gt;
</code>
          </pre>
        </div>
        <!-- Rendu Exemple -->
        <div class="col-md-6">
          <label for="username">Nom d'utilisateur :</label>
          <input id="username" v-model="username" class="form-control" />
          <p class="mt-3">Bonjour, {{ username }} !</p>
        </div>
      </div>
    </section>

    <!-- Exemple Dynamique -->
    <section id="dynamic-example" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple Dynamique</h2>
      <p>
        Voici un exemple où plusieurs champs interagissent grâce à `v-model` :
      </p>
      <div class="row">
        <!-- Code Exemple -->
        <div class="col-md-6">
          <pre class="bg-dark text-white p-3 rounded">
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;label for="age"&gt;Âge :&lt;/label&gt;
    &lt;input id="age" type="number" v-model="age" class="form-control" /&gt;
    &lt;label for="color" class="mt-3"&gt;Couleur préférée :&lt;/label&gt;
    &lt;input id="color" v-model="color" class="form-control" /&gt;
    &lt;p class="mt-3"&gt;Vous avez {{ age }} ans et votre couleur préférée est {{ color }}.&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const age = ref(25);
const color = ref('bleu');
&lt;/script&gt;
</code>
          </pre>
        </div>
        <!-- Rendu Exemple -->
        <div class="col-md-6">
          <label for="age">Âge :</label>
          <input id="age" type="number" v-model="age" class="form-control" />
          <label for="color" class="mt-3">Couleur préférée :</label>
          <input id="color" v-model="color" class="form-control" />
          <p class="mt-3">Vous avez {{ age }} ans et votre couleur préférée est {{ color }}.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="text-center mt-5">
      <p>
        Pour plus d'informations sur `v-model`, consultez la
        <a href="https://vuejs.org/guide/essentials/forms.html#v-model" class="link-primary" target="_blank">
          documentation officielle de Vue.js
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Exemple de Base
const username = ref('');

// Exemple Dynamique
const age = ref(25);
const color = ref('bleu');
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

.fs-4 {
  font-size: 1.25rem;
}
</style>
