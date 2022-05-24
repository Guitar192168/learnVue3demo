<template>
    <div>
        <child v-model="message"></child>
        <h2>等价于</h2>
        <child v-bind:value="message" v-on:input="message = $event"></child>
        <div>理解了这里为啥用$event了，这个其实是子组件传递给父组件的参数</div>
        <child v-bind:value="message" v-on:input="childEmit"></child>
        <div>
            子组件需要做两个
            <ul>
                <li>先接受一个属性为value的prop</li>
                <li>然后在子组件内部的input组件的 input方法触发的时候，emit出去 一个自定义的input事件</li>
            </ul>
        </div>
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
                message: 123
            }
        },
        methods: {
            // childEmit(e) {
            //     console.log(e)
            //     this.message = e
            // }
            childEmit($event) {
                console.log($event)
                this.message = $event
            }
        }
    }
</script>

<style scoped>

</style>
