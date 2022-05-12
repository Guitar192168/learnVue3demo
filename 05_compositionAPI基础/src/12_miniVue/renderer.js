function h(tag, props, children) {
  return {
    tag,
    props,
    children
  }
}

// const h = (tag, props, children) => {
//   console.log(11)
//   return {
//     tag, props, children
//   }
// }

const mount = (vNode, container) => {
  const el = vNode.el = document.createElement(vNode.tag)
  // console.log(el, 'el')

  //props
  if (vNode.props) {
    for (let key in vNode.props) {
      // 绑定 事件
      if (key.startsWith('on')) {
        el.addEventListener(key.slice(2).toLowerCase(), vNode.props[key])
      } else {
        el.setAttribute(key, vNode.props[key])
      }
    }
  }

  // children
  if (vNode.children) {
    if (typeof vNode.children === 'string') {
      // el.innerHTML = vNode.children
      el.textContent = vNode.children
    } else {
      // 假设是数组
      vNode.children.forEach(item => {
        // 对于子节点来说， 递归调用mount即可。
        mount(item, el)
      })
    }
  }
  // 挂载到div#app容器上
  container.appendChild(el)
}

const patch = (n1, n2) => {
  // ??
  let el = n2.el = n1.el
  //1. 处理tag
  //如果两个vNode的tag不同，不是同一类型的则直接移除旧节点。挂载新节点
  // 移除，是n1的el的父组件，这里指div#app
  if (n1.tag !== n2.tag) {
    //这里则需要用父级div#app出面来移除旧的最外层的节点   与下面的直接el来移除不同
    const parentEl = n1.el.parentElement
    parentEl.removeChild(el)
    mount(n2, parentEl)
  } else {
    //同样的tags时
    // 2. 处理props
    let oldProps = n1.props
    let newProps = n2.props

    // 2.1 遍历新节点的props
    for (let key in newProps) {
      if (oldProps[key] !== newProps[key]) {
        if (key.startsWith('on')) {
          el.addEventListener(key.slice(2).toLowerCase(), newProps[key])
        } else {
          el.setAttribute(key, newProps[key])
        }
      }
    }

    // 2.2 移除旧节点的props
    for (let key in oldProps) {
      if (oldProps[key] !== newProps[key]) {
        if (key.startsWith('on')) {
          el.removeEventListener(key.slice(2).toLowerCase(), oldProps[key])
        } else {
          el.removeAttribute(key)
        }
      }
    }

    //  3. 处理children
    //  3.1 如果新节点的children是string类型
    if (n2.children) {
      if (typeof n2.children === 'string') {
        if (typeof n1.children === 'string') {
          el.textContent = n2.children //是相同的string类型的话，简单修改一下textContent即可
        } else {
          // 旧的不是string类型，则innerHTML置为空
          el.innerHTML = ''
          el.textContent = n2.children
        }
      } else {
        // children不是string类型的的都默认是数组
        // oldChild:[v1,v2,v3]
        // newChild:[v1,v2,v5,v6,v7]
        let oldChildren = n1.children
        let newChildren = n2.children
        const minLength = Math.min(oldChildren.length, newChildren.length)
        // 如果n2新的的newChildren少, 而b1的oldChildren多
        if (minLength === newChildren.length) {
          for (let index in newChildren) {
            patch(oldChildren[index], newChildren[index])
          }
          oldChildren.slice(minLength).forEach(item => {
            // el.parentElement.removeChild(item.el)
            // 不是最外层的div#app去移除。这里是el去移除自身的子节点的el !!!不是remove(item)
            el.removeChild(item.el)
          })
        } else {
          // 如果n1的oldChildren少。 n2的newChildren多
          for (let index in oldChildren) {
            // console.log('itemOld', index)
            patch(oldChildren[index], newChildren[index])
          }
          // 多出来的要继续挂载上去
          newChildren.slice(minLength).forEach(item => {
            mount(item, el)
          })
        }
      }
    }
  }
}
