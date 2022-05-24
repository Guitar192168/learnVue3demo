<template>
    <div>
        {{value}}
        <input type="text" v-on:input="change">
    </div>
</template>

<script>
    export default {
        name: "child",
        props: {
            value: {
                default: 0
            }
        },
        methods: {
            change(e) {
                // console.log(e.target)
                this.$emit('input', e.target.value)
            }
        }
    }
</script>

<style scoped>

</style>
