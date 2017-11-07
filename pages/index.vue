<template>
  <section class="container">
    <div>
      <chart/>
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
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
}

.subtitle {
  font-weight: 300;
  font-size: 38px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-transform: capitalize;
}

.links {
  padding-top: 15px;
}
</style>
