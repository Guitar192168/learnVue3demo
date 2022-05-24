<template>
    <div>
        <todoChild>
            <template v-slot:yang="slotProps">
                <div v-if="slotProps.todo.isShow">√</div>
                {{slotProps.todo.isShow}}
            </template>
        </todoChild>
    </div>
</template>

<script>
    import todoChild from "./todoChild";

    export default {
        name: "todoList",
        components: {
            todoChild
        }
    }
</script>

<style scoped>

</style>
