<template>
    <div>
        <h2>不允许子组件修改父组件的值，</h2>
        <h2>子组件显示 {{fatherData}}</h2>
        <button @click="addAge">过生日</button>
    </div>
</template>

<script>
    export default {
        name: "child",
        props: {
            age: {
                type: Number,
                default: 18
            }
        },
        data() {
            return {
                fatherData: this.age
            }
        },
        // computed: {
        //     fatherData: {
        //         get() {
        //             return this.age
        //         },
        //         set(value) {
        //             // console.log(value)
        //             this.age = value
        //         }
        //     }
        // },
        methods: {
            addAge() {
                this.fatherData++
                this.$emit('update:age', this.fatherData)
            }
        }
    }
</script>

<style scoped>

</style>
