<template>
  <div :class="[ 'loading-container', isScope && 'scope-loading' ]" v-if="loading">
    <div class="center">
      <div style="text-align: center">
        <svg viewBox="25 25 50 50" class="circular">
          <circle r="20" cx="50" cy="50" fill="none" class="path"></circle>
        </svg>
        <p>加载中...</p >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VLoading",
  data() {
    return {
      loading: false,
      timer: null,
      isScope: false,
    }
  },
  methods: {
    show() {
      this.loading = true
    },
    close() {
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-container {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 99;
  @include center;
  .center {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    @include center;

    p {
      font-size: 14px;
      border-color: #00C68C;
      color: white;
    }
  }
  .circular {
    animation: loading-rote 1.5s ease-in-out infinite;
    height: 42px;
    width: 42px;
  }
  .path {
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dashoffset: 0;
    stroke-width: 3;
    stroke: #00C68C;
    stroke-linecap: round;
  }
  @keyframes loading-rote {
    0% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loading-dash {
    0% {
      stroke-dasharray: 5,20;
    }
    75% {
      stroke-dasharray: 20,20;
    }
    100% {
      stroke-dasharray: 5,20;
    }
  }
}
.scope-loading {
  position: absolute !important;
}
</style>