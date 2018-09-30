<template>
  <div class="login">
    <h1>欢迎登录宝洁SFA系统</h1>
    <div class="top_hat"></div>
    <div class="login-box">
      <!-- logo -->
      <div class="logo-wrap">
        <div class="logo-box"></div>
      </div>
      <!-- 登录的表达 -->
      <div class="input-group" :class="{active: act_index===1}">
        <label for="cm_code">公司编号:</label>
        <input @focus="act_index=1" type="number" id="cm_code" v-model="cm_code">
      </div>
      <div class="input-group" :class="{active: act_index===2}">
        <label for="PNO">员工编号:</label>
        <input @focus="act_index=2" type="number" id="PNO" v-model="cm_code">
      </div>
      <div class="input-group" :class="{active: act_index===3}">
        <label for="Passwd">用户密码:</label>
        <input @focus="act_index=3" type="number" id="Passwd" v-model="cm_code">
      </div>
      <div class="input-row">
        <div class="ck_group">
          <input type="checkbox" name="" id="save_pwd"><label for="save_pwd">保存密码</label> 
        </div>
        <div class="ck_group">
          <input type="checkbox" name="" id="auto_login"><label for="auto_login">自动登录</label> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      act_index: 1,
      cm_code: ""
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
        width: px2rem(190);
        height: px2rem(190);
        margin: 0 auto;
        background: url(../assets/logo.jpg);
        background-size: cover;
      }
    }

    .input-group {
      border: 2px solid #e2e2e2;
      border-radius: px2rem(45);
      font-size: $text-size-mid;
      line-height: px2rem(90);
      padding: 0 px2rem(36);
      color: $text-color;
      width: px2rem(401);
      margin: 0 auto px2rem(30);
      input {
        border: 0 none;
        font-size: $text-size-mid;
        line-height: px2rem(90);
        width: px2rem(200);
        padding-left: 1em;
      }
    }
    .input-group.active {
      color: $act-color;
      border: 2px solid $act-color;
    }
    .input-row {
      font-size: $text-size;
      padding: px2rem(10) px2rem(64);
      display: flex;
      justify-content: space-around;
      .ck_group {
        text-align: center;
        flex: 1 1 50%;
        input {
          display: inline-block;
          height: 24px;
          width: 24px;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
