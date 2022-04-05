/*
 * @Author: your name
 * @Date: 2021-10-05 11:38:35
 * @LastEditTime: 2021-10-31 20:37:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Vue3/03_webpack/02_webpack_css/03_webpack.config.js
 */

const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWepackPlugin = require('html-webpack-plugin')
const path = require('path')
const {
    VueLoaderPlugin
} = require('vue-loader/dist/index')
module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        publicPath: './',
        path: path.resolve(__dirname, './dist'), //拼接路径，本地地址+ 生成的文件夹
        // filename: 'build.js' //生成的文件名
        filename: 'js/build.js' //加了个 js/  那么会生成一个js文件，里面是build.js
    },
    module: {
        rules: [{
                test: /\.css$/, //正则表达式
                use: [
                    "style-loader", //执行顺序: 后边的先加载
                    "css-loader",
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/, //正则里 ？ 表示0个或者1个
                use: "file-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
                // use: {
                //     loader: 'babel-loader', // 这样写没有指定插件去处理
                //     options: {
                //         presets: [
                //             // ["@babel/preset-env",{}]//内部再套数组是因为可以进行配置{}
                //             ["@babel/preset-env"]
                //         ]
                //     }
                // }
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWepackPlugin({
            template: './public/index.html',
            title: "尝试一下vue不同版本以及babel"
        }),
        new VueLoaderPlugin()
    ]

}