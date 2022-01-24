/*
 * @Author: your name
 * @Date: 2022-01-23 10:39:08
 * @LastEditTime: 2022-01-23 11:10:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \demo\ts\01_TS的数据类型\never类型.ts
 */
function foo(): never {
    while (true) {
        console.log('123')
    }
}

function bar(): never {
    throw new Error('报错啦')
}

//never的应用场景
// switch case内部缺失了boolean类型的判断  

function handleMessage(message: string | number | boolean) {// 为了让用户如果在此手动添加了boolean类型，可以提醒他switch case内没有对boolean进行判断
    switch (typeof message) {
        case 'string':
            console.log('string类型');
            break;
        case 'number':
            console.log('number类型');
            break;
        //所以必须加上 对新增的boolean类型的处理
        case 'boolean':
            console.log('boolean类型');
            break;
        default:
            const check: never = message // never表示永远不可能有这样一个赋值过程
        //最后面可以不让break，执行完直接退出switch了
    }
}

handleMessage(1)
handleMessage('张三')
// 传入布尔类型
handleMessage(true)