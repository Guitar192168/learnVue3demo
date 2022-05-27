<template>
    <div>
        <div>
            要跳转的页面
        </div>
        <button @click="change">切换id为2</button>
    </div>
</template>

<script>
    export default {
        name: "child",
        created() {
            console.log('child加载了')
        },
        methods: {
            change() {
                this.$router.push({
                    path: '/child',
                    query: {
                        id: 2,
                        t: Date.now()
                    }
                })
            },
        },
        // watch: {
        //     '$route.query.id': {
        //         // immediate: true,
        //         handler(newValue, oldValue) {
        //             console.log(newValue, oldValue)
        //             location.reload()
        //             // this.$router.go()
        //         }
        //     }
        // }
    }
</script>

<style scoped>

</style>
