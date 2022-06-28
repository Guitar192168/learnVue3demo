<template>
    <div class="home">
        二级路由页面

        <keep-alive>
            <demo2></demo2>
        </keep-alive>
    </div>
</template>

<script>
import demo2 from "./demo2.vue"
// @ is an alias to /src

export default {
    name: 'demo',
    components: {
        demo2
    },
    data() {
        return {
            num: 10
        }
    },
    methods: {
        add() {
            this.num++
        },
        to() {
            this.$router.push({ path: '/demo/demo2' })
        }
    }
}
</script>
