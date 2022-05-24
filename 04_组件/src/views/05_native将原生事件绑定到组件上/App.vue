<template>
    <div>
        <child v-on:focus="onFocus"></child>
        <h2>如果想要在组件上调用原生事件，需要使用.native修饰符才会生效。</h2>
        <child @click.native="testNativeClick"></child>
    </div>
</template>

<script>
    import child from './child'

    export default {
        name: "App",
        components: {
            child
        },
        methods: {
            onFocus() {
                console.log('子组件点击，加 子传父')
                // console.log(this.$emit(''))
            },
            testNativeClick() {
                console.log('测试一下直接在组件上调用native')
            }
        }
    }
</script>

<style scoped>

</style>
