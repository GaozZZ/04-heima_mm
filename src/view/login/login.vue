<template>
  <div class="login">
    <div class="left">
      <div class="head">
        <img class="logo" src="../../assets/login_icon.png" alt />
        <span class="title">黑马面面</span>
        <i></i>
        <span class="sub-title">用户登录</span>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="phone">
          <el-input
            class="loging"
            placeholder="请输入手机号"
            prefix-icon="el-icon-s-custom"
            v-model="ruleForm.phone"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="loging"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="ruleForm.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-col :span="18">
            <el-input
              class="loging"
              placeholder="请输入验证码"
              prefix-icon="el-icon-key"
              v-model="ruleForm.code"
            ></el-input>
          </el-col>
          <el-col :span="6" class="code">
            <img class="captcha" @click="getCaptcha" :src="captchaUrl" alt />
          </el-col>
        </el-form-item>
      </el-form>
      <el-checkbox v-model="checked" class="deal">
        <span class="read">我已阅读并同意</span>
        <el-link type="primary">用户协议</el-link>
        <span class="read">和</span>
        <el-link type="primary">隐私条款</el-link>
      </el-checkbox>
      <el-button class="login-button" type="primary" @click="submitForm('ruleForm')">登录</el-button>
      <el-button class="login-button" type="primary">注册</el-button>
    </div>
    <img class="right" src="../../assets/login_banner_ele@2x.png" alt />
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        var phone = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        setTimeout(() => {
          if (!phone.test(value)) {
            callback(new Error("请输入正确的手机号"));
          } else {
            callback();
          }
        }, 1000);
      }
    };
    return {
      ruleForm: {
        phone: "",
        password: "",
        code: ""
      },
      rules: {
        phone: [{ validator: checkPhone, trigger: "change" }],
        password: [
          { required: true, message: "密码不能为空", trigger: "change" },
          {
            min: 6,
            max: 12,
            message: "密码长度在 6 到 12 个字符",
            trigger: "change"
          }
        ],
        code: [
          { required: true, message: "验证码不能为空", trigger: "change" },
          {
            min: 4,
            max: 4,
            message: "验证码长度在 4 个字符",
            trigger: "change"
          }
        ]
      },
      checked: false, //协议
      captchaUrl: "http://183.237.67.218:3002/captcha?type=login" //登录验证码
    };
  },
  methods: {
    getCaptcha() {
      this.captchaUrl = `http://183.237.67.218:3002/captcha?type=login&${Date.now()}`;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.checked) {
            axios({
              url: `http://183.237.67.218:3002/login`,
              method: "post",
              data: {
                phone: this.ruleForm.phone,
                password: this.ruleForm.password,
                code: this.ruleForm.code
              },
              withCredentials: true
            }).then(res => {
              //成功回调
              window.console.log(res)
              if(res.data.code==200){
                this.$message.success("终于等到你~");
              } else {
                this.$message.warning("为什么会登陆失败呢?");
              }
            });
          } else {
            this.$message.error("请勾选用户协议和隐私条款!");
          }
        } 
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
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
    .el-form-item {
      margin-bottom: 25px;
    }
    .el-form-item__content {
      height: 43px;

      .el-input__inner {
        height: 43px;
      }
    }
    .code.el-col.el-col-6 {
      height: 43px;

      img {
        width: 110px;
        height: 43px;
        border-radius: 5px;
      }
    }

    el-checkbox.deal {
      display: flex;
      align-items: center;
      padding: 7px 0 2px;

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