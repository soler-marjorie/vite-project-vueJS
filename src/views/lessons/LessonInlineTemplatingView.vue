<template>
  <div class="container py-5">
    <!-- Titre de la leçon -->
    <header class="text-center mb-5">
      <h1 class="display-4 fw-bold">Comprendre la Directive `v-html` dans Vue.js</h1>
      <p class="lead">
        La directive `v-html` permet d'insérer dynamiquement du contenu HTML dans votre application Vue. Elle est particulièrement utile pour des cas spécifiques comme le rendu de contenu enrichi ou d'éléments formatés.
      </p>
    </header>

    <!-- Section Définition -->
    <section id="definition" class="mb-5">
      <h2 class="fw-bold mb-3">Qu'est-ce que `v-html` ?</h2>
      <p>
        La directive `v-html` est utilisée pour insérer du HTML brut dans un élément du DOM. Contrairement à l'utilisation de moustaches `{{ }}`, qui affichent du texte en tant que chaîne, `v-html` interprète et rend le HTML contenu dans une variable.
      </p>
      <p class="text-danger">
        Attention : L'utilisation de `v-html` peut introduire des failles de sécurité si le contenu inséré n'est pas contrôlé ou validé (risque d'injection de script).
      </p>
    </section>

    <!-- Exemple de Base -->
    <section id="basic-example" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple de Base</h2>
      <p>
        Dans cet exemple, un titre HTML est rendu dynamiquement grâce à `v-html` :
      </p>
      <div class="row">
        <!-- Code Exemple -->
        <div class="col-md-6">
          <pre class="bg-dark text-white p-3 rounded">
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;h2 v-html="htmlContent"&gt;&lt;/h2&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const htmlContent = '&lt;span style="color: blue;"&gt;Bonjour, Vue.js!&lt;/span&gt;';
&lt;/script&gt;
</code>
          </pre>
        </div>
        <!-- Rendu Exemple -->
        <div class="col-md-6">
          <div>
            <h2 v-html="htmlContent"></h2>
          </div>
        </div>
      </div>
    </section>

    <!-- Exemple Dynamique -->
    <section id="dynamic-example" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple Dynamique</h2>
      <p>
        Voici un exemple où l'utilisateur peut modifier dynamiquement le contenu HTML :
      </p>
      <div class="row">
        <!-- Code Exemple -->
        <div class="col-md-6">
          <pre class="bg-dark text-white p-3 rounded">
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;textarea v-model="dynamicHtml" class="form-control"&gt;&lt;/textarea&gt;
    &lt;div v-html="dynamicHtml" class="mt-3 border p-3"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const dynamicHtml = ref('&lt;strong&gt;Texte initial en gras&lt;/strong&gt;');
&lt;/script&gt;
</code>
          </pre>
        </div>
        <!-- Rendu Exemple -->
        <div class="col-md-6">
          <textarea v-model="dynamicHtml" class="form-control mb-3"></textarea>
          <div v-html="dynamicHtml" class="mt-3 border p-3"></div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="text-center mt-5">
      <p>
        Pour plus d'informations sur la directive `v-html`, consultez la
        <a href="https://vuejs.org/guide/essentials/template-syntax.html#raw-html" class="link-primary" target="_blank">
          documentation officielle de Vue.js
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Exemple de Base
const htmlContent = '<span style="color: blue;">Bonjour, Vue.js!</span>';

// Exemple Dynamique
const dynamicHtml = ref('<strong>Texte initial en gras</strong>');
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
