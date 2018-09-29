<template>
  <div class="login">
    <h1>欢迎登录宝洁SFA系统</h1>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
}
</style>

<style lang="scss" scoped>
/* @import "../lib/hotcss/px2rem.scss"; */
h1 {
  text-align: center;
  font-size: px2rem(36);
  height: px2rem(148);
  padding: px2rem(148-36-44) 0 px2rem(44) 0;
  line-height: px2rem(36);
  color: #fff;
}

.login {
  background-color: #2ade69;
  height: 100%;
}
</style>
