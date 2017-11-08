<template>
  <div class="chart">
    <img class="chart_image" src="../assets/img/astro-circle.svg" />
  </div>
</template>

<script>
  export default {
    name: 'Chart'
  }
</script>

<style scoped>
  .chart {
    max-width: 600px;
    margin: 0 auto;
    overflow: hidden;
  }
  .chart img {
    min-width: 50%;
    max-width: 500px;
    margin: 0 auto;
  }
</style>
