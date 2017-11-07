<template>
<div class="yeajso">

  <div class="years_title">yeajso</div>
  <h5>{{ title }}</h5>

</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Yeajso',
  async asyncData ({ params }) {
    let { data } = await axios.get(`https://raw.githubusercontent.com/toybreaker/anivanilla/gh-pages/data/years.json/${params.id}`)
    return { title: data.animal }
  }
}
</script>

<style scoped>
> * {
  font-weight: normal;
  color: white;
}
</style>
