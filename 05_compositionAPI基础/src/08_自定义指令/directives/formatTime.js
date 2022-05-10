import dayjs from "dayjs";

export default function (app) {
  // 这样定义在外面就成了一个闭包了
  // let format =  'YYYY-MM-DD hh:mm:ss'
  app.directive('format-time', {
    mounted(el, binding) {
      console.log('binding', binding)
      // if(binding.value){
      //   format = binding.value
      // }
      const format = binding.value || 'YYYY-MM-DD hh:mm:ss'
      console.log(el.textContent);
      let timeStamp = el.textContent
      if (timeStamp.length === 10) {
        timeStamp = timeStamp * 1000
      }

      // timeStamp = dayjs(timeStamp).format('YYYY-MM-DD')
      //虽然一开始定义的时间戳是number类型，但是经过传值的操作，成了字符串。这里dayjs(传入字符串)会报错。需要转换成number类型
      // el.textContent = dayjs(+timeStamp).format('YYYY-MM-DD')
      el.textContent = dayjs(+timeStamp).format(format)
    }
  })
}
