/*
 * @Author: your name
 * @Date: 2021-10-05 11:23:38
 * @LastEditTime: 2021-10-05 21:42:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Vue3/03_webpack/02_webpack_css/src/element.js
 */
// import '../css/style.css'
import '../css/title.less'

const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = '你好';

document.body.appendChild(divEl)