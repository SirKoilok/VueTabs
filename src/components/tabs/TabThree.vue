<template>
  <div> 
    <AddTodo v-on:add-todo="addTodo" />
    <Todos />
  </div>
</template>

<script>
import Todos from './todocomponents/Todos';
import AddTodo from './todocomponents/AddTodo';

export default {
  name: 'tabThree',
  components: {
    Todos,
    AddTodo
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  }
}
</script>
