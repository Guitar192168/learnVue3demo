<template>
    <div>
        <!--        <router-view :key="$route.path">-->
        <router-view :key="$route.query.t">
        </router-view>

        {{$route.fullPath}}
    </div>
</template>

<script>
    export default {
        name: "App.vue",
        beforeMount() {
            console.log(this.$el)
        },
        mounted() {
            console.log(this.$el)
        }
    }
</script>

<style scoped>

</style>
