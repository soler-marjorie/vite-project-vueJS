<template>
    <div class="container p-3 my-2 bg-primary-subtle">
        <ul class="list-group">
            <h2 class="list-group-item">{{ unAmiName }}</h2>
            <button @click="afficherDetails" class="btn btn-outline-dark">
                {{ !detailsVisibles ? 'Voir Détails' : 'Masquer Détails' }}
            </button>
            <ul v-if="detailsVisibles" class="list-group">
                <li class="list-group-item">{{ unAmiPhone }}</li>
                <li class="list-group-item">{{ unAmiMail }}</li>
            </ul>
        </ul>
    </div>

    //mode Objet
    <div class="container my-1 p-3">
        <ul class="list-group">
            <h2 class="list-group-item">{{ unAmiName }} {{ premiumData ? 'Ami premium' : 'Ami nul' }}</h2>
            <button @click="afficherPremium" class="btn btn-danger mb-1">Premium ?</button>
            <button @click="afficherDetails" class="btn btn-outline-dark">{{ detailsVisibles ? 'Masquer' : 'Afficher'}}</button>
            <ul v-if="detailsVisibles" class="list-group">
                <li class="list-group-item">{{ unAmiPhone }}</li>
                <li class="list-group-item">{{ unAmiMail }}</li>
            </ul>
        </ul>
    </div>
</template>

<script setup lang='js'>
import { ref,defineProps } from 'vue';

const props = defineProps(['unAmiName', 'unAmiPhone', 'unAmiMail']);
const detailsVisibles = ref(false);

function afficherDetails() {
    detailsVisibles.value = !detailsVisibles.value;
}

//mode objet
const props = defineProps({
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
        // default: false
    }
   
});

const detailsVisibles = ref(false);
const premiumData = ref(props.premium);

const afficherDetails = () => {
    detailsVisibles.value = !detailsVisibles.value;
};

const afficherPremium = () => {
    premiumData.value = !premiumData.value;
};
</script>
