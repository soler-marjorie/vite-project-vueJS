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


<!-- Autre exemple d'utilisation -->
<!-- <template>
    <div>
      <div :style="{ color: activeColor, fontSize: myFont + 'px' }"></div>
    </div>
  
  <h3 class="text-center">Dynamic Styling (inline) Mode  : Composition</h3>
  <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4 m-3 justify-content-center">
      <div class="col">
          <div class="card" @click="selectionCard(1)" vbind:style="{backgroundColor: selectCard1 ==true ? 'red':'aqua' }">
          <div class="card-body">
              <h5 class="card-title">Card title</h5>
          </div>
          </div>
      </div>
      <div class="col">
          <div class="card" @click="selectionCard(2)" :style="{backgroundColor: selectCard2 ? 'green':'violet' }">
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
          </div>
          </div>
      </div>
      </div>
      Ici on a rangé plusieurs modif dans un objet que l'on binder directement 
      <div :style="styleObject">Cool</div>
  </div>
  </template>
  
  <script setup lang='js'>
  import { ref } from 'vue';
  
  // Variables réactives
  const activeColor = ref('red');
  const myFont = ref(30);
  const selectCard1 = ref(false);
  const selectCard2 = ref(false);
  
  // Bonus : Objet pour plusieurs styles
  const styleObject = ref({
    color: 'red',
    fontSize: '53px',
  });
  
  // Méthode pour gérer la sélection des cartes
  function selectionCard(uneCard) {
    if (uneCard === 1) {
      selectCard1.value = !selectCard1.value;
    }
    if (uneCard === 2) {
      selectCard2.value = !selectCard2.value;
    }
  }
  </script> -->