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
        name: "App.vue"
    }
</script>

<style scoped>

</style>
