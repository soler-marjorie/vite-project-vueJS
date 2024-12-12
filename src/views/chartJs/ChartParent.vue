<template>
    <BarChart></BarChart>
    <Doughnut></Doughnut>
</template>

<script setup lang='js'>
import { defineAsyncComponent, ref } from 'vue';

const BarChart = defineAsyncComponent(() => import('./BarChartEnfant.vue')) ;
const Doughnut = defineAsyncComponent(() => import('./DoughnutChartEnfant.vue')) ;
</script>