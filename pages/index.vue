<template>
  <section class="container">
    <div>

      <router-link to="/about">

        <chart/>

      </router-link>

      <years/>

      <h1 class="title">vuenux Years</h1>
      
    </div>
  </section>
</template>

<script>
import Chart from '~/components/Chart.vue'
import Years from '~/components/Years.vue'

export default {
  components: {
    Chart,
    Years
  }
}
</script>

<style>

</style>
