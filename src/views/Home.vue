<template>
  <div class="home">
    <tophead title="SFA"><router-link to="/user" slot="r" class="icon iconfont icon-user"></router-link></tophead>
    <H1>我是bj sfa项目</H1>
  </div>
</template>

<script>
import HeadTop from "../components/TopHead";
export default {
  name: "home",
  components: {
    tophead: HeadTop
  }
};
</script>

<style lang="scss" scoped>
h1 {
}
</style>
