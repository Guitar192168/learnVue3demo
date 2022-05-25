<template>
    <div>
        home组件
    </div>
</template>

<script>
    export default {
        name: "home",
        mounted() {
            console.log('home组件的mount')
        },
        destroyed() {
            console.log('home组件的destroyed')
        },
    }
</script>

<style scoped>

</style>
