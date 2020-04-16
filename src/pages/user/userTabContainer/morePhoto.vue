<template>
  <div class="photp-content">
    <div class="card">
      <div class="title">
        <span>{{ photoList.name }}</span>
      </div>
      <ul class="photo-list">
        <li class="photo-box" v-for="(item, index) in list" :key="index">
          <img class="photo" :src="item.image_url" />
        </li>
        <li class="photo-box" v-for="i in 3" :key="i.id"></li>
      </ul>
      <el-pagination
        v-if="total > 20"
        background
        @current-change="handleCurrentChange"
        :page-sizes="pageSizes"
        layout="prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {
      pageSizes: [20],
      list: []
    }
  },
  computed: {
    ...mapGetters('game', ['photoPart', 'activedPhoto']),
    photoList() {
      return this.photoPart[this.activedPhoto]
    },
    total() {
      return this.photoList.images.length
    }
  },
  created() {
    this.handleCurrentChange(1)
  },
  mounted() {},
  methods: {
    handleCurrentChange(val) {
      this.list = this.photoList.images.slice(this.pageSizes * (val - 1), this.pageSizes * val)
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
      padding: 18px 22px;
      flex-wrap: wrap;
    }
    .photo-box {
      width: calc(20% - 20px);
      margin: 10px;
      .photo {
        width: 100%;
        height: 100%;
      }
      &:empty {
        height: 0;
        margin-top: 0;
        margin-bottom: 0;
        border: none;
      }
    }
    /deep/ .el-pagination {
      text-align: right;
      margin-bottom: 30px;
      &.is-background .el-pager li:not(.disabled) {
        &:hover {
          color: #d7a746;
        }
        &.active {
          background-color: #d7a746;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
