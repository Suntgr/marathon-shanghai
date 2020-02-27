<template>
  <div class="login">
    <div class="banner">
      <img class="logo" src="../../assets/images/logo.png" />
      <div class="main">
        <p class="welcome">{{ $t('login.welcome') }}</p>
        <el-input class="input-box" v-model="account" :placeholder="$t('login.account')"></el-input>
        <el-input
          class="input-box"
          v-model="password"
          :placeholder="$t('login.password')"
        ></el-input>
        <div class="submit-btn">
          <el-button type="primary">{{ $t('login.login') }}</el-button>
          <el-button round @click="signUp">{{ $t('login.sign') }}</el-button>
        </div>
        <p class="forgot-btn">{{ $t('login.forgot') }}</p>
      </div>
    </div>
    <footer-lang @reset="resetValue"></footer-lang>
  </div>
</template>

<script>
import FooterLang from '@components/footer.vue'
export default {
  components: { FooterLang },
  data() {
    return {
      account: '',
      password: ''
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    resetValue() {
      this.account = ''
      this.password = ''
    },
    signUp() {
      this.$router.push('sign')
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
      .el-input__inner {
        width: 400px;
        color: #ffffff;
        background: transparent;
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
