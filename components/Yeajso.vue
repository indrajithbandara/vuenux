<template>
  <div class="">
    <ul id="example-1">
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'

  var vm = new Vue({
    el: '#example-1',
    data: {
      items: [
        { message: 'Foo' },
        { message: 'Bar' },
        { message: '2Foo' },
        { message: '2Bar' }
      ]
    }
  })
  console.log(vm.message)

  export default {
    name: 'Yeajso'
  }
</script>

<style scoped>
  > * {
    font-weight: normal;
    color: white;
  }
</style>
