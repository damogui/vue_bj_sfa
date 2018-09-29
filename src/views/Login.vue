<template>
  <div class="login">
    <h1>欢迎登录宝洁SFA系统</h1>
    <div class="top_hat"></div>
    <div class="login-box">
      <div class="logo-wrap">
        <div class="logo-box">
        </div>
      </div>
      <div class="input-group" :class="{active: act_input===1}">
        <label for="cm_code">公司编号:</label>
        <input type="number" @click="act_input=1" id="cm_code">
        </div>
      <div class="input-group" :class="{active: act_input===2}">
        <label for="cm_code">公司编号:</label>
        <input type="text" @click="act_input=2" v-model="PNO" id="PNO">
        </div>
      <div class="input-group" :class="{active: act_input===3}">
        <label for="cm_code">公司编号:</label>
        <input type="password" @click="act_input=3" id="Passwd">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      cm_code: "",
      PNO: "",
      Passwd: "",
      act_input: 1
    };
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
$text-color: #757575;
$title-color: #000;
$btn-color: #10903d;
h1 {
  text-align: center;
  font-size: px2rem(36);
  height: px2rem(36);
  padding: px2rem(148-36-44) 0 px2rem(44) 0;
  line-height: px2rem(36);
  color: #fff;
}

.login {
  background-color: #2ade69;
  height: 100%;

  .top_hat {
    width: px2rem(537);
    height: px2rem(18);
    background-color: #eee;
    margin: 0 auto;
    border-radius: px2rem(18) px2rem(18) 0 0;
  }

  .login-box {
    width: px2rem(600);
    height: px2rem(836);
    margin: 0 auto;
    background-color: #fff;
    border-radius: px2rem(20);
    .logo-wrap {
      padding: px2rem(80) 0;
      .logo-box {
        height: px2rem(190);
        width: px2rem(190);
        margin: 0 auto;
        background: url(../assets/logo.jpg) no-repeat;
        background-size: cover;
      }
    }
    .input-group.active {
      border: 1px solid $btn-color;
      color: $btn-color;
    }
    .input-group {
      height: px2rem(90);
      width: px2rem(473);
      border-radius: px2rem(45);
      border: 1px solid $text-color;
      margin: 0 auto;
      font-size: px2rem(28);
      padding: 0 px2rem(36);
      line-height: px2rem(90);
      color: $text-color;
      margin-bottom: px2rem(30);
      label {
      }
      input {
        border: 0 none;
        font-size: px2rem(36);
        width: px2rem(220);
        padding-left: 1em;
        line-height: px2rem(36);
        font-size: px2rem(28);
      }
    }
  }
}
</style>
