import {sum} from './math'
import axios from 'axios'

//如果有被声明过，就不会报错了
//通过社区的一个公有库DefinitelyTyped存放类型声明文件
//或者  npm i --save-dev @types/lodash
import _ from 'lodash'

console.log(_.join([1, 2, 3]))

// document.getElementById()
console.log(sum(1, 2))

console.log(sum(10, 20))
console.log(sum(10, 1000))