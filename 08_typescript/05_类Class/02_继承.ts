class Person {
    name: string = '张三'
    age: number = 19

    teach() {
        console.log('person的teach');
    }
}

class Student extends Person {
    // age: 20
    class: number = 20
    constructor() {
        super()
    }
    studing() {
        console.log('student的studing');
    }
}

let stu = new Student()
console.log(stu);


export {

}