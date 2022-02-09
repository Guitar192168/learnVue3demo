<template>
  <div>
    {{ totalPrice }}
  </div>
  <hr>
  <div>
    {{ sTotalPrice }}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['totalPrice']),
    //getters的对象写法与state的不同，不用写函数，直接写属性即可
    ...mapGetters({
      sTotalPrice: 'totalPrice'
    })
  },

}

</script>

<style scoped>

</style>