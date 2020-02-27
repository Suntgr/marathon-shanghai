<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    class="userinfo-content step2"
    :class="$i18n.locale"
  >
    <div class="sign-title">{{ $t('login.step2Title') }}</div>
    <el-form-item prop="nickname">
      <el-input v-model.trim="ruleForm.nickname" :placeholder="$t('login.placeholderNickname')">
        <span slot="prefix">{{ $t('login.nickname') }}</span>
      </el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input v-model.trim="ruleForm.pass" :placeholder="$t('login.placeholderPassword')">
        <span slot="prefix">{{ $t('login.password') }}</span>
      </el-input>
    </el-form-item>
    <p class="password-rule">{{ $t('login.passwordRule') }}</p>
    <el-form-item prop="checkPass">
      <el-input
        v-model.trim="ruleForm.checkPass"
        :placeholder="$t('login.placeholderPasswordAgain')"
      >
        <span slot="prefix">{{ $t('login.password') }}</span>
      </el-input>
    </el-form-item>
    <el-button class="next-btn" type="primary" @click="submitForm('ruleForm')">{{
      $t('login.next')
    }}</el-button>
  </el-form>
</template>

<script>
export default {
  components: {},
  data() {
    const validateNickname = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('login.placeholderNickname')))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('login.placeholderPassword')))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('login.noCheckPass')))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error(this.$t('login.errorCheckPass')))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        nickname: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        nickname: [{ validator: validateNickname, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit('next')
        } else {
          this.$emit('next')
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
.userinfo-content.step2 {
  &.cn {
    .el-input.el-input--prefix {
      .el-input__inner {
        padding-left: 45px;
      }
    }
  }
  &.en {
    .el-input.el-input--prefix {
      .el-input__inner {
        padding-left: 75px;
      }
    }
  }
  &.jp {
    .el-input.el-input--prefix {
      .el-input__inner {
        padding-left: 100px;
      }
    }
  }
  .password-rule {
    font-size: 12px;
    margin-top: 18px;
  }
}
</style>
