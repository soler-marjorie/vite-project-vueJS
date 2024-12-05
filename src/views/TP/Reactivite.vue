<template>
    <h5>TP : Reactivite</h5>
    <div class="container">
        <div class="mb-3">
            <button v-on:click="augmenter(1)" type="button" class="btn btn-success mt-3">+1</button>
            <button v-on:click.left="augmenter(5)" type="button" class="btn btn-danger mt-3">+5</button>
            <p>{{ leNombre }}</p>
            <p>{{ message }}</p>
        </div>
    </div>

</template>
    
<script setup lang='js'>
import { ref, watch } from 'vue'

const leNombre = ref(0);
let message = ref('');

const augmenter = (nb) => {
leNombre.value += nb;
};

watch(leNombre,(newValue)=>{
    if(newValue < 7){
        message="ESSAI ENCORE !!!!"
    }else if(newValue == 7){
        message="COOOOOOOL !!!"
    }else if(newValue > 7){
        message="Tu as dépassé le nombre Mystère !!!!"
    }
})

watch(leNombre, (newValue)=>{
    if(newValue > 30){
        setTimeout(() => {
            leNombre.value=0;
        },3000);
    }
})


</script>

<style scoped lang="css">
</style>