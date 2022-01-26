// 原本使用联合类型更简洁的话使用联合类型更好
// 这个案例里，string和[]都有length属性

// function getLength(args: string | any[]): number {
//     return args.length
// }


// console.log(getLength('123'));
// console.log(getLength([1, 2, 3, 4, 5]));


function getLength(args: string): number
function getLength(args: any[]): number;

function getLength(args: any) {
    return args.length
}


console.log(getLength('123'));
console.log(getLength([1, 2, 3, 4, 5]));
