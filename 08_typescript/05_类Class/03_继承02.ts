class Person {
    name: string
    age: number

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    teach() {
        console.log('person的teach');
    }
}

class Student extends Person {
    num: number

    constructor(name: string, age: number, num: number) {
        super()
        this.num = this.num
    }
    studing() {
        console.log('student的studing');
    }
}

let stu = new Student('张三', 19, 20)
console.log(stu);


export {

}