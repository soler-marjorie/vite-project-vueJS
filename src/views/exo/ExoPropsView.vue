<template>

    <PropsOneFriendComp unAmiName="Cortex22" unAmiPhone="30303003" unAmiMail="cortex@cortex.cortex"></PropsOneFriendComp>

    <PropsOneFriendComp unAmiName="Dr.Qwerty" unAmiPhone="098765234" unAmiMail="b@b.bb"></PropsOneFriendComp>
</template>

<script setup lang='js'>
import { defineProps } from 'vue';

const props = defineProps(['unExempleDeProps1', 'unExempleDeProps2']);

</script>