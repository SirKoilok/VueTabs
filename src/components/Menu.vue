<template>
    <div class="navigation">
        <h1 style="text-decoration: underline">Menu</h1>
        <ul> 
            <li v-for="(item, index) in navigation" :key="'item'+index"> 
                <div class="name" @click="item.open = !item.open">
                    {{ item.title }}
                </div>
                <Dropdown v-if="item.subnav" :list="item"/>
            </li>
        </ul>
    </div>
</template>

<script>
import Dropdown from './Dropdown'

export default {
    computed: {
        navigation() {
            return this.$store.getters.navigation;
        }
    },
    components: {
        Dropdown
    }
}
</script>
