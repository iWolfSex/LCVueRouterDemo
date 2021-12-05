<template>
  <div>
    <ul>
      <li :style="{ opacity }">欢迎学习Vue</li>
      <li>news0001 <input type="text" /></li>
      <li>news0002 <input type="text" /></li>
      <li>news0003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // beforeDestroy(){
  //   console.log('News组件被销毁了')
  //   clearInterval(this.timer)
  // },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) this.opacity = 1;
  //   }, 16);
  // },
  activated(){
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated(){
    clearInterval(this.timer)
  },
};
</script>

<style>
</style>