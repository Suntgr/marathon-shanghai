<template>
  <div class="details">
    <div class="card">
      <img class="pic" src="http://img.la/200x300" />
      <div class="right-part">
        <p class="title">2019年上海国际马拉松赛</p>
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
          <img class="signature" src="http://img.la/200x300" />
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
export default {
  components: {},
  data() {
    return {
      project: [
        { name: this.$t('user.projiect'), value: '慈善跑' },
        { name: this.$t('user.tableNumber'), value: '--' },
        { name: this.$t('user.target'), value: '中签' },
        { name: this.$t('user.position'), value: '--' },
        { name: this.$t('user.tableStatus'), value: '未支付' },
        { name: this.$t('user.bus'), value: '--' }
      ],
      userInfo: [
        { name: this.$t('login.name'), value: '李晓明' },
        { name: this.$t('login.country'), value: '中国' },
        { name: this.$t('login.cert'), value: '身份证：110xxxxxxxxxxxxxxx' },
        { name: this.$t('login.birthday'), value: '1988-08-08' },
        { name: this.$t('login.gender'), value: '男' },
        { name: this.$t('login.pinyin'), value: 'Li Xiaoming' },
        { name: this.$t('login.phone'), value: '15088889999' },
        { name: this.$t('login.email'), value: '111@163.com' }
      ],
      emergencyInfo: [
        { name: this.$t('login.name'), value: '李晓明' },
        { name: this.$t('login.concern'), value: '朋友' },
        { name: this.$t('login.address'), value: '上海市静安区灵石路984号' }
      ]
    }
  },
  computed: {
    showTip() {
      return this.project.find(el => el.value === '未支付')
    }
  },
  created() {},
  mounted() {},
  methods: {}
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
