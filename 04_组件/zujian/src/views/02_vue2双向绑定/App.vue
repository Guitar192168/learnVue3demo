<template>
    <div>
        双向绑定的值:<h2>{{message}}</h2>
        <!--        <input type="text" v-on:input="change">-->
        <input type="text" v-on:input="message = $event.target.value">
    </div>
</template>

<script>

    export default {
        name: "App",
        data() {
            return {
                message: ''
            }
        },
        methods: {
            change(e) {
                console.log(e.target.value)
                this.message = e.target.value
            }
        }
    }
</script>

<style scoped>

</style>
