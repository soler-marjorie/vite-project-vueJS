<template>
    <div>
        <h5>Inline Templating Mode : Composition</h5>
        <!-- Avec String interpolation {{}} le code HTML n'est pas interprété par le navigateur -->
        <p class="text-center">{{unTemplateLivre}}</p>
        <!-- Directive v-html pour afficher du code HTML contenu dans une variable String unTemplateLivre -->
        <p v-html="unTemplateLivre" class="text-center"></p>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'
const unTemplateLivre = ref('<h1>Les mémoires de Steven Seagal</h1>')
</script>

<style scoped lang="css">
</style>