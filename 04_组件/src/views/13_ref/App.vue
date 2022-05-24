<template>
    <div>
        <h2>ref为子组件赋值一个id引用</h2>
        <div> {{num}}</div>
        <input type="text" ref="demo" v-model="num" @click="clickInput">
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                num: 1
            }
        },
        created() {
            console.log('created', this.$refs, 'ref在组件渲染结束后才生效')
        },
        mounted() {
            console.log('mounted', this.$refs.demo.value)
        },
        methods: {
            clickInput() {
                console.log(this.$refs.demo.value)
                /**
                 * ref的值不是响应式的
                 */
                this.$refs.demo.value = 123
            }
        }
    }
</script>

<style scoped>

</style>
