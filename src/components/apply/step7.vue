<template>
  <div class="step-finish">
    <img class="success" src="../../assets/images/success.png" />
    <div class="apply-content">
      <p class="title">恭喜您，已成功报名2019上海国际马拉松赛</p>
      <ul>
        <li class="item">参赛项目：全程马拉松</li>
        <li class="item">比赛日期：2019年11月17日</li>
        <li class="item">姓名：蒋薇薇</li>
      </ul>
      <div class="footer">
        <i class="iconfont icon-warning"></i>
        <p>
          请您于2019年10月30日后查询您的参赛号、装备领取窗口号和存衣车号。
          <br />参赛装备领取事宜请留意<a>上马网</a>。
        </p>
      </div>
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
.step-finish /deep/ {
  display: flex;
  justify-content: center;
  align-items: center;
  .success {
    width: 253px;
    height: 328px;
    margin-right: 60px;
  }
  .title {
    font-size: 30px;
    margin-bottom: 15px;
  }
  .apply-content {
    .item {
      font-size: 18px;
      line-height: 42px;
    }
  }
  .footer {
    display: flex;
    background: #f7edda;
    padding: 18px 23px;
    font-size: 18px;
    line-height: 1.5;
    margin-top: 20px;
    .icon-warning {
      color: #d7a746;
      font-size: 24px;
      margin-right: 15px;
    }
  }
}
</style>
