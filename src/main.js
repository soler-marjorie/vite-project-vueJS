import { createApp } from 'vue';

import { createPinia } from 'pinia';
import piniaPersistedState from 'pinia-plugin-persistedstate'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './style.css'

import App from './App.vue'

import router from './router'
// createApp(App).use(router).mount('#app')

// Création de l'instance Pinia
const pinia = createPinia();
pinia.use(piniaPersistedState);

// Création de l'application Vue
const app = createApp(App);

// Ajout des plugins à l'application
app.use(router);
app.use(pinia);

// Montage de l'application dans la balise #app de index.html
app.mount('#app');