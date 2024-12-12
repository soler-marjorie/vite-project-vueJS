<template>
    <DoughnutChart></DoughnutChart>
    <BarChart></BarChart>
</template>

<script setup lang='js'>
import BarChart from '../chartJs/BarChartEnfant.vue';
import DoughnutChart from '../chartJs/DoughnutChartEnfant.vue';
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
</script>

<style scoped lang="css">
</style>