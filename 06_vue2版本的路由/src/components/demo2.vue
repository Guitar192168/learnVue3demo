<template>
    <div class="home">
        三级路由页面
        {{ num }}
        <hr />
        <button @click="add">增加</button>
        <hr />
       
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'demo2',
    data() {
        return {
            num: 10
        }
    },
    methods: {
        add() {
            this.num++
        },
      
    }
}
</script>
