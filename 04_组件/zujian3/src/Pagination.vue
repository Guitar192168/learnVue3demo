<template>
  <div class="pagination-container">
    <span @click="handlePut('prev')">PREV</span>
    <span
      :class="[{ 'active': value === item.text }, item.type]"
      v-for="item in pages" @click="handlePut(item.type)">
      {{ item.text }}
    </span>
    <span @click="handlePut('next')">NEXT</span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    /**
     *  total：总页数
     *  pageSize：页码
     *  value：当前页
     */
    total: {
      default: 100,
      type: Number
    },
    pageSize: {
      default: 20,
      type: Number
    },
    value: {
      default: 1,
      type: Number
    },
  },
  data() {
    return {
      pages: []
    }
  },
  computed: {
    pageTotal() { //计算得到的页数
      return +Math.max(1, this.total / this.pageSize)
    }
  },
  watch: {
    value: {
      handler(val) {
        const p = this.pageTotal //计算总页数
        this.pages.splice(0, Infinity) //清空所有页数数组

        //页数等于1
        if (p === 1) {
          this.pages.push({ type: p, text: p })
          return;
        }

        //页数小于等于10，默认排列11个元素
        if (p <= 10) {
          for (let i = 0; i < p; i++) {
            this.pages.push({ type: i+1, text: i+1 })
          }
          return;
          // 页数小于等于10，以下逻辑直接return跳过。
        }

        //开始元素
        const start = [{ type: 1, text: 1 }, { type: 'prevTo', text: '...' }]
        //结束元素
        const end = [{ type: 'nextTo', text: '...' }, { type: p, text: p }]

        /**
         * 迭代函数：
         * @param startIdx 开始索引
         * @param len 长度
         */
        const iterator = (startIdx, len)=> {
          for (let i = startIdx; i < len; i++) {
            this.pages.push({ type: i+1, text: i+1 })
          }
        }

        //当前页 < 6
        if (val < 6) {
          iterator(0, 9)
          this.pages = this.pages.concat(end)
        }

        //当前页 >= 6 并且 当前页 <= 总页-6
        if (val >= 6 && val <= p - 6) {
          this.pages = start
          iterator(val - 4,  val + 3)
          this.pages = this.pages.concat(end)
        }

        //当前页 > 总页-6
        if (val > p - 6) {
          this.pages = start
          iterator(p - 9, p)
        }
      },
      immediate: true
    }
  },
  methods: {
    //修改当前page
    handlePut(type) {
      //暂存值：当前页数等于总页数？ 总页数 ：第一页
      let currentPage = this.value === this.pageTotal? this.pageTotal : 1
      //上一页
      if (type === 'prev' && this.value !== 1) {
        currentPage = this.value - 1
      }
      //下一页
      if (type === 'next' && this.value !== this.pageTotal) {
        currentPage = this.value + 1
      }
      //向前跳转5页
      if (type === 'prevTo') {
        currentPage = Math.max(1, this.value - 5)
      }
      //向后跳转5页
      if (type === 'nextTo') {
        currentPage = Math.min(this.pageTotal, this.value + 5)
      }

      //非字符，赋值点击的数字，否则赋值以上执行完的最终值
      const num = typeof type !== 'string'? type : currentPage
      this.$emit('input', num)
    }
  }
}
</script>

<style scoped lang="scss">
  .pagination-container {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    padding: 60px 0;
    span {
      display: inline-block;
      min-width: 40px;
      min-height: 40px;
      line-height: 40px;
      text-align: center;
      margin: 0 5px;
      cursor: pointer;
      font-size: 16px;
      font-family: Manrope-Regular, Manrope;
      font-weight: 400;
      color: #011E15;
      user-select: none;
      position: relative;
      &:hover {
        color: #00C68C;
      }
    }
    .active {
      background: #EDEEEE;
      border-radius: 50%;
    }
    @mixin ell {
      width: 40px;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      background: #FFFFFF;
    }
    .prevTo {
      &:hover {
        &:after {
          @include ell;
          content: "<<<";
        }
      }
    }
    .nextTo {
      &:hover {
        &:after {
          @include ell;
          content: ">>>";
        }
      }
    }
  }
</style>
