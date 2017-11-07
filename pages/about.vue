<template>
  <section class="container">
    <div>

      <router-link to="/">
        <chart/>
      </router-link>

      <h1 class="title">About</h1>

    </div>
  </section>
</template>

<script>
import Chart from '~/components/Chart.vue'

export default {
  components: {
    Chart
  }
}
</script>

<style>

</style>
