export default {
  install(app) {
    console.log(app)
    app.config.globalProperties.name = 123456
  }
}
