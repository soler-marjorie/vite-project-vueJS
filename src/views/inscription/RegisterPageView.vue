<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">Créer un compte</h1>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="email" class="form-label">Adresse Email</label>
        <input
          type="email"
          v-model="email"
          id="email"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe</label>
        <input
          type="password"
          v-model="password"
          id="password"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirmez le mot de passe</label>
        <input
          type="password"
          v-model="confirmPassword"
          id="confirmPassword"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">S'inscrire</button>
    </form>

    <p class="text-center mt-3">
      Vous avez déjà un compte ?
      <router-link to="/login" class="link-primary">Connectez-vous</router-link>.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter();

async function register() {
  if (password.value !== confirmPassword.value) {
    alert("Les mots de passe ne correspondent pas.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("Inscription réussie !");
    router.push({ name: "Dashboard" }); // Redirection après inscription
  } catch (error) {
    alert("Erreur lors de l'inscription : " + error.message);
  }
}
</script>
