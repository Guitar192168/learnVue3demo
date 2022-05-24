<template>
    <div>
        插槽
        具名插槽 v-slot=title 不是:,也不需要"" 一定要用template v-slot:name 包括独占插槽。即只有default默认插槽的时候，可以用 default的时候直接在标签上写的。
            独占插槽
            缩写v-slot=title  变为 #title
        作用域插槽 由子组件提供插槽属性prop 父组件v-slot:default="slotProps" 来接收 。这里的default是插槽名字，而slotProps是插槽传递出来是所有插槽属性名

        解构作用域插槽
        为啥能解构，是因为插槽的原理：是将插槽的内容包裹在一个拥有单个参数的函数里。所有才能解构的
        作用域插槽的内部工作原理是将你的插槽内容包裹在一个拥有单个参数的函数里：
        function (slotProps) {
        // 插槽内容
        }

        动态插槽名
        <child>
            <!--            <template v-slot="title">-->
            <h2>v-slot只能在template中使用, 除了独占插槽这种。</h2>
            <h2>独占插槽:当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上：</h2>
            <template v-slot:title>
                你好
            </template>
        </child>

        <hr>
        <div>
            <h2>作用域插槽</h2>
            <h3>在插槽内定义了插槽属性后，然后我们来定义 由包含所有传递出来的插槽属性的对象名，为slotProps。也可以叫别的名字</h3>
            <child v-slot:default="slotProps">
                这里的default也可以不写的
                {{slotProps.user}}
                <div>
                    {{slotProps.user.name}}
                </div>
            </child>
        </div>
        <hr>
        <div>
            <h2>作用域插槽+具名插槽</h2>
            <child v-slot:user="slotProps">
                {{slotProps}}
            </child>
        </div>

        <hr>
        <div>
            <h2>作用域插槽+具名插槽+解构插槽</h2>
            <child v-slot:user="{user}">
                <div>
                    {{user}}
                </div>
            </child>
        </div>

        <hr>
        <div>
            <h2>作用域插槽+具名插槽+解构插槽+解构默认值</h2>
            <!--            <child v-slot:user="{user = {name:123}}">-->
            <child v-slot="{info = {name:123}}">
                <div>
                    {{info}}
                </div>
            </child>
        </div>
    </div>
</template>

<script>
    import child from './child'

    export default {
        name: "App",
        components: {
            child
        }
    }
</script>

<style scoped>

</style>
