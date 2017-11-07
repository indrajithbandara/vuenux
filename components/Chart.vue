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
    max-width: 700px;
    margin: 0 auto;
  }
  .chart img {
    min-width: 50%;
    max-width: 100%;
    margin: 0 auto;
  }
</style>
