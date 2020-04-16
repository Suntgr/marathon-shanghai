<template>
  <div class="details">
    <div class="card">
      <img class="pic" :src="bannerImg" />
      <div class="right-part">
        <p class="title">{{ title }}</p>
        <ul class="project">
          <li class="item" v-for="(item, index) in project" :key="index">
            <span>{{ item.name }}</span
            >：
            <span>{{ item.value }}</span>
            <el-button v-if="item.value === '未支付'" size="mini" plain type="primary">{{
              $t('user.pay')
            }}</el-button>
          </li>
        </ul>
        <div class="tip" v-if="showTip">
          <i class="el-icon-warning"></i>
          请在<span class="strong">2020-11-11 17:00</span>前完成付款。
          <span class="strong">如未完成付款，你的参赛资格江北取消。</span>
        </div>
      </div>
    </div>
    <div class="card column">
      <div class="grid-title">{{ $t('user.info') }}</div>
      <ul class="info-content">
        <li class="grid" v-for="(user, index) in userInfo" :key="index">
          <span class="name">{{ user.name }}</span>
          <span class="value">{{ user.value }}</span>
        </li>
      </ul>
    </div>
    <div class="card column">
      <div class="grid-title">{{ $t('login.emergencyName') }}</div>
      <ul class="info-content">
        <li class="grid" v-for="(user, index) in emergencyInfo" :key="index">
          <span class="name">{{ user.name }}</span>
          <span class="value">{{ user.value }}</span>
        </li>
      </ul>
    </div>
    <div class="card column">
      <div class="grid-title">{{ $t('login.signature') }}</div>
      <ul class="info-content">
        <li class="grid">
          <span class="name">{{ $t('login.name') }}</span>
          <img class="signature" :src="eleSignImg" />
        </li>
        <li class="grid">
          <span class="name">{{ $t('login.applyDate') }}</span>
          <span class="value">2020-11-11</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  components: {},
  data() {
    return {
      project: [],
      title: '',
      bannerImg: '',
      eleSignImg: ''
    }
  },
  computed: {
    ...mapState('game', ['applyDetails']),
    ...mapGetters('user', ['user', 'sosUser']),
    showTip() {
      return this.project.find(el => el.value === '未支付')
    },
    userInfo() {
      return [
        { name: this.$t('login.name'), value: this.user.truename },
        { name: this.$t('login.country'), value: this.user.country_name },
        { name: this.$t('login.cert'), value: this.user.idName },
        { name: this.$t('login.birthday'), value: this.user.birthday },
        { name: this.$t('login.gender'), value: this.user.genderName },
        { name: this.$t('login.pinyin'), value: this.user.full_name },
        { name: this.$t('login.phone'), value: this.user.phone },
        { name: this.$t('login.email'), value: this.user.phone }
      ]
    },
    emergencyInfo() {
      return [
        { name: this.$t('login.name'), value: this.sosUser.truename },
        { name: this.$t('login.concern'), value: this.sosUser.relation },
        { name: this.$t('login.address'), value: this.sosUser.fullAddress }
      ]
    }
  },
  watch: {
    applyDetails(applyDetails) {
      if (applyDetails) {
        this.project = [
          { name: this.$t('user.projiect'), value: applyDetails.activity.entry_name },
          { name: this.$t('user.tableNumber'), value: applyDetails.sign.entry_number },
          { name: this.$t('user.target'), value: applyDetails.sign.status_name },
          { name: this.$t('user.position'), value: applyDetails.window_number },
          { name: this.$t('user.tableStatus'), value: applyDetails.status_name },
          { name: this.$t('user.bus'), value: applyDetails.sign.car_number }
        ]
        this.title = applyDetails.activity.name
        this.bannerImg = applyDetails.activity.image_url
        this.eleSignImg = applyDetails.sign.elec_sign
      }
    }
  },
  created() {
    this.getApplyDetails({ sign_id: this.$route.params.sId })
  },
  mounted() {},
  methods: {
    ...mapActions('game', ['getApplyDetails'])
  }
}
</script>

<style lang="scss" scoped>
.details {
  flex: 1;
  margin-left: 30px;
  .card {
    width: 100%;
    overflow: hidden;
    background: #ffffff;
    border-radius: 3px;
    padding: 30px;
    display: flex;
    & + .card {
      margin-top: 30px;
    }
    .right-part {
      flex: 1;
    }
    .title {
      font-size: 24px;
    }
    .pic {
      width: 250px;
      height: 132px;
      margin-right: 45px;
      object-fit: cover;
    }
    .project {
      display: flex;
      flex-wrap: wrap;
      margin-top: 8px;
    }
    .item /deep/ {
      width: 50%;
      font-size: 14px;
      line-height: 33px;
      .el-button {
        width: 68px;
        line-height: 32px;
        text-align: center;
        padding: 0;
        margin-left: 15px;
        font-size: 14px;
      }
    }
    .tip {
      font-size: 12px;
      display: inline-block;
      line-height: 34px;
      background: #fff3f2;
      padding-left: 10px;
      margin-top: 12px;
      .el-icon-warning,
      .strong {
        color: #d83838;
      }
    }
    &.column {
      flex-direction: column;
      padding: 0;
    }
    .grid-title {
      padding-left: 30px;
      line-height: 60px;
      border-bottom: 1px solid #edf0f5;
    }
    .info-content {
      padding: 13px 30px;
      display: flex;
      flex-wrap: wrap;
      .grid {
        width: 33.3%;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        margin: 13px 0;
        .name {
          color: #9b9b9b;
          margin-bottom: 6px;
        }
        .signature {
          width: 196px;
          height: 60px;
        }
      }
    }
  }
}
</style>
