// public privite protected

class Person {
    protected name: string = '11'
    constructor(name: string) {
        this.name = name
    }
}

class Student extends Person {
    getName(){
        return this.name
    }
}

const stu = new Student('张三')
console.log(stu)
console.log(stu.getName())

export {

}