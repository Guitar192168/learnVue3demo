<template>
    <div>child组件
        <button @click="change">child组件传递子组件</button>
    </div>
</template>

<script>
    export default {
        name: "child",
        data() {
            return {}
        },
        methods: {
            change() {
                this.$emit('childBtn', {name: 'child'})
            }
        }
    }
</script>

<style scoped>

</style>
