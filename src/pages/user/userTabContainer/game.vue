<template>
  <div class="container">
    <div class="banner">
      <img class="avatar" :src="user.headimage" @error="setDefaultImg" />
      <div>
        <div class="name-box">
          <span class="name">{{ user.truename }}</span>
          <i class="iconfont icon-jifen"></i>
          <span>积分{{ user.integral }}</span>
        </div>
        <div class="row">
          <span>账户安全：</span>
          <span>安全</span>
        </div>
        <div class="row">
          <span>绑定手机：</span>
          <span>{{ user.phone }}</span>
        </div>
        <div class="row">
          <span>绑定邮箱：</span>
          <span>{{ user.email }}</span>
        </div>
      </div>
    </div>
    <el-row :gutter="22">
      <el-col :span="12">
        <div class="grid-content">
          <p class="grid-title">{{ $t('user.apply') }}</p>
          <div class="items" v-if="applyList">
            <div v-for="(item, index) in applyList.list" :key="index" class="history">
              <p>{{ item.name }}</p>
              <ul class="history-status">
                <li class="item">
                  <span>中签状态：</span>
                  <span>{{ item.status_name }}</span>
                </li>
                <li class="item">
                  <span>支付状态：</span>
                  <span>xxxxx</span>
                </li>
                <li class="item">
                  <span>参赛号：</span>
                  <span>{{ item.entry_number }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <p class="grid-title">{{ $t('user.certificate') }}</p>
          <div class="items dir-row">
            <img
              v-for="(item, index) in cert"
              :key="index"
              class="certificate"
              :src="item.image_url"
              :alt="item.name"
            />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState('game', ['applyList', 'cert']),
    ...mapGetters('user', ['user'])
  },
  created() {},
  mounted() {},
  methods: {
    setDefaultImg() {
      var img = event.srcElement
      img.src = 'http://img.la/200x200'
      img.onerror = null
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  .banner {
    width: 100%;
    height: 216px;
    background: linear-gradient(120deg, rgba(53, 91, 183, 1) 0%, rgba(73, 115, 217, 0.8) 100%);
    border-radius: 3px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  .avatar {
    width: 136px;
    height: 136px;
    border-radius: 100%;
    margin-right: 70px;
    margin-left: 77px;
  }
  .name-box {
    font-size: 16px;
    color: #ffb70d;
    margin-bottom: 9px;
    .icon-jifen {
      margin-right: 2px;
    }
    .name {
      font-size: 28px;
      color: #ffffff;
      margin-right: 5px;
    }
  }
  .row {
    line-height: 33px;
    font-size: 14px;
  }
  .el-row {
    flex: 1;
    margin-top: 26px;
  }
  .el-col {
    height: 100%;
  }
  .grid-content {
    height: 100%;
    background: #ffffff;
    border-radius: 3px;
  }
  .grid-title {
    padding: 26px 30px;
    border-bottom: 1px solid #edf0f5;
  }
  .history {
    font-size: 14px;
    & + .history {
      margin-top: 30px;
    }
  }
  .items {
    padding: 30px;
    &.dir-row {
      display: flex;
      flex-wrap: wrap;
    }
    .certificate {
      width: 86px;
      height: 120px;
      object-fit: cover;
      margin-right: 28px;
      margin-bottom: 28px;
    }
  }
  .history-status {
    display: flex;
    align-items: center;
    margin-top: 12px;
    .item {
      width: 150px;
    }
  }
}
</style>
