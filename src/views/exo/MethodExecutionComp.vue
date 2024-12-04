<template>
    <div class="bg-info-subtle">
      <h5>Exercice 2 : Méthods : Mode Composition</h5>
      <p class="text-center">{{ afficherLivreRandom() }}</p>
    </div>
  </template>
  
  <script lang='js' setup>
  const afficherLivreRandom = () => {
      const nombreRandom = Math.random();
      if (nombreRandom > 0.5) {
          return 'Le livre de La Jungle';
      } 
      else {
          return 'Le Livre de boba Fet';
      }
  };
  </script>
  
  <style scoped lang="css">
  </style>