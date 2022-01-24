const arr: number[] = [1, 2, 3];

console.log(arr);

const stringArr: string[] = ["abc", "NBA"];
const arr2: any[] = [1, "22"];
console.log(arr2);

// 泛型
const arr3: Array<Number> = [1, 2, 3];
// arr3.push(123);

// tsc init进行初始化配置文件

/**
 * "strictNullChecks": true,      Enable strict null checks. 
 * 该配置项默认即为true，如果开启则表示 ‘不允许把undefined和null赋值给其他类型的变量’
 * 就算是数组的push也不行
 */

// arr3.push(undefined);
// arr3.push(null);
console.log(arr3);
export{

}