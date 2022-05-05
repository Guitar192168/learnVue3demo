export const foo = function () {
  console.log('mixin导入的foo函数')
}

export const mixinData = {
  data() {
    return {
      age: 19
    }
  },
  created() {
    console.log('混入的created')
  },
  methods:{
    bar(){
      console.log('mixin内的bar')
    }
  }
}
