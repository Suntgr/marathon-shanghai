<template>
  <footer ref="footer" class="footer" :class="$i18n.locale" :style="{ background: bgColor }">
    <div class="inner-footer">
      <div>
        <p class="row">{{ $t('footer.instructions') }}</p>
        <p class="row">
          <span class="td">{{ $t('footer.phone') }}</span
          >：
          <span>021-965365</span>
        </p>
        <p class="row">
          <span class="td">{{ $t('login.email') }}</span
          >：
          <span>general@shmarathon.com</span>
        </p>
        <p class="row-last">
          @Copyright 2019 Organizing Committee of Shanghai Marathon 沪ICP备17043220号
        </p>
      </div>
      <div class="qrcode-box ml">
        <img class="qrcode" src="http://img.la/200x200" />
        <span>{{ $t('footer.wechat') }}</span>
      </div>
      <div class="qrcode-box">
        <img class="qrcode" src="http://img.la/200x200" />
        <span>{{ $t('footer.app') }}</span>
      </div>
    </div>
    <div
      v-if="showScrollTop"
      class="back-top-btn"
      :style="{ background: bgColor }"
      @click="scrollTop"
    >
      <i class="iconfont icon-back-top"></i>
    </div>
  </footer>
</template>

<script>
export default {
  components: {},
  props: {
    bgColor: {
      type: String,
      default: '#343e68'
    }
  },
  data() {
    return {
      showScrollTop: false
    }
  },
  computed: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.showScrollTop = this.$parent.$el.offsetHeight > document.body.clientHeight
    }, 1000)
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &.zh-CN {
    .td {
      width: 56px;
      display: inline-block;
      text-align: justify;
      text-align-last: justify;
    }
  }
  .inner-footer {
    width: 1000px;
    font-size: 14px;
    color: #ffffff;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .row {
      margin-bottom: 15px;
    }
    .row-last {
      margin-top: 30px;
    }

    .qrcode-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      &.ml {
        margin-left: auto;
        margin-right: 30px;
      }
      .qrcode {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
      }
    }
  }
  .back-top-btn {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: -50px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    .icon-back-top {
      font-size: 26px;
      color: #ffffff;
    }
  }
}
</style>
