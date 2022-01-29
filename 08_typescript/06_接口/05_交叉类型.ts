// 联合类型 string | number
// 交叉类型 &

// 错误写法，应该写type，写类型
// const info = number & string


//这里被断言为 never类型
type info = number & string

interface Person {
    teach: () => void
}

interface Student {
    study: () => void
}

type info1 = Person | Student
//使用意义，场景
type info2 = Person & Student
const obj1: info1 = {
    teach() {

    }
}

const obj2: info2 = {
    teach() {

    },
    study() {

    }
}

export {}