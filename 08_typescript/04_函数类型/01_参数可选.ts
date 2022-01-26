function foo(num1: number, num2: number) {
    return num1 + num2
}

const res = foo(1, 2)
console.log(res);

function bar(name?: string) {
    console.log(name);
}

bar('11')