<template>
    <div>
        <input type="text" v-focus>
    </div>
</template>

<script>
    export default {
        name: "App",
        directives: {
            'focus': {
                // bind不行
                inserted: function (el) {
                    // console.log(el.focus())
                    el.focus()
                },
                componentUpdated(el, bindings, vNode, oldVnode) {
                    console.log(bindings.value, 'vNode', vNode, 'oldVnode', oldVnode)
                }
            }
        }
    }
</script>

<style scoped>

</style>
