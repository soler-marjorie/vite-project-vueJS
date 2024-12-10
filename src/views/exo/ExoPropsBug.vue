<template>
    <div class="container p-3 my-2 bg-primary-subtle">
      <ul class="list-group">
        <h2 class="list-group-item">{{ unAmiName }}</h2> 
        <p>{{ afficherPremiumTest() }}</p>
        <h2 class="list-group-item">{{ unAmiName }} {{ premiumData.value === 'abc' ? 'Ami premium' : 'Ami nul' }}</h2> 
        <!-- <h2 class="list-group-item">{{ unAmiName }} {{ premium === 'abc' ? 'Ami premium' : 'Ami nul' }}</h2>  -->
        <button @click="afficherDetails" class="btn btn-outline-dark">
          {{ !detailsVisibles ? 'Voir Détails' : 'Masquer Détails' }}
        </button>  
        <ul v-if="detailsVisibles" class="list-group">
          <li class="list-group-item">{{ unAmiPhone }}</li>
          <li class="list-group-item">{{ unAmiMail }}</li>
        </ul>
      </ul>
    </div>
</template>

<script setup lang='js'>
import { ref, defineProps } from 'vue'

const props = defineProps(['unAmiName', 'unAmiPhone', 'unAmiMail', 'premium'])

const detailsVisibles = ref(false)
const premiumData = ref(props.premium)

function afficherDetails() {
unAmiName.value = 'Dr.Azerty'
detailsVisibles.value = !detailsVisibles.value
}

function afficherPremiumTest() {
// props.premium = props.premium === 'abc' ? 'xyz' : 'abc'
premiumData.value = premiumData.value === 'abc' ? 'xyz' : 'abc'
}
</script>