<template>
    <div>
        <form>
            <button @click.prevent="changeTab(tabId)" class="tabButton">{{name}}</button>
        </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        name: String,
        tabId: String
    },
    methods: {
        ...mapMutations([
            'CHANGE_TAB'
        ]),
        changeTab: function(tabId) {
            this.CHANGE_TAB(tabId)
        }
    },
}
</script>
