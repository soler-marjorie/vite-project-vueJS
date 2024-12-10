<template>
  <div class="container">
    <h1>Une simple requête HTTP GET</h1>
    <h2>Les Pokémon :</h2>
    <p v-for="(item, index) in pokeArray" :key="index">{{ item.name }}</p>
    <hr>
    <h2>Météo Toulouse :</h2>
    <p>Température max : {{ tmax }}°C</p>
    <p>Température min : {{ tmin }}°C</p>
    <p>Température actuelle : {{ tcurrent }}°C</p>
    <p>Condition météo : {{ condition }}</p>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'



const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const pokeArray = ref([]);
const fetchPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    pokeArray.value = data.results;
  } catch (error) {
    console.error("Erreur lors de la récupération des Pokémon :", error);
  }
};




const tmax = ref(null);
const tmin = ref(null);
const tcurrent = ref(null);
const condition = ref(null);

const fetchMeteo = async () => {
  try {
    const response = await fetch("https://prevision-meteo.ch/services/json/toulouse");
    const data = await response.json();
    tmax.value = data.fcst_day_0.tmax;
    tmin.value = data.fcst_day_0.tmin;
    tcurrent.value = data.current_condition.tmp;
    condition.value = data.current_condition.condition;
  } catch (error) {
    console.error("Erreur lors de la récupération de la météo :", error);
  }
};


// const emit = defineEmits({
//   // v-model event with validation
//   'update:modelValue': (value) => value !== null,
// });

// const value = computed({
//   get () {
//     return props.modelValue;
//   },
//   set (value) {
//     emit('update:modelValue', value);
//   },
// });

// const stopWatch = watch(
//   () => props.modelValue, async (_newValue, _oldValue) => {
//     // do something
//   },
//   {
//     immediate: true
//   }
// );

onMounted(() =>{
  fetchPokemon();
  fetchMeteo();

});

onUpdated(() => {
});

onBeforeUnmount(() => {
  console.log("Le composant est sur le point d'être démonté.");
});

</script>

<style scoped lang="css">
</style>