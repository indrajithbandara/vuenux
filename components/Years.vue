<template>
<div class="years">
  <div class="years_title"> yeah! using: 'years.json' • look at console!</div>

</div>
</template>

<script>
import Vue from 'vue'
import yearlist from '@/assets/json/years.json'

// https://raw.githubusercontent.com/toybreaker/anivanilla/gh-pages/data/years.json

yearlist.forEach(x => {
  console.log(x.year, x.animal, x.element)
})

Vue.use(yearlist)

export default {
  name: 'Years'
}
</script>

<style scoped>
.years > * {
  font-weight: normal;
  color: white;
}
</style>
