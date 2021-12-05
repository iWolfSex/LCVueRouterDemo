<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log("About组件即将被销毁了");
  },
  mounted() {
    console.log("About组件挂载完毕");
  },
  //通过路由规则，进入该组件被调用
  beforeRouteEnter(to, from, next) {
    //....
    if (to.meta.isauth) {
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名不对无权限查看");
      }
    } else {
      next();
    }
  },
  //通过路由规则，离开该组件被调用
  beforeRouteLeave(to, from, next) {
    console.log('',to,from)
    next()
  },
};
</script>

<style>
</style>