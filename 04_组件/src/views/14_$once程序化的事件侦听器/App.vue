<template>
    <div>
        <div>
            $on
            $once
            $off
        </div>
        <h2 v-if="isShow">
            {{message}}
        </h2>
        <button @click="demo">测试</button>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                message: '',
                isShow: true
            }
        },
        mounted() {
            let message = this.message = 'yang'
            this.$on('hook:beforeDestroy', function () {
                debugger
                console.log('触发了程序化')
            })

            // 好处就是不用挂载在根组件实例上。
            // 不用多写一个生命周期函数。会主动自己清理自己
            // var picker = new Pikaday({
            //     field: this.$refs[refName],
            //     format: 'YYYY-MM-DD'
            // })
            //
            // this.$once('hook:beforeDestroy', function () {
            //     picker.destroy()
            // })
        },
        methods: {
            demo() {
                this.message = '123'
                this.isShow = !this.isShow
            }
        }
    }
</script>

<style scoped>

</style>
