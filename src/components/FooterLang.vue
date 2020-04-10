<template>
  <footer class="footer">
    <ul class="footer-langs">
      <li class="btn" @click="setLanguage('zh-CN')">中文</li>
      <li class="btn" @click="setLanguage('en')">English</li>
      <li class="btn" @click="setLanguage('ja')">日本語</li>
    </ul>
    <span>© Copyright 2019 Organizing Committee of Shanghai Marathon 沪ICP备17043220号</span>
  </footer>
</template>

<script>
export default {
  methods: {
    setLanguage(e) {
      this.$emit('reset')
      this.$i18n.locale = e
      localStorage.setItem('lang', e)
    }
  }
}
</script>

<style lang="scss">
.footer {
  color: #4a4a4a;
  width: 100%;
  height: 120px;
  background: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.footer-langs {
  list-style: none;
  margin-bottom: 15px;
  display: flex;
  .btn {
    padding: 0 20px;
    cursor: pointer;
    &:not(:last-child) {
      border-right: 1px solid;
    }
  }
}
</style>
