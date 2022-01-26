function sum(num1: number, ...num: number[]) {
    let total = num.reduce((cur, next) => {
        return cur + next
    }, num1)

    return total
}

let res = sum(1, 2, 3, 4, 5)
console.log(res);

export {
    
}
