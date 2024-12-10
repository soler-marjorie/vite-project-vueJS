<template>
  <div class="container py-5">
    <!-- Titre de la leçon -->
    <header class="text-center mb-5">
      <h1 class="display-4 fw-bold">Comprendre la Directive `v-on` dans Vue.js</h1>
      <p class="lead">
        La directive `v-on` est utilisée pour écouter les événements utilisateur et y répondre de manière réactive dans votre composant Vue.
      </p>
    </header>

    <!-- Section Définition -->
    <section id="definition" class="mb-5">
      <h2 class="fw-bold mb-3">Qu'est-ce que `v-on` ?</h2>
      <p>
        La directive `v-on` vous permet d'attacher des gestionnaires d'événements à des éléments du DOM. Elle est utilisée avec la syntaxe `v-on:event="handler"` ou sous sa forme abrégée `@event="handler"`.
      </p>
      <p>
        Les événements couramment utilisés incluent : `click`, `submit`, `keydown`, et bien d'autres.
      </p>
    </section>

    <!-- Section Exemple de Base -->
    <section id="basic-example" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple de Base</h2>
      <p>
        Voici un exemple où un événement `click` est utilisé pour incrémenter un compteur :
      </p>
      <div class="row">
        <!-- Exemple de Code -->
        <div class="col-md-6">
          <pre class="bg-dark text-white p-3 rounded">
<code>
&lt;template&gt;
  &lt;button @click="increment" class="btn btn-primary"&gt;Cliquez-moi&lt;/button&gt;
  &lt;p&gt;Compteur : {{ counter }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const counter = ref(0);

function increment() {
  counter.value++;
}
&lt;/script&gt;
</code>
          </pre>
        </div>
        <!-- Exemple Rendered -->
        <div class="col-md-6 d-flex flex-column align-items-center">
          <button @click="increment" class="btn btn-primary mb-3">Cliquez-moi</button>
          <p class="fs-4">Compteur : {{ counter }}</p>
        </div>
      </div>
    </section>

    <!-- Section Dynamique -->
    <section id="dynamic-example" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple Dynamique avec Paramètres</h2>
      <p>
        Passons un paramètre à un gestionnaire d'événement pour afficher un message dynamique :
      </p>
      <div class="row">
        <!-- Exemple de Code -->
        <div class="col-md-6">
          <pre class="bg-dark text-white p-3 rounded">
<code>
&lt;template&gt;
  &lt;button @click="showMessage('Bonjour!')" class="btn btn-success"&gt;Afficher Message&lt;/button&gt;
  &lt;p&gt;Message : {{ message }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const message = ref('');

function showMessage(msg) {
  message.value = msg;
}
&lt;/script&gt;
</code>
          </pre>
        </div>
        <!-- Exemple Rendered -->
        <div class="col-md-6 d-flex flex-column align-items-center">
          <button @click="showMessage('Bonjour!')" class="btn btn-success mb-3">Afficher Message</button>
          <p class="fs-4">Message : {{ message }}</p>
        </div>
      </div>
    </section>

    <!-- Section Avancée -->
    <section id="advanced-example" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple Avancé : Écoute d'Événements Clavier</h2>
      <p>
        Utilisons `v-on` pour écouter un événement clavier et détecter une touche spécifique :
      </p>
      <div class="row">
        <!-- Exemple de Code -->
        <div class="col-md-6">
          <pre class="bg-dark text-white p-3 rounded">
<code>
&lt;template&gt;
  &lt;input 
    @keydown.enter="submitForm" 
    class="form-control" 
    placeholder="Appuyez sur Entrée pour soumettre"&gt;
  &lt;p&gt;Formulaire soumis : {{ submitted }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const submitted = ref(false);

function submitForm() {
  submitted.value = true;
}
&lt;/script&gt;
</code>
          </pre>
        </div>
        <!-- Exemple Rendered -->
        <div class="col-md-6 d-flex flex-column align-items-center">
          <input 
            @keydown.enter="submitForm" 
            class="form-control mb-3" 
            placeholder="Appuyez sur Entrée pour soumettre">
          <p class="fs-4">Formulaire soumis : {{ submitted ? 'Oui' : 'Non' }}</p>
        </div>
      </div>
      <input v-on:input="capterInput($event)" type="text">
      <h3 class="mx-3">{{uneString}}</h3>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const uneString = ref('Hello');

function capterInput(event) {
  console.log(event);

  uneString.value = event.target.value;
}

// Exemple de Base
const counter = ref(0);
function increment() {
  counter.value++;
}

// Exemple Dynamique
const message = ref('');
function showMessage(msg) {
  message.value = msg;
}

// Exemple Avancé
const submitted = ref(false);
function submitForm() {
  submitted.value = true;
}
</script>
