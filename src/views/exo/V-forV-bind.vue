<template>
    <EmitOneFriendIdComp
        v-for="unAmi in lesAmis" 
        :key="unAmi.id" 
        :id="unAmi.id"
        :unAmiName="unAmi.name" 
        :unAmiPhone="unAmi.phone"
        :unAmiMail="unAmi.email"
        :premium="unAmi.premium"
    ></EmitOneFriendIdComp>
</template>

<script setup lang='js'>
import { ref } from 'vue';
import EmitOneFriendIdComp from '../views/exo/V-forV-bind.vue';
const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    }
]);
</script>