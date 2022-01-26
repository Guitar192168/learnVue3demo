// 可选链  对象属性不存在的时候返回undefined,如果存在了才会继续执行
interface Person {
    name: string,
    age: number,
    friend?: {
        name?: string,
    }
}

const person: Person = {
    name: '张三',
    age: 19,
    friend: {
        name: '11'
    }
}

console.log(person?.friend?.name) //报错：对象可能未定义
//使用 非空断言，只是逃过了编译阶段的报错。实际情况如果还剩没值的话还是会报错



export {

}