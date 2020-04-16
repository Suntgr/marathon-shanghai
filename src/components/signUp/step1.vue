<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="userinfo-content">
    <div class="sign-title">{{ $t('login.step1Title') }}</div>
    <el-form-item prop="phoneOrEmail">
      <el-input
        v-model.trim="ruleForm.phoneOrEmail"
        :placeholder="placeholderWay"
        :class="{ 'mini-prefix': !waySwitch }"
      >
        <span slot="prefix">{{ prefixText }}</span>
      </el-input>
    </el-form-item>

    <div v-if="waySwitch" class="change-way">
      <span>{{ $t('login.use') }}</span>
      <a class="switch-btn" @click="waySwitch = !waySwitch">{{ $t('login.emailSign') }}</a>
    </div>
    <div v-else class="change-way" @click="waySwitch = !waySwitch">
      <span>{{ $t('login.use') }}</span>
      <a class="switch-btn">{{ $t('login.phoneSign') }}</a>
    </div>
    <el-form-item prop="imgCode">
      <div class="code-box">
        <el-input v-model.trim="ruleForm.imgCode" :placeholder="$t('login.usePic')"></el-input>
        <div class="change-img-code" @click="changePicCode">
          <img class="code-pic" :src="picCode" />
          <span style="padding-right: 10px;">{{ $t('login.change') }}</span>
        </div>
      </div>
    </el-form-item>
    <el-form-item prop="msgCode">
      <div class="code-box">
        <el-input v-model.trim="ruleForm.msgCode" :placeholder="placeholderCode"></el-input>
        <div class="change-img-code">
          <span v-if="countdown" class="countdown">{{ countdown }}</span>
          <el-button v-else class="blue-btn" @click="validCode">{{
            $t('login.getCode')
          }}</el-button>
        </div>
      </div>
    </el-form-item>
    <el-form-item prop="isAgree">
      <div class="agreement-switch">
        <el-checkbox v-model="ruleForm.isAgree"></el-checkbox>
        <span class="btn-describe"
          >{{ $t('login.agree') }}<a>{{ $t('login.agreement') }}</a></span
        >
      </div>
    </el-form-item>
    <el-button class="next-btn" type="primary" @click="submitForm">{{
      $t('login.next')
    }}</el-button>
  </el-form>
</template>

<script>
export default {
  components: {},
  data() {
    const validatePass = (rule, value, callback) => {
      if (!this.waySwitch) {
        if (value === '') {
          callback(new Error(this.$t('login.placeholderEmail')))
          return
        }
        const isEmail = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(
          value
        )
        if (!isEmail) {
          callback(new Error(this.$t('login.errEmail')))
          return
        }
      } else {
        if (value === '') {
          callback(new Error(this.$t('login.placeholderPhone')))
          return
        }
        const isPhone = /^1[3456789]\d{9}$/.test(value)
        if (!isPhone) {
          callback(new Error(this.$t('login.errPhone')))
          return
        }
      }
      callback()
    }
    const validatePassCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('login.errorNoCode')))
        return
      }
      callback()
    }
    const validateAgree = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('login.errorNoAgree')))
        return
      }
      callback()
    }
    return {
      isAgree: false,
      waySwitch: true,
      // ruleForm: {
      //   phoneOrEmail: '',
      //   imgCode: '',
      //   msgCode: '',
      //   isAgree: ''
      // },
      rules: {
        phoneOrEmail: [{ validator: validatePass, trigger: 'blur' }],
        imgCode: [{ validator: validatePassCode, trigger: 'blur' }],
        msgCode: [{ validator: validatePassCode, trigger: 'blur' }],
        isAgree: [{ validator: validateAgree, trigger: 'blur' }]
      },
      picCode: '/api/verification-code/captcha',
      countdown: 0
    }
  },
  props: {
    ruleForm: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    prefixText() {
      return this.waySwitch ? this.$t('login.countryCode') : this.$t('login.email')
    },
    placeholderWay() {
      return this.waySwitch ? this.$t('login.placeholderPhone') : this.$t('login.placeholderEmail')
    },
    placeholderCode() {
      return this.waySwitch ? this.$t('login.useMsg') : this.$t('login.useEmail')
    }
  },
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$apis.user
            .validateCode({
              username: this.ruleForm.phoneOrEmail,
              type: 1,
              code: this.ruleForm.msgCode
            })
            .then(data => {
              console.log(data)
              this.$emit('next')
            })
        } else {
          return false
        }
      })
    },
    changePicCode() {
      this.picCode = `/api/verification-code/captcha?${Date.now()}`
    },
    setCountdown() {
      this.countdown = 60
      const timer = setInterval(() => {
        this.countdown--
        if (this.countdown === 0) {
          clearInterval(timer)
        }
      }, 1000)
    },
    validCode() {
      const fieldsToValidate = ['phoneOrEmail', 'imgCode']
      const _self = this
      Promise.all(
        fieldsToValidate.map(item => {
          return new Promise(function(resolve) {
            _self.$refs.ruleForm.validateField(item, error => {
              resolve(error)
            })
          })
        })
      ).then(data => {
        console.info(data)
        const ok = data.every(e => e === '')
        console.info(ok)
        if (ok) this.getMsgCode()
      })
    },
    getMsgCode() {
      this.$apis.user
        .getCode({
          username: this.ruleForm.phoneOrEmail,
          type: 1,
          captcha: this.ruleForm.imgCode
        })
        .then(data => {
          this.$message({
            message: data.msg,
            type: 'success'
          })
          this.setCountdown()
        })
    }
  }
}
</script>

<style lang="scss">
.userinfo-content {
  min-width: 400px;
  max-width: 500px;
  margin: 0 auto;
  .sign-title {
    font-size: 18px;
    padding-left: 10px;
    border-left: 2px solid #ac2424;
  }
  .el-input {
    margin-top: 30px;
    .el-input__prefix {
      color: #4a4a4a;
      left: 10px;
      display: flex;
      align-items: center;
    }
    &.el-input--prefix {
      .el-input__inner {
        padding-left: 75px;
      }
    }
    &.mini-prefix.el-input--prefix {
      .el-input__inner {
        padding-left: 55px;
      }
    }
  }
  .change-way {
    margin-top: 15px;
    font-size: 14px;
    .switch-btn {
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .code-box {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-input {
      width: 240px;
      margin-top: 0px;
    }
    .change-img-code {
      flex: 1;
      margin-left: 10px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      background: #ffffff;
      cursor: pointer;
      .blue-btn {
        width: 100%;
      }
    }
    .code-pic {
      height: 40px;
      margin-right: 5px;
    }
  }
  .agreement-switch {
    display: flex;
    align-items: center;
    margin-top: 30px;
    .btn-describe {
      margin-left: 10px;
      font-size: 14px;
    }
  }
  .countdown {
    width: 100%;
    text-align: center;
    display: inline-block;
  }
  .next-btn {
    width: 100%;
    margin: 30px 0;
  }
}
</style>
