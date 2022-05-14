const createApp = (rootComponent) => {
  return {
    mount(selector) {
      const container = document.querySelector(selector)

      let oldVNode = null
      let isHasMounted = false
      watchEffect(() => {
        if (!isHasMounted) {
          oldVNode = rootComponent.render()
          mount(oldVNode, container)
          isHasMounted = true
        } else {
          let newVNode = rootComponent.render()
          patch(oldVNode, newVNode)
          oldVNode = newVNode
        }
      })
    }
  }
}
