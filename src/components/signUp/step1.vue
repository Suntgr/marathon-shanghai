<template>
  <div class="userinfo-content">
    <div class="sign-title">{{ $t('login.step1Title') }}</div>
    <el-input :placeholder="placeholderWay" :class="{ 'mini-prefix': !waySwitch }">
      <span slot="prefix">{{ prefixText }}</span>
    </el-input>
    <div v-if="waySwitch" class="change-way" @click="waySwitch = !waySwitch">
      <span>{{ $t('login.use') }}</span>
      <a class="switch-btn">{{ $t('login.emailSign') }}</a>
    </div>
    <div v-else class="change-way" @click="waySwitch = !waySwitch">
      <span>{{ $t('login.use') }}</span>
      <a class="switch-btn">{{ $t('login.phoneSign') }}</a>
    </div>
    <div class="code-box">
      <el-input :placeholder="$t('login.usePic')"></el-input>
      <div class="change-img-code">
        <img class="code-pic" src="http://img.la/100x40" />
        <span>{{ $t('login.change') }}</span>
      </div>
    </div>
    <div class="code-box">
      <el-input :placeholder="placeholderCode"></el-input>
      <div class="change-img-code">
        <el-button class="blue-btn">{{ $t('login.getCode') }}</el-button>
      </div>
    </div>
    <div class="agreement-switch">
      <el-checkbox></el-checkbox>
      <span class="btn-describe"
        >{{ $t('login.agree') }}<a>{{ $t('login.agreement') }}</a></span
      >
    </div>
    <el-button class="next-btn" type="primary" @click="nextStep">{{ $t('login.next') }}</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      waySwitch: true
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
    nextStep() {
      this.$emit('next')
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
  .next-btn {
    width: 100%;
    margin: 30px 0;
  }
}
</style>
