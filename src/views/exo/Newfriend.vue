<template>
    <div class="container bg-info my-1">
        <form @submit.prevent="submitData">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input v-model="enteredName" class="form-control form-control-sm" type="text" placeholder="votre nom" aria-label=".form-control-sm example">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Tél</label>
            <input v-model="enteredPhone" class="form-control form-control-sm" type="tel" placeholder="Votre Tél" aria-label=".form-control-sm example">
        </div>       
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input v-model="enteredMail" class="form-control form-control-sm" type="email" placeholder="Votre EMAIL" aria-label=".form-control-sm example">
        </div>     
        <button class="btn btn-primary btn-sm col-12 my-1">Ajouter Ami</button>
        </form>
    </div>
</template>

<script setup lang='js'>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['add-ami']);

const enteredName = ref('');
const enteredPhone = ref('');
const enteredMail = ref('');

const submitData = () => {
console.log({ enteredName, enteredPhone, enteredMail });
// Émettre l'événement avec les valeurs entrées
emit('add-ami', enteredName.value, enteredPhone.value, enteredMail.value);
}
</script>