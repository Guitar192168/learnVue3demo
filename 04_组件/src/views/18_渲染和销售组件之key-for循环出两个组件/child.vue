<template>
    <div>
        child组件
    </div>
</template>

<script>
    export default {
        name: "child",

        mounted() {
            console.log('child组件的mount')
        },
        destroyed() {
            console.log('child组件的destroyed')
        }
    }
</script>

<style scoped>

</style>
