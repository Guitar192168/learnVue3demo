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
        这样一改就成了
        子组件prop属性为checked
        而子组件v-on的事件为change事件




    ！！注意你仍然需要在组件的 props 选项里声明 checked 这个 prop。


        <!--        <input-->
<!--                type="checkbox"-->
<!--                v-bind:checked="checked"-->
<!--                v-on:change="$emit('change', $event.target.checked)"-->
<!--        >-->

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
