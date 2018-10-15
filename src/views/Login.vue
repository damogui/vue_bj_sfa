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
      <div class="input-group" :class="{active: act_index===1, error: errors.has('cno')}">
        <label for="cm_code">公司编号:</label>
        <input name="cno" v-validate="{required:true, max: 6, min: 4}" @focus="act_index=1" type="number" id="cm_code" v-model="cm_code">
      </div>
      <div class="input-group" :class="{active: act_index===2, error: errors.has('pno')}">
        <label for="PNO">员工编号:</label>
        <input @focus="act_index=2" name="pno" type="number" id="PNO" v-validate="{required:true, max: 12, min: 4}" v-model="PNO">
      </div>
      <div class="input-group" :class="{active: act_index===3, error: errors.has('pwd')}">
        <label for="Passwd">用户密码:</label>
        <input @focus="act_index=3" type="password" name="pwd" v-validate="{required:true, max: 12, min: 4}" id="Passwd" v-model="passwd">
      </div>
      <div class="ck-row">
        <div class="ckbox_wrap" @click="remembSet" :class="{active: rememb}">
          <i class="iconfont" :class="{'icon-check-square': rememb, 'icon-border': !rememb}"></i>
          <span>记住密码</span>
        </div>
        <div @click="autoLoginSet" class="ckbox_wrap" :class="{active: autologin}">
          <i class="iconfont" :class="{'icon-check-square': autologin, 'icon-border': !autologin}"></i>
          <span>自动登录</span>
        </div>
      </div>
    </div>
    <div class="btn-wrap" @click="loginBtnClick">
      <p>登录</p>
    </div>
  </div>
</template>

<script>
import { Indicator } from "mint-ui";

import "../assets/font/iconfont.css";
export default {
  name: "login",
  data() {
    return {
      act_index: 1,
      cm_code: "",
      PNO: "",
      passwd: "",
      rememb: false,
      autologin: false
    };
  },
  methods: {
    autoLoginSet() {
      // 设置当前的autologin为true或者false，
      this.autologin = !this.autologin;
      // 另外设置 rememb的值
      this.autologin && (this.rememb = true);
    },
    remembSet() {
      this.rememb = !this.rememb;
      this.rememb || (this.autologin = false);
    },
    loginBtnClick() {
      // 判断当前是否校验全部通过
      // this.errors.any(); // boolean 如果有有错误那么返回true,否则 false
      if (this.errors.any()) {
        return;
      }
      // 弹出等待的遮罩 层,防止二次点击.
      Indicator.open("正在登陆...");
      // 发送ajax请求 ,  axios
      setTimeout(() => {
        Indicator.close();
      }, 2000);
    }
  }
};
</script>

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

@mixin login_wrap {
  width: px2rem(600);
  margin: 0 auto;
  background-color: #fff;
  border-radius: px2rem(20);
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
    @include login_wrap;
    height: px2rem(836);
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

    @mixin rowStyle() {
      padding: 0 px2rem(36);
      color: $text-color;
      width: px2rem(401);
    }
    .input-group {
      border: 2px solid #e2e2e2;
      border-radius: px2rem(45);
      font-size: px2rem(30);
      line-height: px2rem(90);
      @include rowStyle();
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
    .input-group.error {
      color: red;
      border: 2px solid red;
    }
    .ck-row {
      @include rowStyle();
      font-size: $text-size;
      display: flex;
      justify-content: space-around;
      .ckbox_wrap {
        padding-top: px2rem(8);
        padding-left: px2rem(36);
        i::before {
          display: inline-block;
          height: px2rem(30);
          width: px2rem(30);
          font-size: px2rem(30);
        }
      }
      .ckbox_wrap.active {
        color: $act-color;
      }
    }
  }
  .btn-wrap {
    @include login_wrap;
    font-weight: 700;
    letter-spacing: px2rem(10);
    height: px2rem(100);
    text-align: center;
    line-height: px2rem(100);
    font-size: $text-size-imp;
    color: $act-color;
    margin-top: px2rem(20);
  }
}
</style>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
</style>
