import dayjs from 'dayjs';

export default function (app) {
  let formatString = "YYYY-HH-DD HH:mm:ss";
  app.directive('format-time', {
    created(el, bindings) {
      if (bindings.value) {
        formatString = bindings.value
      }
    },
    mounted(el) {
      const textContent = el.textContent
      debugger
      let timestamp = parseInt(textContent);
      if (textContent.length === 10) {
        timestamp = timestamp * 1000
      }
      el.textContent = dayjs(timestamp).format(formatString)
    }
  })
}
