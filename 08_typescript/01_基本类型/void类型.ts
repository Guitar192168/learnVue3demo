// 如果函数是没有返回值的，那么它就是void类型
// 可以将null和undefined赋值给void

//strictNullChecks限制的是 将null和undefined对其他类型变量的赋值
function foo(num1: number, num2: number): void {
    console.log(num1 + num2)
    // 该函数没有明确指定返回值，则默认返回的是 return undefined
}

function bar3(num1: number, num2: number): void {
    console.log(num1 + num2)
    return null
}

function bar(num1: number, num2: number): number {
    console.log(num1 + num2)
    return undefined
}

function bar2(num1: number, num2: number): number {
    console.log(num1 + num2)
    return null
}



bar(1, 2)
bar2(1, 2)
bar3(1, 2)
