// 重载签名 overload signatures

// function sum(num1: string | number, num2: string | number) {
//     return num1 + num2
// }
// 这种会报错


function sum(num1: number, num2: number): number; //没有编写函数具体的实现  ts内的函数重载是没有具体的实现的。
function sum(num1: string, num2: string): string;

function sum(num1: any, num2: any): any {
    // 具体的实现可以任意的写
    return num1 + num2
}

const res1 = sum(1, 2)
const res2 = sum('ab', 'cd')

// sum({ name: 1 }, { name: 2 })
console.log(res1);
console.log(res2);

export {

}