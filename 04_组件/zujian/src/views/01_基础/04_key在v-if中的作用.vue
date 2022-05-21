<template>
    <div>
        <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username" key="username">
        </template>
        <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address" key="emial">
        </template>
        <div>
            <button @click="change">测试一下不加key的v-if</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "04_key在v-if中的作用",
        data() {
            return {
                loginType: 'username',
                isShow: true
            }
        },
        methods: {
            change() {
                this.isShow = !this.isShow
                if (this.isShow) {
                    this.loginType = 'username'
                } else {
                    this.loginType = ''
                }
            }
        }
    }
</script>

<style scoped>

</style>
