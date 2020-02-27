<template>
  <div class="userinfo-content step2" :class="$i18n.locale">
    <div class="sign-title">{{ $t('login.step2Title') }}</div>
    <el-input :placeholder="$t('login.placeholderNickname')">
      <span slot="prefix">{{ $t('login.nickname') }}</span>
    </el-input>
    <el-input :placeholder="$t('login.placeholderPassword')">
      <span slot="prefix">{{ $t('login.password') }}</span>
    </el-input>
    <p class="password-rule">{{ $t('login.passwordRule') }}</p>
    <el-input :placeholder="$t('login.placeholderPasswordAgain')">
      <span slot="prefix">{{ $t('login.password') }}</span>
    </el-input>
    <el-button class="next-btn" type="primary" @click="nextStep">{{ $t('login.next') }}</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    nextStep() {
      this.$emit('next')
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
    margin-top: 15px;
  }
}
</style>
