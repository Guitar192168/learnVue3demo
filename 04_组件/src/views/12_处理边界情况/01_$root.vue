<template>
    <div>
        <button @click="test">访问根实例</button>
    </div>
</template>

<script>
    import rootChild from "./rootChild";

    export default {
        name: "demo",
        components: {
            rootChild
        },
        data() {
            return {
                name: '123',
                foo: 456
            }
        },
        methods: {
            test() {
                console.log(this.$root)
            }
        }
    }
</script>

<style scoped>

</style>
