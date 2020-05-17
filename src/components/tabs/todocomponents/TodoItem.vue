<template>
    <div class="todo-item" v-bind:class="isComplete ? 'is-complete' : 'todo-item'">
        <p>
            <input type="checkbox" @change="toggleComplete(id)">
            {{ title }}
            <button class="del" @click.prevent="deleteTodo(id)">Delete</button>
        </p>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: "TodoItem",
    props: {
        title: String,
        isComplete: Boolean,
        id: String
    },
    methods: {
        ...mapMutations([
            'TOGGLE_COMPLETE',
            'DELETE_TODO'
        ]),
        toggleComplete: function(todoid) {
            this.TOGGLE_COMPLETE(todoid)
        },
        deleteTodo: function(todeleteid) {
            this.DELETE_TODO(todeleteid)
        }
    },
}
</script>