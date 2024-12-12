<template>
    <BarChart></BarChart>
    <Doughnut></Doughnut>
    <Polar></Polar>
    <Radar></Radar>
</template>

<script setup lang='js'>
import { defineAsyncComponent, ref } from 'vue';

const BarChart = defineAsyncComponent(() => import('./BarChartEnfant.vue')) ;
const Doughnut = defineAsyncComponent(() => import('./DoughnutChartEnfant.vue')) ;
const Polar = defineAsyncComponent(() => import('./polarChartEnfant.vue')) ;
const Radar = defineAsyncComponent(() => import('./radarChart.vue')) ;


</script>