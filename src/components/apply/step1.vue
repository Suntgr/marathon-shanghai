<template>
  <div class="apply-step">
    <div class="apply-title">1.请阅读竞赛规程</div>
    <div v-loading="loading" class="apply-content">
      <!-- <div class="content-title">2019上海国际马拉松赛竞赛规程</div> -->
      <div class="content" v-html="rule">xxxxx</div>
    </div>
    <el-button type="warning" @click="next">已阅读竞赛规程，下一步</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      loading: true,
      lang: localStorage.getItem('lang'),
      rule: ''
    }
  },
  computed: {
    activityId() {
      return this.$route.params.actId
    }
  },
  watch: {
    '$i18n.locale'() {
      this.getRules()
    }
  },
  created() {
    this.getRules()
  },
  mounted() {},
  methods: {
    getRules() {
      this.$apis.game
        .getRule({
          activity_id: this.activityId,
          type: 1,
          lang: this.lang
        })
        .then(({ data }) => {
          this.rule = data.info.content
        })
        .finally(() => {
          this.loading = false
        })
    },
    next() {
      this.$apis.game
        .applyValidate({
          activity_id: this.activityId
        })
        .then(() => {
          this.$emit('next')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.apply-step /deep/ {
  overflow: hidden;
  .apply-title {
    margin-top: 10px;
    font-size: 18px;
    border-left: 2px solid;
    color: #2c3e6e;
    line-height: 25px;
    padding-left: 11px;
  }
  .apply-content {
    min-height: 300px;
    margin-top: 16px;
    border-radius: 3px;
    border: 1px solid rgba(216, 221, 230, 1);
    padding: 30px;
    background: #ffffff;
    .content-title {
      border-bottom: 1px solid #d8dde6;
      padding-bottom: 14px;
    }
    .content {
      margin-top: 14px;
    }
  }
  .el-button {
    display: block;
    width: 400px;
    margin: 30px auto;
  }
  .content {
    line-height: 1.5;
    .p-title {
      color: #2c3e6e;
    }
    table {
      border-collapse: collapse;
    }
  }
}
</style>
