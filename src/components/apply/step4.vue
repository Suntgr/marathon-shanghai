<template>
  <div class="apply-step">
    <div class="title">4.请阅读参赛声明，并输入电子签名</div>
    <div class="apply-content" v-loading="loading">
      <!-- <div class="content-title">2019上海国际马拉松赛竞赛规程</div> -->
      <div class="content" v-html="rule"></div>
    </div>
    <div class="apply-content">
      <p class="table-name">电子签名</p>
      <el-form label-width="75px" label-position="left" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input disabled :value="user.truename"></el-input>
          <el-button class="signature blue-btn" :icon="iconName" @click="openSignature">{{
            tabName
          }}</el-button>
        </el-form-item>
        <el-form-item label="报名日期">
          <el-input disabled :value="now | dateConvert"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button type="warning" class="agree" :disabled="tabName === '立即签名'" @click="agree"
      >同意参赛声明</el-button
    >
    <el-dialog title="电子签名" width="984px" :visible.sync="dialogTableVisible">
      <div>
        <p>请认真签赛您的姓名，否则将影响您的报名参赛资格</p>
        <canvas id="canvas"></canvas>
        <p class="tip">
          您的签名（包括但不限于书写签名、电子签名）提交后表明您已认同和接受《参赛声明》的全部条款，具有相应的法律效力，电子签名于手写签名具有同等法律效力。
        </p>
        <span slot="footer" class="dialog-footer">
          <el-button type="warning" :disabled="disabled" @click="ok">确 定</el-button>
          <el-button type="warning" @click="clear" plain>重签</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import SignaturePad from 'signature_pad'
import { mapGetters, mapState } from 'vuex'
export default {
  components: {},
  data() {
    return {
      loading: true,
      lang: localStorage.getItem('lang'),
      dialogTableVisible: false,
      canvas: '',
      signaturePad: '',
      isBegin: false,
      now: Date.now(),
      disabled: true,
      isOk: false,
      tabName: '立即签名',
      rule: ''
    }
  },
  watch: {
    '$i18n.locale'() {
      this.getRules()
    }
  },
  computed: {
    ...mapState('game', ['entryType', 'parentChildId']),
    ...mapGetters('user', ['user', 'sosUser']),
    iconName() {
      return this.tabName === '已签名' ? 'el-icon-check' : ''
    }
  },
  created() {
    this.getRules()
  },
  mounted() {},
  methods: {
    agree() {
      this.$apis.game
        .applyGame({
          activity_id: this.$route.params.actId,
          entry_type: this.entryType,
          parent_child_id: this.parentChildId
        })
        .then(() => {
          this.$emit('next')
        })
    },
    getRules() {
      this.$apis.game
        .getRule({
          activity_id: this.$route.params.actId,
          type: 3,
          lang: this.lang
        })
        .then(({ data }) => {
          this.rule = data.info.content
        })
        .finally(() => {
          this.loading = false
        })
    },
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n)

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }

      return new File([u8arr], filename, { type: mime })
    },
    ok() {
      this.isOk = true
      const data = this.signaturePad.toDataURL('image/jpeg')
      const file = this.dataURLtoFile(data, 'sign.jpeg')
      this.$apis.game
        .uploadElecSign({
          activity_id: this.$route.params.actId,
          entry_type: this.entryType,
          file
        })
        .then(() => {
          this.dialogTableVisible = false
          this.tabName = '已签名'
        })
    },
    close() {
      if (this.isOk) return
      this.isBegin = false
      this.signaturePad.clear()
    },
    clear() {
      this.isOk = false
      this.disabled = true
      const context = this.canvas.getContext('2d')
      context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      context.fillStyle = 'rgb(255,255,255)'
      context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    },
    openSignature() {
      this.dialogTableVisible = true
      this.$nextTick(() => {
        if (!this.canvas) {
          this.canvas = document.querySelector('#canvas')
          this.signaturePad = new SignaturePad(this.canvas, {
            backgroundColor: 'rgb(255,255,255)',
            // minWidth: 5,
            // maxWidth: 10,
            // penColor: 'rgb(66, 133, 244)',
            onBegin: () => {
              if (!this.isBegin) {
                this.clear()
                this.isBegin = true
              }
              this.disabled = false
              // this.canvas.getContext('2d').fillText('', 50, 50)
              // this.signaturePad.clear()
            }
          })
        }
        if (this.tabName === '立即签名') {
          this.resizeCanvas()
        }
      })
    },
    resizeCanvas() {
      const ratio = Math.max(window.devicePixelRatio || 1, 1)
      this.canvas.width = this.canvas.offsetWidth * ratio
      this.canvas.height = this.canvas.offsetHeight * ratio
      const context = this.canvas.getContext('2d')
      context.scale(ratio, ratio)
      context.font = '70px Microsoft Yahei'
      context.fillStyle = '#D8DDE6'
      context.fillText('签名区域', 300, 170)
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
    background: #ffffff;
    margin-top: 16px;
    border-radius: 3px;
    padding: 30px;
    .content-title {
      border-bottom: 1px solid #d8dde6;
      padding-bottom: 14px;
      margin-bottom: 14px;
    }
    .content {
      min-height: 300px;
    }
    .el-form-item {
      margin-top: 30px;
    }
    .el-input {
      width: 240px;
    }
    .signature {
      margin-left: 10px;
      font-size: 14px;
      margin-left: 10px;
      width: 150px;
    }
  }
  .agree.el-button {
    display: block;
    width: 400px;
    margin: 30px auto;
  }
  .el-dialog__header {
    border-bottom: 1px solid #edf0f5;
  }
  .dialog-footer {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .el-button {
      width: 146px;
    }
  }
  .tip {
    color: #ca3c3c;
    line-height: 1.5;
  }
  #canvas {
    width: 100%;
    height: 300px;
    border: 1px solid #d8d8d8;
    margin: 20px 0;
  }
}
</style>
