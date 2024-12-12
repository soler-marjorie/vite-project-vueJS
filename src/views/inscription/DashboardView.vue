<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">Tableau de Bord</h1>
    <h2 class="text-center mb-4" >Cette page n'est accessible qu'une fois connecté</h2>
    <p class="text-center">Bienvenue dans votre tableau de bord !</p>
    <p class="text-center">Dans cette page il y aura des trucs ultra secrets</p>
    <button @click="logout" class="btn btn-danger">Se déconnecter</button>
  </div>
</template>

<script setup>
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "vue-router";

const router = useRouter();

async function logout() {
  await signOut(auth);
  router.push({ name: "Home" }); // Redirection après déconnexion
}
</script>
