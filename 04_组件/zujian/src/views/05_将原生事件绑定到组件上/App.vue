<template>
    <div>
        <child  v-on:focus.native="onFocus"></child>
    </div>
</template>

<script>
    import child from './child'

    export default {
        name: "App",
        components: {
            child
        },
        // methods: {
        //     onfocus() {
        //         console.log(11)
        //     }
        // }
    }
</script>

<style scoped>

</style>
