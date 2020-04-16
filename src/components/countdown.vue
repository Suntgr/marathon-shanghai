<template>
  <div class="banner-box">
    <div class="banner">
      <div class="title">距<span style="color: #CFA957">2019</span>上海国际马拉松开赛</div>
      <div class="countdown">
        <span class="number-box">12</span>天<span class="number-box">15</span>时
        <span class="number-box ml">08</span>分<span class="number-box">30</span>秒
      </div>
      <el-button type="warning" size="small" @click="goApply">立即报名</el-button>
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
  methods: {
    goApply() {
      this.$router.push({ name: 'apply', params: { actId: this.$route.params.actId } })
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'hz';
  src: url('../assets/font/hz.ttf');
  font-weight: normal;
  font-style: normal;
}
.banner-box {
  width: 100%;
  height: 178px;
  background: linear-gradient(90deg, rgba(12, 36, 82, 1) 0%, rgba(51, 82, 138, 1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  .banner {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 22px;
      font-family: 'hz';
      letter-spacing: 2px;
    }
    .countdown {
      font-size: 16px;
      color: #d8dde6;
      display: flex;
      align-items: center;
      margin-top: 16px;
    }
    .number-box {
      font-size: 24px;
      color: #ffffff;
      width: 35px;
      line-height: 40px;
      background: #36539a;
      text-align: center;
      border-radius: 3px;
      margin: 0 8px;
      text-decoration: line-through;
      text-decoration-color: #cfa957;
      &.ml {
        margin-left: 28px;
      }
    }
    .el-button {
      width: 128px;
      margin-top: 20px;
    }
  }
}
</style>
