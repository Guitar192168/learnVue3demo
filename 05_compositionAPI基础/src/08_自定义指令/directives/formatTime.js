import dayjs from "dayjs";

export default function (app) {
  app.directive('format-time', {
    mounted(el) {
      console.log(el.textContent);
      let timeStamp = el.textContent
      if (timeStamp.length === 10) {
        timeStamp = timeStamp * 1000
      }

      timeStamp = dayjs(timeStamp).format('YYYY:MM:DD')
    }
  })
}
