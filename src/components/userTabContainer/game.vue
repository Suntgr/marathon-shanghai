<template>
  <div class="container">
    <div class="banner">
      <img class="avatar" :src="circleUrl" />
      <div>
        <div class="name-box">
          <span class="name">张大发</span>
          <i class="iconfont icon-jifen"></i>
          <span>积分222</span>
        </div>
        <div class="row">
          <span>账户安全：</span>
          <span>安全</span>
        </div>
        <div class="row">
          <span>绑定手机：</span>
          <span>15088887777</span>
        </div>
        <div class="row">
          <span>绑定邮箱：</span>
          <span>1211@163.com</span>
        </div>
      </div>
    </div>
    <el-row :gutter="22">
      <el-col :span="12">
        <div class="grid-content">
          <p class="grid-title">{{ $t('user.apply') }}</p>
          <div class="items">
            <div v-for="i in 2" :key="i" class="history">
              <p>2019年上海国际马拉松-慈善跑</p>
              <ul class="history-status">
                <li class="item">
                  <span>中签状态：</span>
                  <span>中签</span>
                </li>
                <li class="item">
                  <span>支付状态：</span>
                  <span>已支付</span>
                </li>
                <li class="item">
                  <span>参赛号：</span>
                  <span>1008</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <p class="grid-title">{{ $t('user.certificate') }}</p>
          <div class="items dir-row">
            <img v-for="i in 3" :key="i" class="certificate" src="http://img.la/200x300" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  .banner {
    width: 100%;
    height: 216px;
    background: linear-gradient(120deg, rgba(53, 91, 183, 1) 0%, rgba(73, 115, 217, 0.8) 100%);
    border-radius: 3px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  .avatar {
    width: 136px;
    margin-right: 70px;
    margin-left: 77px;
  }
  .name-box {
    font-size: 16px;
    color: #ffb70d;
    margin-bottom: 9px;
    .icon-jifen {
      margin-right: 2px;
    }
    .name {
      font-size: 28px;
      color: #ffffff;
      margin-right: 5px;
    }
  }
  .row {
    line-height: 33px;
    font-size: 14px;
  }
  .el-row {
    flex: 1;
    margin-top: 26px;
  }
  .el-col {
    height: 100%;
  }
  .grid-content {
    height: 100%;
    background: #ffffff;
    border-radius: 3px;
  }
  .grid-title {
    padding: 26px 30px;
    border-bottom: 1px solid #edf0f5;
  }
  .history {
    font-size: 14px;
    & + .history {
      margin-top: 30px;
    }
  }
  .items {
    padding: 30px;
    &.dir-row {
      display: flex;
      flex-wrap: wrap;
    }
    .certificate {
      width: 86px;
      height: 120px;
      margin-right: 28px;
      margin-bottom: 28px;
    }
  }
  .history-status {
    display: flex;
    align-items: center;
    margin-top: 12px;
    .item {
      width: 150px;
    }
  }
}
</style>
