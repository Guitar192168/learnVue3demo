<template>
    <div>

        <button @click="toView">
            同一个组件，跳去 /child
        </button>

    </div>
</template>

<script>
    export default {
        name: "App",
        methods: {
            toView() {
                this.$router.push({
                    path: '/child',
                    query: {
                        id: 1
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
