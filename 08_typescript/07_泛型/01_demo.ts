class Person<T> {
    age: T

    constructor(age: T) {
        this.age = age
    }
}

const p1 = new Person(18)

interface argLength {
    length: number
}

function foo<Type extends argLength>(arg: Type): Type {
    return arg.length
}

foo('abc')

export {}