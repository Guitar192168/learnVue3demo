class Person {
    name: string = 'zhangsan'
    age: number = 19

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eating() {
        console.log(this.name);
    }
}


let person = new Person('lisi', 20)
console.log(person);
person.eating()

