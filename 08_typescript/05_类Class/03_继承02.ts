class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    teach() {
        console.log('Person的teach');
    }
}

class Student extends Person {
    num: number

    constructor(name: string, age: number, num: number) {
        super(name, age)
        this.num = num
    }

    study() {
        console.log('Student的study');
    }
}

const stu = new Student('zhangsan', 18, 29)
console.log(stu)
export  {

}