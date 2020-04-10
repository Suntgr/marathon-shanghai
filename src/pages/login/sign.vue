<template>
  <div class="sign-up">
    <div class="header">
      <div class="mini-header">
        <img class="logo-red" src="../../assets/images/logo-red.png" />
        <span class="welcome-sign">{{ $t('login.welcomeSign') }}</span>
        <div>
          <span class="has-account">{{ $t('login.hasAccount') }}</span>
          <el-button class="blue-btn" @click="toLogin" round>{{
            $t('login.placeLogin')
          }}</el-button>
        </div>
      </div>
    </div>
    <div class="main">
      <el-steps :active="activeStep - 1" :space="150" align-center>
        <el-step :title="$t('login.step1')"></el-step>
        <el-step :title="$t('login.step2')"></el-step>
        <el-step :title="$t('login.step3')"></el-step>
        <el-step :title="$t('login.step4')"></el-step>
      </el-steps>
      <step1 v-if="activeStep === 1" :ruleForm="ruleForm" @next="activeStep = 2"></step1>
      <step2 v-if="activeStep === 2" :ruleForm="ruleForm" @next="activeStep = 3"></step2>
      <step3 v-if="activeStep === 3" :user="ruleForm" @next="activeStep = 4"></step3>
      <step4 v-if="activeStep === 4"></step4>
    </div>
    <footer-lang @reset="resetValue"></footer-lang>
  </div>
</template>

<script>
import Step1 from '@components/signUp/step1.vue'
import Step2 from '@components/signUp/step2.vue'
import Step3 from '@components/signUp/step3.vue'
import Step4 from '@components/signUp/step4.vue'
import FooterLang from '@components/FooterLang.vue'
export default {
  components: { FooterLang, Step1, Step2, Step3, Step4 },
  data() {
    return {
      activeStep: 3,
      ruleForm: {
        phoneOrEmail: '15072367165',
        imgCode: '',
        msgCode: '',
        isAgree: '',
        nickname: '',
        pass: '',
        checkPass: ''
      }
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    resetValue() {},
    toLogin() {
      this.$router.push('login')
    }
  }
}
</script>

<style lang="scss">
.sign-up {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 112px;
    border-bottom: 1px solid #e0e0e0;
    .mini-header {
      max-width: 1100px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('../../assets/images/sign-bg.png') no-repeat center bottom/contain #f4f4f4;
    position: relative;
    &::before {
      // content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      right: 0;
      background: linear-gradient(to bottom, #ffffff, #f4f4f4);
      opacity: 0.6;
    }
  }
  .welcome-sign {
    font-size: 20px;
    margin-right: auto;
    padding-left: 30px;
    border-left: 1px solid #d8d8d8;
    line-height: 62px;
    margin-left: 30px;
  }
  .has-account {
    font-size: 14px;
    margin-right: 10px;
  }
  .el-steps {
    width: 100%;
    margin: 60px auto;
    justify-content: center;
    .el-step__head.is-finish {
      .el-step__icon,
      .el-step__line {
        background: #ac2424;
        color: #ffffff;
      }
      .el-step__icon.is-text {
        border-color: #ac2424;
      }
    }
    .el-step__head.is-process {
      .el-step__icon {
        color: #ac2424;
        border-color: #ac2424;
      }
      .el-step__icon.is-text {
        border-color: #ac2424;
      }
    }
    .el-step__title {
      font-size: 14px;
    }
    .el-step__title.is-finish,
    .el-step__title.is-process {
      color: #ac2424;
    }
    .el-step__title.is-finish {
      // margin-left: -12px;
      &::before {
        content: '✓ ';
      }
    }
    .el-step__line {
      margin: 0 30px !important;
      top: 22px;
    }
    .el-step__icon {
      width: 44px;
      height: 44px;
    }
    .el-step__icon-inner {
      font-size: 20px;
      font-weight: normal;
    }
  }
}
</style>
