<template>
    <div>
        <div v-for="item in children" :key="item.id">
            <component :is="item.name"></component>
        </div>
        <button @click="test">修改id</button>
    </div>
</template>

<script>
    import home from './home'
    import child from './child'

    export default {
        name: "App",
        components: {
            child,
            home
        },
        data() {
            return {
                children: [{id: 1, name: 'child'}, {id: 2, name: 'home'}]
            }
        },
        methods: {
            test() {
                this.children[0].id = 3
            }
        }
    }
</script>

<style scoped>

</style>
