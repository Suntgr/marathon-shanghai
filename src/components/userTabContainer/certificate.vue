<template>
  <div class="certificate">
    <div class="cert-box" v-for="i in 10" :key="i.id">
      <img class="cert-pic" src="http://img.la/220x304" />
    </div>
    <div v-for="i in 4" :key="i.id" class="cert-box"></div>
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

<style lang="scss" scoped>
.certificate {
  flex: 1;
  margin-left: 30px;
  overflow: hidden;
  background: #ffffff;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 32px 32px 0;
  .cert-box {
    width: calc(25% - 20px);
    margin: 10px;
    &:empty {
      height: 0;
      margin-bottom: 0;
      border: none;
    }
    .cert-pic {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
