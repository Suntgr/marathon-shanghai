<template>
  <div class="photp-content">
    <div class="card" v-for="i in 3" :key="i.id">
      <div class="title">
        <span>2019上海国际半程马拉松赛</span>
        <span class="more" @click="checkMore">MORE <i class="el-icon-plus"></i></span>
      </div>
      <ul class="photo-list">
        <li class="photo-box" v-for="i in 4" :key="i.id">
          <img class="photo" src="http://img.la/192x122" />
        </li>
        <li class="photo-box" v-for="i in 3" :key="i.id"></li>
      </ul>
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
    checkMore() {
      this.$emit('photo')
    }
  }
}
</script>

<style lang="scss" scoped>
.photp-content {
  flex: 1;
  margin-left: 30px;
  overflow: hidden;
  .card {
    background: #ffffff;
    border-radius: 3px;
    overflow: hidden;
    & + .card {
      margin-top: 30px;
    }
    .title {
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32px;
      border-bottom: 1px solid #edf0f5;
      .more {
        cursor: pointer;
      }
      .el-icon-plus {
        color: #d7a746;
      }
    }
    .photo-list {
      display: flex;
      justify-content: space-between;
      padding: 28px 22px 18px;
      flex-wrap: wrap;
    }
    .photo-box {
      width: calc(20% - 20px);
      margin: 0 10px 10px;

      .photo {
        width: 100%;
        height: 100%;
      }
      &:empty {
        height: 0;
        margin-bottom: 0;
        border: none;
      }
    }
    .el-pagination {
      text-align: right;
      margin-bottom: 30px;
    }
  }
}
</style>
