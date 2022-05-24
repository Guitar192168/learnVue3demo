<template>
    <div>home组件
        <button @click="change">home组件传递子组件</button>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {}
        },
        methods: {
            change() {
                this.$emit('homeBtn', {name: 'home'})
            }
        }
    }
</script>

<style scoped>

</style>
