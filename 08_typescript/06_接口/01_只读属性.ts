interface IPerson {
    name: string,
    readonly  friend: {
        age: number
    }
}

let person: IPerson = {
    name: '123',
    friend: {
        age: 18
    }
}

person.friend.age = 20
console.log(person.friend.age)

