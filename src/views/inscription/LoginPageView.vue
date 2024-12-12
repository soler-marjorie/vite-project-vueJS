<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">Connexion</h1>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" v-model="email" id="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe</label>
        <input type="password" v-model="password" id="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary w-100">Se connecter</button>
    </form>
    <p class="text-center mt-3">
      Vous n'avez pas encore de compte ?
      <router-link to="/register" class="link-primary">Inscrivez-vous</router-link>.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "/src/firebase";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

async function login() {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push({ name: "Dashboard" }); // Redirection après connexion
  } catch (error) {
    alert("Erreur de connexion : " + error.message);
  }
}
</script>
