// interface IPerson {
//     name: string
//     age: number
// }

interface IPerson<T = string, P = number> {
    name: T
    age: P
}

const info: IPerson<string, number> = {
    name: '123',
    age: 19
}

console.log(info)