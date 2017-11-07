<template>
  <section class="container">
    <div>

      <router-link to="/about">
        <chart/>
      </router-link>

      <router-link to="/jso">
        <h3>Json test page</h3>
      </router-link>

      <h1 class="title">Home</h1>

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
