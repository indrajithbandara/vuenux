<template>
  <div class="years">
    <div class="years_title">Year Cycles</div>

  </div>
</template>

<script>
  import yearlist from '@/assets/json/years.json'

  yearlist.forEach(x => {
    console.log(x.year, x.animal, x.element)
  })
</script>

<style scoped>
  > * {
    font-weight: normal;
    color: red;
  }
</style>
