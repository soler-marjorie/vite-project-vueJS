<template>
  <div class="container my-1">
      <ul class="list-group">
          <h2 class="list-group-item">{{unAmiName}} {{premiumData ? '(Ami premium)':'(Ami nul)'}}</h2> 
          <div class="btn-group" role="group" aria-label="Basic example">
              <button @click="afficherDetails" type="button" class="m-1 btn btn-outline-secondary">👁 {{detailsVisibles? 'Masquer': 'Afficher'}} Détails</button>
              <button @click="afficherPremium"  type="button" class=" m-1 btn btn-outline-success">⭐️ Premium</button>
              <button @click="emetIdAmiDelete" type="button" class=" m-1 btn btn-outline-danger">🗑 Suppr.</button>
          </div>
          <ul v-if="detailsVisibles" class="list-group">
              <li class="list-group-item">{{unAmiPhone}}</li>
              <li class="list-group-item">{{unAmiMail}}</li>
          </ul>
      </ul>
  </div> 
</template>

<script setup lang='js'>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  unAmiName: {
    type: String,
    required: true
  },
  unAmiPhone: {
    type: String,
    required: true
  },
  unAmiMail: {
    type: String,
    required: true
  },
  premium: {
    type: Boolean,
    required: false,
    default: false
  }
});

// Définition des événements émis
// const emit = defineEmits(['mon-event-premium']);
const emit = defineEmits({
  'mon-event-premium': (id) => {
    if (id) {
      return true;
    } else {
      console.warn('C\'est la catastrophe !!!!!!');
      console.error('ON A PAS DE ID Dans le event mon-event-premium');
      return false;
    }
  },
  'delete-ami': (id) => {
    if (id) {
      return true;
    } else {
      console.warn('C\'est la catastrophe !!!!!!');
      console.error('ON A PAS DE ID Dans le event delete-ami');
      return false;
    }
  }
});


const detailsVisibles = ref(false);
const premiumData = ref(props.premium);

function afficherDetails() {
  detailsVisibles.value = !detailsVisibles.value;
}

// function afficherPremium() {
//   premiumData.value = !premiumData.value;
//   // emit('mon-event-premium');
//   emit('mon-event-premium',props.id);
// }



function afficherPremium() {
  premiumData.value = !premiumData.value;
  //oups on a oublié de passé l'id dans l'event
  emit('mon-event-premium');
  //emit('mon-event-premium',props.id);
}

function emetIdAmiDelete(){
  emit('delete-ami', props.id);
}
</script>