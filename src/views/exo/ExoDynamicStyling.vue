<template>
    <h5>Exercice 6 : Dynamic styling</h5>

    <div 
        @click="isBlueClicked = !isBlueClicked" 
        :style="clickStyleBlue"
        class="card1"
    >
        Click me!
    </div>

    <div 
        @click="isPinkClicked = !isPinkClicked" 
        :style="clickStylePink"
        class="card1"
    >
        Click me!
    </div>
</template>
    
<script setup lang='js'>
import { ref, computed  } from 'vue'

const isBlueClicked = ref(false);
const isPinkClicked = ref(false);

// Propriété calculée pour gérer le style Blue
const clickStyleBlue = computed(() => ({
  backgroundColor: isBlueClicked.value ? 'red' : 'blue', // Couleur en fonction de l'état
  color: 'white',
  padding: '10px',
  textAlign: 'center',
  borderRadius: '5px',
  cursor: 'pointer',
}));

// Propriété calculée pour gérer le style Pink
const clickStylePink = computed(() => ({
  backgroundColor: isPinkClicked.value ? 'green' : 'pink', // Couleur en fonction de l'état
  color: 'white',
  padding: '10px',
  textAlign: 'center',
  borderRadius: '5px',
  cursor: 'pointer',
}));

</script>

<style scoped lang="css">
.card1 {
  transition: background-color 0.3s ease; /* Transition fluide */
}
</style>