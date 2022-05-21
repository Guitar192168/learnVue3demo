<template>
    <div>
        <div>我是子组件</div>
        <div>{{title}}</div>
    </div>
</template>

<script>
    export default {
        name: "child",
        props: {
            title: {
                type: String,
                default: '默认title'
            }
        }
    }
</script>

<style scoped>

</style>
