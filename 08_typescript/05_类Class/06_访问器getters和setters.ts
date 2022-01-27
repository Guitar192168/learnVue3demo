class Person {
    private _name: string

    constructor(name: string) {
        this._name = name
    }

    getters() {
        return this._name
    }

    setters(newName: string) {
        this._name = newName
    }
}

let person = new Person('张三')
console.log(person.getters())
person.setters('111')
console.log(person.getters())
export {

}