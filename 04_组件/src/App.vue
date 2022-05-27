<template>
    <div id="app">

        <!--    <div id="nav">-->
              <router-link to="/">Home</router-link>
        <!--      |-->
              <router-link to="/child">About</router-link>
        <!--    </div>-->
        <!--        这样就可以同时传更多参数-->
<!--        <child @upload="childUpload($event,'猫哥傻逼')"></child>-->
        <!--        <button v-bind:disabled="isButtonDisabled">Button</button>-->



        <router-view></router-view>
    </div>
</template>
<script>
    import child from "./views/child.vue";

    export default {
        components: {
            child
        },
        data() {
            return {
                isButtonDisabled: false
            }
        },
        methods: {
            childUpload(e, a) {
                console.log('父', e, a)
            },
            demo() {
                console.log('123')
            }
        }
    }
</script>
<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
