<template>
  <div class="apply-step">
    <div class="title">3.请填写报名材料</div>
    <div class="apply-content">
      <div class="banner">
        <p class="name">2019上海国际马拉松赛</p>
        <ul class="projects">
          <li class="project">参赛项目 慈善跑</li>
          <li class="project">参赛项目 慈善跑</li>
        </ul>
      </div>
      <div class="user-info">
        <p class="table-name">个人信息</p>
        <el-form :inline="true" label-width="75px" label-position="left" class="demo-form-inline">
          <el-form-item v-for="(item, index) in userInfoName" :key="index" :label="item.name">
            <el-input :value="item.value" disabled></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="user-info">
        <p class="table-name">紧急联系人</p>
        <el-form :inline="true" label-width="75px" label-position="left" class="demo-form-inline">
          <el-form-item label="姓名">
            <el-input :value="sosUser.truename" disabled></el-input>
          </el-form-item>
          <el-form-item class="max-label" label="与参赛者关系">
            <el-input :value="sosUser.relation" disabled></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input :value="sosUser.phone" disabled></el-input>
          </el-form-item>
          <el-form-item class="address-box" label="现居地址">
            <el-cascader
              disabled
              :props="{ value: 'code', label: 'name' }"
              :options="addressOptions"
              :value="sosUser.cascaderValue"
            ></el-cascader>
            <el-input disabled class="address" :value="sosUser.address"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-button type="warning" @click="next">提交报名信息，下一步</el-button>
  </div>
</template>

<script>
import addressOptions from '@/assets/js/address.js'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {
      addressOptions
    }
  },
  computed: {
    ...mapGetters('user', ['user', 'sosUser']),
    userInfoName() {
      return [
        { name: this.$t('login.name'), value: this.user.truename },
        { name: this.$t('login.pinyin'), value: this.user.full_name },
        { name: this.$t('login.country'), value: this.user.country_name },
        { name: this.$t('login.birthday'), value: this.user.birthday },
        { name: this.$t('login.gender'), value: this.user.genderName },
        { name: this.$t('login.cert'), value: this.user.idName },
        { name: this.$t('login.phone'), value: this.user.phone },
        { name: this.$t('login.email'), value: this.user.email }
      ]
    }
  },
  created() {
    if (!this.user.nickname) {
      this.getUser()
    }
    this.$apis.game.confirmGame({
      activity_id: this.$store.state.game.activityId,
      entry_type: this.$store.state.game.entryType
    })
  },
  mounted() {},
  methods: {
    ...mapActions('user', ['getUser']),
    next() {
      this.$emit('next')
    }
  }
}
</script>

<style lang="scss" scoped>
.apply-step /deep/ {
  overflow: hidden;
  .title {
    margin-top: 10px;
    font-size: 18px;
    border-left: 2px solid;
    color: #2c3e6e;
    line-height: 25px;
    padding-left: 11px;
  }
  .apply-content {
    margin-top: 16px;
  }
  .el-button {
    display: block;
    width: 400px;
    margin: 30px auto;
  }
  .banner {
    width: 100%;
    height: 150px;
    border-radius: 2px;
    overflow: hidden;
    background: url('../../assets/images/apply-banner.png') no-repeat center/cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .name {
      font-size: 20px;
      color: #e2bd6f;
      margin-bottom: 15px;
    }
    .project {
      display: inline-block;
      white-space: pre;
      font-size: 14px;
      padding: 0 30px;
      color: #ffffff;
      line-height: 20px;
      & + .project {
        border-left: 1px solid;
      }
    }
  }
  .user-info {
    padding: 30px;
    background: #ffffff;
    margin-top: 30px;
  }
  .el-form-item {
    margin-top: 30px;
    &:not(:nth-child(3n)) {
      width: 33%;
    }
    &.max-label {
      .el-form-item__label {
        width: 96px !important;
        margin-left: -21px;
      }
    }
    .el-input,
    .el-select {
      width: 240px;
    }
    &.address-box {
      width: auto;
      .address {
        width: 367px;
        margin-left: 10px;
      }
    }
  }
}
</style>
