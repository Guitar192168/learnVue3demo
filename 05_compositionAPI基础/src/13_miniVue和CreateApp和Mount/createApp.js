function createApp(rootComponent) {
  // 需要返回另外一个对象的
  return {
    mount(selectApp) {
      const container = document.querySelector(selectApp)
      let isHasMounted = false
      let oldVNode = null

      watchEffect(() => {
        if (!isHasMounted) {
          oldVNode = rootComponent.render()
          mount(oldVNode, container)
          isHasMounted = true
        } else {
          const newVNode = rootComponent.render()
          patch(oldVNode, newVNode)
          oldVNode = newVNode
        }
      })
    }
  }
}
