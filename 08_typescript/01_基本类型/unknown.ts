// 不确定类型
function foo(): number {
    return 123
}

function bar(): string {
    return '张三'
}

const flag = true
// let result: string | number
let result: unknown //不能明确指定返回的类型
//const result 必须进行初始化

if (!flag) {
    //Property 'length' does not exist on type 'number'.
    result = foo()
} else {
    result = bar()
}

if (typeof result === 'string') {
    console.log(result.length)
}


