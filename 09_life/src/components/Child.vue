<template>
    <div>
        子组件
        {{value}}
        <button @click="demo">子组件测试</button>
    </div>
</template>
<script>
export default {
    name: 'Child',
    data() {
        return {
            value: 9
        }
    },
    methods: {
        demo() {
            // this.img.src = 1
            // throw new Error('123')
            this.value++
        }
    },
    // beforeCreate(){
    //     throw '789'
    // },
    beforeUpdate() {
        throw '789'
    },
    errorCaptured() {
        throw new Error('456')
        // return false
        // debugger
    }
}
</script>
