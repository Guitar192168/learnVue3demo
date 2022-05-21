<template>
    <div>
        <input type="checkbox">

        123

        同样是自定义组件，如果子组件的input的type不是text, 而是checkbox。则一开始默认的
        v-bind:value='变量'
        v-on:input='事件'
        则不通用了。
        为了解决，可以使用model对象来避免冲突
        model{
        prop:'checked',
        event:'change'
        }

        <child v-model="isChecked"></child>
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
                isChecked: false
            }
        }
    }
</script>

<style scoped>

</style>
