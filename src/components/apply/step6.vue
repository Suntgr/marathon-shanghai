<template>
  <div class="step-finish">
    <img class="success" src="../../assets/images/success.png" />
    <div class="content">
      <p class="title">恭喜您，已获得2019上海国际半程马拉松赛报名参赛资格</p>
      <p class="tip">请在 2019-11-17 17:00 前完成付款。如未完成付款，您的报名参赛资格将被取消。</p>
      <p class="red">报名费：￥160.00</p>
      <p>支付方式：</p>
      <ul class="pay-way">
        <li class="grid" :class="{ select: active === 1 }" @click="active = 1">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
          <i v-show="active === 1" class="el-icon-success"></i>
        </li>
        <li class="grid" :class="{ select: active === 2 }" @click="active = 2">
          <i class="iconfont icon-z-alipay"></i>
          <span>支付宝</span>
          <i v-show="active === 2" class="el-icon-success"></i>
        </li>
        <li class="grid" :class="{ select: active === 3 }" @click="active = 3">
          <icon name="pay"></icon>
          <span>中国银联</span>
          <i v-show="active === 3" class="el-icon-success"></i>
        </li>
      </ul>
      <el-button type="warning" @click="openPay">立即支付</el-button>
    </div>
    <el-dialog title="支付页面" :visible.sync="dialogTableVisible">
      <div class="pay-page">
        <ul>
          <li>报名支付金额</li>
          <li class="money">￥160.00</li>
          <li>支付剩余时间</li>
          <li class="time">01 : 56</li>
        </ul>
        <div class="pay-qrcode">
          <img class="qrcode" src="http://img.la/192x192" />
          <p class="pay-tip">打开手机微信 扫一扫二维码</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialogTableVisible: false,
      active: 0
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    openPay() {
      this.dialogTableVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.step-finish /deep/ {
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
  .tip {
    color: #808080;
    font-size: 18px;
    margin-top: 10px;
  }
  .content {
    font-size: 18px;
    overflow: hidden;
  }
  .pay-way {
    display: flex;
    margin-top: 10px;
    .grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 100px;
      background: #ffffff;
      font-size: 14px;
      margin-right: 30px;
      position: relative;
      &.select {
        border-radius: 3px;
        border: 2px solid #d7a746;
      }
      .iconfont {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .icon-weixin {
        color: #22ac38;
      }
      .icon-z-alipay {
        color: #4eb3f7;
      }
      .icon-pay {
        width: 32px;
        height: 32px;
        margin-bottom: 8px;
      }
      .el-icon-success {
        color: #d7a746;
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
  }
  .el-button {
    width: 400px;
    margin-top: 60px;
    margin-bottom: 15px;
  }
  .red {
    color: #d83838;
    margin-top: 30px;
    margin-bottom: 15px;
  }
  .el-dialog__header {
    border-bottom: 1px solid #edf0f5;
  }
  .pay-page {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .money {
      color: #ca3c3c;
      font-size: 36px;
      margin-bottom: 20px;
      margin-top: 15px;
    }
    .time {
      font-size: 20px;
      margin-top: 15px;
    }
  }
  .pay-qrcode {
    float: right;
    .qrcode {
      width: 192px;
      height: 192px;
    }
    .pay-tip {
      font-size: 14px;
      margin-top: 12px;
    }
  }
}
</style>
