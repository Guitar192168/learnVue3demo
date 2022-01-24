

export function sum1(num1: number, num2: number): void {
    console.log(num1 + num2)
    //没有修改return的值，则默认返回一个undefined
    // 可以指定类型为void
    // 不可以指定为undefined,即使修改了配置项目strictNullChecks为false
}

//如果直接return num1 + num2的时候就可以指定返回值为number
export function sum(num1: number, num2: number): number {
    return num1 + num2
}