interface Person {
    name: string,
    age: number
}

const obj = {
    name: '张三',
    age: 18,
    //擦除只会擦除多余的，如果最基本的都不符合，则字面量赋值也不行。比如少个age属性
    height: 1.88
}

const info2: Person = {
    name: '张三',
    age: 18,
    height: 1.88,
}

//进行引用赋值的时候会进行擦除操作
//freshness擦除
const info: Person = obj
// console.log(info.height)
console.log(info.name)