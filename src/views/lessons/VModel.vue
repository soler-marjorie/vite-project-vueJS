<template>
    <div class="container bg-primary-subtle p-3">
      <div class="mb-3">
        <h5>Two Way Binding Event Binding Mode : Composition</h5>
        <p>v-on (keyup) + v-bind (value)</p>
        <input v-on:keyup="afficherNameUser" v-bind:value="nameUser" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <p>{{ nameUser }}</p>
      </div>
      <div class="mb-3">
        <p>v-model</p>
        <!-- modèle MVC vs MVVM  -->
        <input v-model="userName" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <p>{{ userName }}</p>
      </div>
    </div>
</template>
  
<script setup lang='js'>
import { ref } from 'vue'
const nameUser = ref('')
const userName = ref('')

function afficherNameUser(event) {
    nameUser.value = event.target.value;
}
</script>

<style scoped lang="css">
</style>