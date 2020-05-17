<template>
    <div class="header">
        <div class="logo">
            <img alt="Vue logo" src="@/assets/logo.png">
            <h1 class="title">{{ pagetitle }}</h1>
        </div>
        <TabLink name="Tab One" tabId="One"/>
        <TabLink name="Tab Two" tabId="Two"/>
        <TabLink name="Tab three" tabId="Three"/>
    </div>
</template>

<script>
import TabLink from './TabLink.vue'
import { mapState } from 'vuex';

export default {
    name: "Header",
    components: {
        TabLink
    },
    computed: {
        ...mapState([
            'pagetitle'
        ])
    }  
}
</script>
