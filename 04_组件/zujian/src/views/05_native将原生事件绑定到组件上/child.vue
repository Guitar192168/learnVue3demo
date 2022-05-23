<template>
    <div>
        <p>
            <input type="text" @click="demo">
        </p>
    </div>
</template>

<script>
    export default {
        name: "child",
        methods: {
            demo() {
                this.$emit('focus', {name: 1})
            }
        }
    }
</script>

<style scoped>

</style>
