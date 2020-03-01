<template>
  <footer class="footer" :class="$i18n.locale">
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
  </footer>
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
.footer {
  width: 100%;
  height: 250px;
  background: #343e68;
  display: flex;
  align-items: center;
  justify-content: center;
  &.cn {
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
}
</style>
