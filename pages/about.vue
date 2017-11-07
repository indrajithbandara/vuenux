<template>
  <section class="container">
    <div>

      <router-link to="/">
        <chart/>
      </router-link>

      <years/>

      <h1 class="title">About</h1>
      <yeajso/>

    </div>
  </section>
</template>

<script>
import Chart from '~/components/Chart.vue'
import Years from '~/components/Years.vue'
import Yeajso from '~/components/Yeajso.vue'

export default {
  components: {
    Chart,
    Years,
    Yeajso
  }
}
</script>

<style>

</style>
