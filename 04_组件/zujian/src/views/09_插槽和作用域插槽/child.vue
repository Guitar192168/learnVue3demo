<template>
    <div>
        <div>
            <slot name="title"></slot>

            这种是将user作为slot的一个属性，传递出去。插槽prop
            <slot :user="user">这种是默认插槽+作用域插槽</slot>
            <slot name="user" :user="user"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "child",
        data() {
            return {
                user: {
                    name: 'yang'
                }
            }
        }
    }
</script>

<style scoped>

</style>
