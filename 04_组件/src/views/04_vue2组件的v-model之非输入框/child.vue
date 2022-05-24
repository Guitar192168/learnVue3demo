<template>
    <div>
        <input type="checkbox" v-bind:checked="checked"  v-on:change="$emit('change', $event.target.checked)">
    </div>
</template>

<script>
    export default {
        name: "child",
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            checked: Boolean
        },
        methods: {
            childChange(e) {
                // console.log(e.target.checked)
                this.$emit('change', e)
            }
        }
    }
</script>

<style scoped>

</style>
