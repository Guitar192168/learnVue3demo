/*
 * @Author: your name
 * @Date: 2021-10-05 11:38:35
 * @LastEditTime: 2021-10-06 10:38:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Vue3/03_webpack/02_webpack_css/03_webpack.config.js
 */

const path = require('path')
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, './dist'), //拼接路径，本地地址+ 生成的文件夹
        filename: 'build.js' //生成的文件名
    },
    module: {
        rules: [{
                test: /\.css$/, //正则表达式
                //1. 语法糖 直接写loader
                // loader:'css-loader'

                // use:"css-loader"
                use: [
                    // { loader: "css-loader",options:''}
                    "style-loader", //执行顺序: 后边的先加载
                    "css-loader",
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 require('autopreFixer')
                    //             ]
                    //         }
                    //     }
                    // }
                ]
            },
            {
                test: /\.less/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(less | css)/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
        ]
    }
}