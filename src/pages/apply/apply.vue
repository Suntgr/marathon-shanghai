<template>
  <div class="apply">
    <t-header></t-header>
    <t-nav></t-nav>
    <div class="main">
      <div class="inner-main">
        <div class="steps-box">
          <el-breadcrumb class="apply-bread" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>2019上海国际马拉松赛</el-breadcrumb-item>
            <el-breadcrumb-item>我的报名</el-breadcrumb-item>
          </el-breadcrumb>
          <el-steps
            v-if="activeStep < 6"
            class="steps"
            :space="200"
            :active="activeStep - 1"
            finish-status="success"
          >
            <el-step></el-step>
            <el-step></el-step>
            <el-step></el-step>
            <el-step></el-step>
          </el-steps>
        </div>
        <step1 v-if="activeStep === 1" @next="activeStep = 2"></step1>
        <step2 v-if="activeStep === 2" @next="activeStep = 3"></step2>
        <step3 v-if="activeStep === 3" @next="activeStep = 4"></step3>
        <step4 v-if="activeStep === 4" @next="activeStep = 5"></step4>
        <step5 v-if="activeStep === 5" @next="activeStep = 6"></step5>
        <step6 v-if="activeStep === 6" @next="activeStep = 7"></step6>
        <step7 v-if="false"></step7>
      </div>
    </div>
    <t-footer></t-footer>
  </div>
</template>

<script>
import THeader from '@/components/header.vue'
import TFooter from '@/components/footer.vue'
import TNav from '@/components/nav.vue'
import Step1 from '@/components/apply/step1'
import Step2 from '@/components/apply/step2'
import Step3 from '@/components/apply/step3'
import Step4 from '@/components/apply/step4'
import Step5 from '@/components/apply/step5'
import Step6 from '@/components/apply/step6'
import Step7 from '@/components/apply/step7'
export default {
  components: {
    THeader,
    TFooter,
    TNav,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7
  },
  data() {
    return {
      activeStep: 1
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.apply {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    border-top: 1px solid #d8dde6;
    background: #f4f4f4;
    padding: 0 30px;
    .inner-main {
      max-width: 1400px;
      margin: 0 auto;
    }
    .steps-box {
      margin: 20px 0;
      position: relative;
    }
    .apply-bread {
      display: inline-block;
    }
    .steps /deep/ {
      width: 470px;
      height: 24px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .el-step__line {
        left: 40px;
        right: 16px;
      }
      .is-process {
        .el-step__icon {
          border-color: #4a90e2;
          .el-step__icon-inner {
            color: #4a90e2;
          }
        }
      }
      .is-success {
        .el-step__icon {
          background: #4a90e2;
          border-color: #4a90e2;
          .el-step__icon-inner {
            color: #ffffff;
          }
        }
        .el-step__line {
          background-color: #4a90e2;
        }
      }
    }
  }
}
</style>
