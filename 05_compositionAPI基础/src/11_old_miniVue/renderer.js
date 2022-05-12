// const h = (tag, props, children) {
//上面这行是自己的错误写法

const h = (tag, props, children) => {
  // v-node --> js对象 --> {}
  return {
    tag,
    props,
    children
  }
}

//自己写的时候思维逻辑没有考虑到挂载到某个元素上，只想到了需要挂载
// 传入一个container，此案例里是挂载到div#app上
const mount = (vnode, container) => {
  // console.log(vnode, container);
  // 1.vnode ---> element 创造出真实的元素
  // const el = document.createElement(vnode.tag)
  const el = vnode.el = document.createElement(vnode.tag)

  // 2. 处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      //想不到的点儿
      const value = vnode.props[key]

      // 但是有的时候props有函数，比如onClick方法
      // if (typeof value === 'function') {
      // debugger
      // 又犯错
      // if (value.startsWith('on')) {
      if (key.startsWith('on')) {
        // value.slice(2).toLowerCase()

        // el.addEventListener(value.slice(2).toLowerCase(), function () {
        //   value()
        // })

        el.addEventListener(key.slice(2).toLowerCase(), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }

  //3. 处理children
  if (vnode.children) {
    if (typeof vnode.children === 'string') {
      // el.textContext = vnode.children  不是textContext而是textContent
      el.textContent = vnode.children
    } else {
      for (let item of vnode.children) {
        // 又犯错， 递归想到了，但是忘记了  挂载到哪里
        // mount(item)

        mount(item, el)
      }
    }
  }

  // 不是这样return出去一个el
  // return el
  // 将el挂载到container上
  container.appendChild(el)
}
