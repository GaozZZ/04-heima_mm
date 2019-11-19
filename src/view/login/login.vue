<template>
  <div class="login">
    <div class="left">
      <div class="head">
        <img class="logo" src="../../assets/login_icon.png" alt />
        <span class="title">黑马面面</span>
        <i></i>
        <span class="sub-title">用户登录</span>
      </div>
      <el-input class="loging" placeholder="请输入手机号" prefix-icon="el-icon-s-custom" v-model="input2"></el-input>
      <el-input class="loging" placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="input2"></el-input>
      <el-row>
        <el-col :span="18">
          <el-input class="loging" placeholder="请输入验证码" prefix-icon="el-icon-key" v-model="input2"></el-input>
        </el-col>
        <el-col :span="6">
          <img class="captcha" src="../../assets/图层 6@2x.png" alt />
        </el-col>
      </el-row>
      <el-checkbox v-model="checked" class="deal">
        <span class="read">我已阅读并同意</span>
        <el-link type="primary">用户协议</el-link>
        <span class="read">和</span>
        <el-link type="primary">隐私条款</el-link>
      </el-checkbox>
      <el-button class="login-button" type="primary">登录</el-button>
      <el-button class="login-button" type="primary">注册</el-button>
    </div>
    <img class="right" src="../../assets/login_banner_ele@2x.png" alt />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      input2: "",
      checked: false
    };
  }
};
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  display: flex;
  align-items: center;
  justify-content: space-around;

  .left {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
    padding: 0 24px;

    .head {
      height: 100px;
      display: flex;
      align-items: center;
      img {
        width: 22px;
      }

      .title {
        font-size: 24px;
        margin-left: 13px;
      }
      i {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
        margin: 0 13px;
      }
      .sub-title {
        font-size: 22px;
      }
    }

    .loging {
      margin-bottom: 27px;
    }

    img.captcha {
      width: 110px;
    }

    .deal {
      display: flex;
      align-items: center;

      .el-checkbox__label {
        display: flex;
      }
    }

    .login-button {
      display: block;
      width: 100%;
      margin-top: 26px;
      margin-left: 0;
    }
  }

  .right {
    width: 633px;
  }
}
</style>