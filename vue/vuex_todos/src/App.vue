<style src="todomvc-app-css/index.css"></style>

<template>
  <section id="todoapp">
    <!-- vue区别于 react jsx template directives v-if v-for  -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" autofocus autocomplete="off" placeholder="what needs to be done?" @keyup.enter="addTodo">
    </header>
    <section class="main" v-show="todos.length">
      <ul class="todo-list">
        <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" />
      </ul>
    </section>
  </section>
</template>

<script>
// MVVM 在公司 前端多于后端
import TodoItem from './components/TodoItem'

export default {
  name: 'App',
  // props: {},
  // this.state = {},
  // data() {
  //   return {
  //     todos: []
  //   }
  // },
  // vuex todos?
  // todos 不可以是本地的state
  computed: {
    // 计算属性，vuex中状态到此落户
    todos() { // 计算函数的结果
      // data money = 1200000000
      // 函数才能给你计算的空间
      return this.$store.state.todos
    }
  },
  methods: {
    addTodo(e) {
      const text = e.target.value;
      console.log(text);
      if (text.trim()) {
        // 申请vuex 加一条数据
        this.$store.dispatch('addTodo', text);
      }
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
