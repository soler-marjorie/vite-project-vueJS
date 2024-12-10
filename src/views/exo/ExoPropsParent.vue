<template>
    <div >
      <h1 class="text-center">Ici c'est le composant parent ExoPropsView</h1>
      <PropsOneFriendComp unAmiName="Dr.Azerty" unAmiPhone="098765234" unAmiMail="a@a.aa"></PropsOneFriendComp>
      <PropsOneFriendComp unAmiName="Cortex22" unAmiPhone="30303003" unAmiMail="cortex@cortex.cortex"></PropsOneFriendComp>
      <PropsOneFriendComp unAmiName="Dr.Qwerty" unAmiPhone="098765234" unAmiMail="b@b.bb"></PropsOneFriendComp>
      <PropsOneFriendComp unAmiName="Dr.aaaaa" unAmiPhone="5555555" unAmiMail="lol@lol.com"></PropsOneFriendComp>
    </div>

    <PropsOneFriendBugComp unAmiName="Dr.BUUUUUUG" unAmiPhone="0000" unAmiMail="lol@lol.com" premium="abc"></PropsOneFriendBugComp>

    //Mode Objet
    <PropsOneFriendOptiComp unAmiPhone="0987654" unAmiMail="eric@reptile.com" premium="10000"></PropsOneFriendOptiComp>
  </template>
  
  
  <script setup lang='js'>
  import { defineAsyncComponent } from 'vue'
  const PropsOneFriendComp = defineAsyncComponent(() => import('../../views/exo/ExoPropsEnfant.vue'))

  // Mode Objet
  import { defineAsyncComponent } from 'vue'
  const PropsOneFriendOptiComp = defineAsyncComponent(() => import('../../components/PropsOneFriendOptiComp.vue'))

  const lesAmis = ref([
    {
        id: 'lasticot',
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
    }
]);
  </script>