<template>
    <div>
        <h2>
            这个自定义组件 'blog-post-row' 会被作为无效的内容提升到外部，并导致最终渲染结果出错。
        </h2>
        <h2>
            需要注意的是如果我们从以下来源使用模板的话，这条限制是不存在的：

            字符串 (例如：template: '...')
            单文件组件 (.vue)
            'script type="text/x-template"'
        </h2>
        <ul>
            <li v-for="item in items" is="child" :title="item.title">{{item.title}}</li>
            <li>2</li>
            <li>3</li>
            <li>
                <child></child>
            </li>
        </ul>
        <table>
            <child></child>
        </table>
    </div>
</template>

<script>
    import child from "./Components/child"

    export default {
        name: "demo",
        components: {
            child
        },
        data() {
            return {
                items: [{title: '123'}, {title: '456'}]
            }
        }
    }
</script>

<style scoped>

</style>
