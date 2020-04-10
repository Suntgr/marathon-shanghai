<template>
  <div class="step-finish">
    <img class="success" src="../../assets/images/success.png" />
    <div>
      <p class="title">您的预报名信息已成功提交，等待抽签</p>
      <ul class="content">
        <li class="item">比赛名称：2019上海国际马拉松</li>
        <li class="item">项目：半程马拉松</li>
        <li class="item red">抽签结果公布时间：2018年11月11日</li>
        <li class="item">比赛时间：2018年11月11日 14:00</li>
      </ul>
      <p class="tip">关注“上马”微信公众号或下载上马App及时获取更多赛事信息</p>
      <footer class="footer">
        <div class="qrcode-box">
          <img class="qrcode" src="http://img.la/200x200" />
          <span>{{ $t('footer.wechat') }}</span>
        </div>
        <div class="qrcode-box">
          <img class="qrcode" src="http://img.la/200x200" />
          <span>{{ $t('footer.app') }}</span>
        </div>
      </footer>
    </div>
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
  methods: {}
}
</script>

<style lang="scss" scoped>
.step-finish {
  display: flex;
  justify-content: center;
  .success {
    width: 253px;
    height: 328px;
    margin-right: 60px;
  }
  .title {
    font-size: 30px;
    margin-bottom: 15px;
  }
  .content {
    font-size: 18px;
    overflow: hidden;
    .item {
      margin-top: 15px;
      &.red {
        color: #d83838;
      }
    }
  }
  .tip {
    font-size: 14px;
    margin-top: 60px;
    margin-bottom: 30px;
  }
  .footer {
    display: flex;
    margin-bottom: 20px;
    .qrcode-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 30px;
      font-size: 14px;
    }
    .qrcode {
      width: 120px;
      height: 120px;
      margin-bottom: 20px;
    }
  }
}
</style>
