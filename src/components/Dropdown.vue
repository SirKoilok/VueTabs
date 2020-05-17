<template>
    <div>
        <ul v-show="list.open" > 
            <li class="sub-item" v-for="(item, index) in list.subnav" :key="'item'+index"> 
                <div class="name" @click="item.open = !item.open">
                    {{ item.title }}
                </div>
                <Dropdown class:="subnav" v-if="item.subnav" :list="item"/>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Dropdown',
    props: [
        'list'
    ]
}
</script>