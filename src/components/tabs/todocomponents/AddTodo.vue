<template>
    <div>
        <form class="card">
            <input v-bind:class="[title.length < 4 ? 'red' : 'green']" type="text" v-model="title" name="title" placeholder="Add Todo..." autocomplete="off" >
            <button @click.prevent="addTodo">Add</button>
        </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapMutations([
            'ADD_TODO'
        ]),
        addTodo: function() {
            if(this.title.length > 3){
                this.ADD_TODO(this.title);
            this.title = '';
            }
        }
    },
}
</script>