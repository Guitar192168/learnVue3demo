<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "rootChild",
        data() {
            return {
                foo: '$root的foo'
            }
        },
        methods: {
            foo() {
                console.log('访问根实例', this.$root.foo)
            }
        }
    }
</script>

<style scoped>

</style>
