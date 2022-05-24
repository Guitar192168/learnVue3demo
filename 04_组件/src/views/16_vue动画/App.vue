<template>
    <div id="example-2">
        <button @click="show = !show">Toggle show</button>
        <transition name="bounce">
            <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at
                lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
        </transition>
        <div>
            CSS 动画用法同 CSS 过渡，区别是在动画中 v-enter 类名在节点插入 DOM 后不会立即删除，而是在 animationend 事件触发时删除。
        </div>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                show: true
            }
        }
    }
</script>

<style scoped>
    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }

        25% {
            transform: scale(1.25);
        }

        50% {
            transform: scale(1.5);
        }

        75% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }

</style>
