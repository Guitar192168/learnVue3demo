
<script>
export default {
  name: "04_optionsAPI的JSX写法",
  data() {
    return {
      name: 123
    }
  },
  render(){
    return <div>{this.name}
    <div>这种可不是用双大括号，而是单大括号</div></div>
  }
}
</script>

<style scoped>

</style>
