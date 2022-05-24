<template>
    <div>
        <component @homeBtn="demo" @childBtn="childDemo" :is="isShow?'home':'child'"></component>
        <button @click="isShow = !isShow">切换子组件</button>

<!--        内联模板-->
        <child inline-template>
            <div>
                <p>These are compiled as the component's own template.</p>
                <p>Not parent's transclusion content.</p>
            </div>
        </child>
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
