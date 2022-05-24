<template>
    <div>
        <component @homeBtn="demo" @childBtn="childDemo" :is="isShow?'home':'child'"></component>
        <button @click="isShow = !isShow">切换子组件</button>
    </div>
</template>

<script>
    import home from './home'
    import child from './child'

    export default {
        name: "App",
        components: {
            child,
            home
        },
        data() {
            return {
                currentComponent: 'home',
                isShow: true,
            }
        },
        methods: {
            demo(e) {
                console.log('home', e)
            },
            childDemo(e) {
                console.log('child', e)
            }
        }
    }
</script>

<style scoped>

</style>
