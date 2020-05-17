<template>
    <div>
        <div v-for="(item, index) in todosarray" :key="'item'+index">
            <Todo-item :title="item.title" :isComplete="item.completed" :id="item.id"/>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    name: "Todos",
    components: {
        TodoItem
    },
    props: ["todos"],
    computed: {
        todosarray() {
            return this.$store.getters.todosarray;
        }
    },
}
</script>
