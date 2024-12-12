<template>
  <h1 class="text-center">Bar Chart</h1>
  <div class="container">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: [ 'January', 'February', 'March' ],
  datasets: [ 
    { 
      backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
      data: [40, 20, 12] 
    } 
  ]
})

const chartOptions = ref({
  responsive: true
})
</script>