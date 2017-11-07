<template>
  <section class="container">
    <div>

      <router-link to="/">
        <chart/>
      </router-link>

      <yeajso/>

      <h1 class="title">jso</h1>

    </div>
  </section>
</template>

<script>
  import Yeajso from '~/components/Yeajso.vue'
  import Chart from '~/components/Chart.vue'

  export default {
    components: {
      Chart,
      Yeajso
    }
  }
</script>

<style>

</style>
