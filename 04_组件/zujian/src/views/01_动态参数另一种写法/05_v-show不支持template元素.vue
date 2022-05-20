<template>
    <div>
        v-show是对css中的display进行操作。值为none
        <template v-show="isShow">
            测试一下v-show在template中是不是不支持
            <div>
                已经设置了v-show="isShow"为false，还是会继续显示的
            </div>
        </template>
        <div> 普通元素呢？就会生效，隐藏起来</div>
        <div v-show="isShow">
            普通元素呢？
        </div>
    </div>
</template>

<script>
    export default {
        name: "05_v-show不支持template元素",
        data() {
            return {
                isShow: false
            }
        }
    }
</script>

<style scoped>

</style>
