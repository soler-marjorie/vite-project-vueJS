<template>
    <h5>Watcher</h5>
    <div class="container">
      <div class="mb-3">
        <button v-on:click="leNombre++" type="button" class="btn btn-success">+</button>
        <p>{{ leNombre }}</p>
      </div>
    </div>
</template>

<script setup lang='js'>
import { ref, watch } from 'vue';

// Déclarez votre variable réactive
const leNombre = ref(0);

// Utilisez `watch` pour surveiller les changements de `leNombre`
watch(leNombre, (newValue) => {
if (newValue === 7) {
    leNombre.value = 0;
}
});
</script>