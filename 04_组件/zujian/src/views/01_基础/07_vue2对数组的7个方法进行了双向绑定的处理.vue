<template>
    <div>
        <h2>共7个方法</h2>
        <div>
            {{arr}}
        </div>
        <button @click="demoPush">push</button>
        <button @click="demoPop">pop</button>
        <button @click="demoShift">shift</button>
        <button @click="demoUnShift">unshift</button>
        <button @click="demoSplice">splice</button>
        <button @click="demoSort">sort</button>
        <button @click="demoReverse">reverse</button>


        <h2>而直接通过index修改数组或者使用length修改数组长度是不行的</h2>
        <h2>而使用filter，slice，concat这种。将新数组直接赋值给旧数组，倒是可以</h2>
        <button @click="demoFilter">filter</button>
        <button @click="demoSlice">slice</button>
        <button @click="demoConcat">concat</button>
    </div>
</template>

<script>
    export default {
        name: "demo",
        data() {
            return {
                arr: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            demoPush() {
                console.log(this.arr.push(456));
                console.log(this.arr, '新的this.arr')
            },
            demoPop() {
                console.log(this.arr.pop());
                console.log(this.arr, '新的this.arr')
            },
            demoShift() {
                console.log(this.arr.shift());
                console.log(this.arr, '新的this.arr')
            },
            demoUnShift() {
                console.log(this.arr.unshift('unshift新增'));
                console.log(this.arr, '新的this.arr')
            },
            demoSplice() {
                console.log(this.arr.splice(0, 1, 'splice替换掉的元素'));
                console.log(this.arr, '新的this.arr')
            },
            demoSort() {
                console.log(this.arr.sort());
                console.log(this.arr, '新的this.arr')
            },
            demoReverse() {
                console.log(this.arr.reverse());
                console.log(this.arr, '新的this.arr')
            },
            //分割
            demoFilter() {
                this.arr = this.arr.filter(item => item > 4)
            },
            demoSlice() {
                this.arr = this.arr.slice(2)
            },
            demoConcat() {
                this.arr = this.arr.concat([789, 0])
            },
        }
    }
</script>

<style scoped>

</style>
