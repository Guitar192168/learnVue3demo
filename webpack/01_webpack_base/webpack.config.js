const path = require('path')

/*
 * @Author: your name
 * @Date: 2021-10-05 11:12:56
 * @LastEditTime: 2021-10-05 17:29:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Vue3/webpack/01_webpack_base/webpack.config.js
 */
module.exports = {
    entry: "./src/main.js",
    output: {
        path:path.resolve(__dirname, './bundle'),
        filename:'bundle.js'
    }
}