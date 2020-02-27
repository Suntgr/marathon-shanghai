<template>
  <div class="finish-sign">
    <img class="success" src="../../assets/images/success.png" />
    <div>
      <p class="Congratulations">{{ $t('login.signOk') }}</p>
      <span class="success-tip">{{ $t('login.okTip') }}</span>
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

<style lang="scss">
.finish-sign {
  display: flex;
  align-items: center;
  justify-content: center;
  .success {
    width: 255px;
    margin-right: 60px;
  }
  .Congratulations {
    font-size: 20px;
    color: #4a4a4a;
    margin-bottom: 15px;
  }
  .success-tip {
    color: #7c7c7c;
  }
}
</style>
