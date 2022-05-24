<template>
    <div>
        可以使用require来导入
        打包的时候需要搭配webpack的code splitting来
        或者使用import来导入，会返回一个promise对象的
        () => import('组件').then
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>
