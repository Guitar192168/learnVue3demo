import {
    sum
} from './js/math.js';
import _ from 'lodash-es';
// import _ from '../node_modules/lodash-es/lodash.default.js'
// import './css/header.css';
import './css/title.scss'
import {createApp} from 'vue'
import App from './vue/App.vue'

import mul from './ts/mul.ts';


import logo from './logo.svg'

document.write('你好')

console.log(logo);


console.log(mul(2, 3))

import styles from './example.module.css'


console.log(styles);

const divEl = document.createElement('div')
divEl.innerHTML = 'hello vite'
// divEl.className = 'header';
divEl.className = 'nav';
// divEl.className = styles.title;
document.body.appendChild(divEl)



const cssModuleEl = document.createElement('div')
cssModuleEl.innerHTML = `<h1 class="${styles.name}">我是.module.css</h1>`
document.body.appendChild(cssModuleEl)


// import './css/title.scss'

document.write('Hello Vite')

console.log(sum(10, 20))
console.log(_.join(['a', 'b', 'c'], '-'))

//vue
createApp(App).mount('#app')