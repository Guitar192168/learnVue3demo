export default function (app) {
  console.log('插件通过function方式注册的', app)
  app.directive('plugin-focus', {
    mounted(el,binding) {
      el.focus()
    }
  })
}
