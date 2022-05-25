<template>
    <div>
        <h2>我是child</h2>
        <button @click="demo">
            我是child的button
        </button>
    </div>
</template>

<script>
    export default {
        name: "child",
        methods: {
            demo() {
                this.$emit('upload', {name: 1})
            }
        },

    }
</script>

<style scoped>

</style>
