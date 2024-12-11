<template>
  <div class="p-5">
    <h1>Page des détails</h1>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">ID : {{ id }}</h5>
        <p class="card-text">Ceci est une page de détail pour l'élément avec l'identifiant <strong>{{ id }}</strong></p>
        <a href="#" class="btn btn-primary">
          <router-link class="" aria-current="page" to="/lesson-router">retour</router-link>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const props = defineProps(['id']);



const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

</script>

<style scoped lang="css">
</style>