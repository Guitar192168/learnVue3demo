<template>
    <div>
        父组件
        <hr />
        <child></child>
        <hr />
    </div>
</template>
<script>
import Child from "./Child.vue"
export default {
    data() {
        return {
            
        }
    },
    components: {
        Child
    },
    errorCaptured(err, vm, info) {
        console.log('err', err);
        console.log('vm', vm);
        console.log('info', info);
        debugger
        // return false
    }
}
</script>