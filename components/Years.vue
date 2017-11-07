<template>
  <div class="years" id="todo-list-example">
    <div class="years_title">Year Cycles</div>
    <ul>
      <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
      ></li>
    </ul>
  </div>
</template>

<script>

  import Vue from 'Vue'

  Vue.component('todo-item', {
    template: '<li>{{ title }}</li>',
    props: ['title']
  })

  export default {
    el: '#todo-list-example',
    name: 'Years',
    data: {
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ]
    }
  }

  // export default {
  //   name: 'Hello',
  //   data () {
  //     return {
  //       msg: 'anivue yeah',
  //       payoff: 'start learn it!'
  //     }
  //   }
  // }

  import yearlist from '@/assets/json/years.json'
  // ....
  yearlist.forEach(x => {
    console.log(x.year, x.animal, x.element)
  })

  // export default {
  //   name: 'Years'
  // }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  > * {
    font-weight: normal;
    color: red;
  }
</style>
