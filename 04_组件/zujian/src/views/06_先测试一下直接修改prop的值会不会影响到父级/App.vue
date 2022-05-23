<template>
    <div>
        <div>父组件的info:{{info}}</div>
        <child :info="info"></child>
    </div>
</template>

<script>
    import child from './child'

    export default {
        name: "App",
        components: {
            child
        },
        data() {
            return {
                info: {
                    name: 1,
                    age: 18
                }
            }
        }
    }
</script>

<style scoped>

</style>
