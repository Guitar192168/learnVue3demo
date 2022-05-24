<template>
    <div>
        <ul>
            <li v-for="item in todos">
                <slot name="yang" :todo="item">
                    {{item.text}}
                </slot>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "todoChild",
        data() {
            return {
                todos: [{text: "你好", isShow: true}, {text: "hello", isShow: false}, {text: "测试展示与否", isShow: true}]
            }
        }
    }
</script>

<style scoped>

</style>
