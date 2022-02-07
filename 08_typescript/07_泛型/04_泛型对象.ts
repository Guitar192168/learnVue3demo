class Person<T, P> {
    name: T
    age: P

    constructor(name: T, age: P) {
        this.name = name
        this.age = age
    }
}

let person = new Person('张三', 18)
let person2 = new Person<string, number>('张三', 18)

//这里写法有点出入  Person<string, number>
//拿到Person这样一个类
let person3: Person<string, number> = new Person('张三', 18)

/**
 * 定义数组类型
 */

const arr1: number[] = [1, 2, 3]
//拿到Array一个类
//不太推荐这样写       react 里有jsx 也是<>
const arr2: Array<number> = [1, 2, 3]

