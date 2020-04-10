<template>
  <div class="login">
    <div class="banner">
      <img class="logo" src="../../assets/images/logo.png" />
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="main">
        <p class="welcome">{{ $t('login.welcome') }}</p>
        <el-form-item prop="account">
          <el-input
            class="input-box"
            v-model.trim="ruleForm.account"
            :placeholder="$t('login.account')"
            autocomplete="nope"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="input-box"
            v-model.trim="ruleForm.password"
            :placeholder="$t('login.password')"
            autocomplete="nope"
            show-password
          ></el-input>
        </el-form-item>
        <div class="submit-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">{{
            $t('login.login')
          }}</el-button>
          <el-button round @click="signUp">{{ $t('login.sign') }}</el-button>
        </div>
        <p class="forgot-btn">{{ $t('login.forgot') }}</p>
      </el-form>
    </div>
    <footer-lang @reset="resetValue"></footer-lang>
  </div>
</template>

<script>
import FooterLang from '@components/FooterLang.vue'
export default {
  components: { FooterLang },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('login.placeholderPassword')))
      } else {
        callback()
      }
    }
    const validateAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('login.errAccount')))
        return
      }
      if (value.indexOf('@') > 0) {
        const isEmail = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(
          value
        )
        if (!isEmail) {
          callback(new Error(this.$t('login.errEmail')))
          return
        }
      } else {
        const isPhone = /^1[3456789]\d{9}$/.test(value)
        if (!isPhone) {
          callback(new Error(this.$t('login.errPhone')))
          return
        }
      }
      callback()
    }
    return {
      ruleForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [{ validator: validateAccount, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }]
      }
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {
    '$i18n.locale'() {
      console.log(12121)
    }
  },
  methods: {
    resetValue() {
      this.account = ''
      this.password = ''
    },
    signUp() {
      this.$router.push('sign')
    },
    login() {
      this.$apis.user
        .login({
          username: this.ruleForm['account'],
          password: this.ruleForm['password']
        })
        .then(({ data }) => {
          console.log(data)
          sessionStorage.setItem('token', data.token)
          this.$router.push('apply')
        })
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .banner {
    flex: 1;
    background: url('../../assets/images/login-bg.png') no-repeat center/cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: rgba($color: #4a4a4a, $alpha: 0.6);
      position: absolute;
      left: 0;
      top: 0;
    }
    .logo {
      width: 110px;
      height: auto;
      position: absolute;
      left: 260px;
      top: 60px;
    }
    .main {
      width: 400px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .welcome {
      font-size: 30px;
      line-height: 42px;
      color: #ffffff;
      padding-left: 15px;
      border-left: 2px solid;
    }
    .input-box {
      margin-top: 45px;
      &.el-input {
        font-size: 16px;
      }
      .el-input__inner {
        width: 400px;
        color: #ffffff;
        background: transparent !important;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid;
        &::-webkit-input-placeholder {
          color: #ffffff;
        }
        &:-moz-placeholder {
          /* Firefox 18- */
          color: #ffffff;
        }
        &:-ms-input-placeholder {
          color: #ffffff;
        }
      }
    }
    .submit-btn {
      display: flex;
      justify-content: space-between;
      margin-top: 60px;
      .el-button {
        width: 240px;
      }
      .el-button.is-round {
        width: 130px;
        background: transparent;
        color: #ffffff;
        &:hover {
          background: #4a90e2;
          border: #4a90e2;
        }
      }
    }
    .forgot-btn {
      font-size: 14px;
      color: #ffffff;
      margin-top: 15px;
      cursor: pointer;
    }
  }
}
</style>
