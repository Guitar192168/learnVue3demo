/*
 * @Author: your name
 * @Date: 2021-10-05 11:23:38
 * @LastEditTime: 2021-10-27 22:41:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Vue3/03_webpack/02_webpack_css/src/element.js
 */
// import '../css/style.css'
import './css/title.less'
import './css/img.css'
import img1 from './img/datav1.jpg';

const divEl = document.createElement('div');
divEl.className = 'image-bg';
divEl.innerHTML = '你好';

const imgEl = document.createElement('img'); //创建一个img标签
// imgEl.src = '../src/img/datav1.jpg'
imgEl.src = img1


document.body.appendChild(divEl)
document.body.appendChild(imgEl)