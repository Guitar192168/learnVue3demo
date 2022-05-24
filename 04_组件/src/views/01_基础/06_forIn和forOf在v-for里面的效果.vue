<template>
    <div>
        <ul id="example-1">
            数组的
            <li v-for="(item,index) in items" :key="item.message">
                {{ item }}+{{index}}
            </li>
        </ul>
        <div>
            对象的。是按照Object.keys的结果来遍历的。
            <ul id="v-for-object" class="demo">
                <li v-for="(value,name,index) in object">
                    第一个参数是属性值 {{ value }}
                    <br>
                    <div>
                        '我是第二个参数，是属性:' {{name}}
                    </div>
                    <div>
                        '我是索引，对象这里是第三个参数': {{index}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "demo",
        data() {
            return {
                items: [
                    {message: 'Foo'},
                    {message: 'Bar'}
                ],
                object: {
                    title: 'How to do lists in Vue',
                    author: 'Jane Doe',
                    publishedAt: '2016-04-10'
                }
            }
        }
    }
</script>

<style scoped>

</style>
