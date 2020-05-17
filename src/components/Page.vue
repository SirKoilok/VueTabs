<template>
    <div>
        <TabOne v-if="$store.state.tab.name === 'One'"/>
        <TabTwo v-if="$store.state.tab.name === 'Two'"/>
        <TabThree v-if="$store.state.tab.name === 'Three'"/>
    </div>
</template>

<script>
import TabOne from './tabs/TabOne'
import TabTwo from './tabs/TabTwo'
import TabThree from './tabs/TabThree'

export default {
    components: {
        TabOne,
        TabTwo,
        TabThree
    },
}
</script>

<style scoped>

</style>