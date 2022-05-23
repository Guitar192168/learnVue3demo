<template>
    <div>
        <h2>子组件data中重新命名的fatherInfo: {{fatherInfo}}</h2>
        <hr>
        <h2>子组件的info: {{info}}</h2>
        <button @click="change">子组件尝试修改父组件的值</button>
    </div>
</template>

<script>
    export default {
        name: "child",
        props: {
            info: {
                type: Object,
                default: () => {
                    return {}
                }
            },
        },
        data() {
            return {
                fatherInfo: this.info
            }
        },
        computed:{
            computedInfo:{
                get(){
                    return this.info
                }
            }
        },
        methods: {
            change() {
                this.fatherInfo.age++
            }
        }
    }
</script>

<style scoped>

</style>
