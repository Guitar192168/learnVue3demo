//第一版本
// function add(num1: number, num2: number, calcFn: (num1: number, num2: number) => number) {
//     return calcFn(num1, num2)
// }


type calcFn = (num1: number, num2: number) => number

function calc(num1: number, num2: number, calcFn: calcFn) {
    return calcFn(num1, num2)
}


const add: calcFn = (num1: number, num2: number) => {
    return num1 + num2
}

let res = calc(10, 20, add)
console.log(res)