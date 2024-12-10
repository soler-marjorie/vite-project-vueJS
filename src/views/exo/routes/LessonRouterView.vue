<template>
  <div>
    <h2>Navigation Home Spéciale</h2>
    <div class="container p-5">
      <ul class="list-group ">
        <li class="d-flex justify-content-between border" 
        v-for="item in items"
        :key="item.id"
        >
        <p>{{ item.name }}</p>
        <router-link class="btn btn-primary" aria-current="page" :to="{ name: 'exo14.1', params: { id: item.id }}"> Voir les détails</router-link>
        
        
        <!--
        {# Avec 2 params #}
        {# <router-link
          :to="{ name: 'Details', params: { id: item.id, itemName: item.name }}"
          class="btn btn-primary btn-sm"
        > #}-->
      
      </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='js'>
 import { ref } from 'vue'


const items = [
  { id: 1, name: 'Élément 1' },
  { id: 2, name: 'Élément 2' },
  { id: 3, name: 'Élément 3' },
  { id: 44, name: 'Élément 44' }
];




</script>

<style scoped lang="css">
</style>