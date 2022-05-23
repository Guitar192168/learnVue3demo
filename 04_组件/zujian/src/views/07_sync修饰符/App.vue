<template>
    <div>
        <h2>父组件显示{{num}}</h2>
        <child :age.sync="num"></child>
        <h2>.sync等同于等同于下面这种</h2>
        <child v-on:update:age="num = $event"></child>
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
                num: 19
            }
        }
    }
</script>

<style scoped>

</style>
