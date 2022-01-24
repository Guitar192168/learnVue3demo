/*
 * @Author: your name
 * @Date: 2021-09-23 23:09:33
 * @LastEditTime: 2021-09-23 23:30:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Vue3/webpack/01_webpack_base/index.js
 */

import {
    add
} from './main.js';
let  {
    foo
} = require('./demo.js')


console.log(add(1, 2))
console.log(foo())