<template>
  <div class="user-center">
    <div class="group">
      <div class="header">
        <span class="title">基本条件</span>
        <span class="tip">
          <i class="el-icon-warning"></i>
          报名必须条件，确认信息后将不能修改(请务必真实)。
        </span>
        <a v-if="!editing" class="btn" @click="editing = true">编辑</a>
      </div>
      <div class="content">
        <ul v-if="!editing" class="info-content">
          <li class="grid" v-for="(user, index) in userInfo" :key="index">
            <span class="name">{{ user.name }}</span>
            <span class="value">{{ user.value }}</span>
          </li>
        </ul>
        <template v-else>
          <div class="editor-content">
            <el-form class="info-content" :inline="true" label-width="75px">
              <el-form-item v-for="(item, index) in userInfo" :key="index" :label="item.name">
                <el-input :value="item.value" :disabled="item.disabled"></el-input>
              </el-form-item>
              <el-form-item class="address-box" label="现居地址">
                <el-cascader
                  :props="{ value: 'code', label: 'name' }"
                  :options="addressOptions"
                  :value="user.cascaderValue"
                ></el-cascader>
                <el-input class="address" :value="user.address"></el-input>
              </el-form-item>
            </el-form>
            <div class="photo-btn">
              <img class="photo" src="http://img.la/200x300" />
              <span class="true-name">{{ user.truename }}</span>
            </div>
          </div>
          <div class="editor-btns">
            <el-button type="warning">保存</el-button>
            <el-button type="warning" plain>取消</el-button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import addressOptions from '@/assets/js/address.js'
import { mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {
      addressOptions,
      editing: false
    }
  },
  computed: {
    ...mapGetters('user', ['user', 'sosUser']),
    userInfo() {
      return [
        { name: this.$t('login.name'), value: this.user.truename, disabled: true },
        { name: this.$t('login.country'), value: this.user.country_name, disabled: true },
        { name: this.$t('login.birthday'), value: this.user.birthday, disabled: true },
        { name: this.$t('login.cert'), value: this.user.idName, disabled: true },
        { name: this.$t('login.gender'), value: this.user.genderName, disabled: true },
        { name: this.$t('login.pinyin'), value: this.user.full_name, disabled: true },
        { name: this.$t('login.phone'), value: this.user.phone },
        { name: this.$t('login.email'), value: this.user.phone }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.user-center /deep/ {
  flex: 1;
  margin-left: 30px;
  .group {
    background: #ffffff;
    border-radius: 3px;
    overflow: hidden;
    .header {
      display: flex;
      align-items: center;
      padding: 20px 30px;
      border-bottom: 1px solid #edf0f5;
      .title {
        font-size: 16px;
      }
      .tip {
        font-size: 12px;
        color: #ca3c3c;
      }
      .btn {
        color: #317ad7;
        margin-left: auto;
        cursor: pointer;
      }
    }
    .content {
      padding: 10px 30px;
      .info-content {
        flex: 5;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .grid {
          width: 50%;
          display: flex;
          flex-direction: column;
          font-size: 14px;
          margin: 13px 0;
          .name {
            color: #9b9b9b;
            margin-bottom: 6px;
          }
          .signature {
            width: 196px;
            height: 60px;
          }
        }
      }
      .el-form {
        margin-top: 30px;
      }
      .el-form-item {
        // margin-top: 30px;
        .el-form-item__label {
          text-align: justify;
          &::after {
            content: '';
            display: inline-block;
            width: 100%;
          }
        }
        .el-input,
        .el-select {
          width: 240px;
        }
        &.address-box {
          width: 100%;
          .address {
            flex: 1;
            margin-left: 10px;
          }
        }
        .el-form-item__content {
          flex: 1;
        }
      }
      .photo-btn {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        .photo {
          width: 134px;
          height: 134px;
          border-radius: 100%;
          overflow: hidden;
        }
        .true-name {
          width: 200px;
          line-height: 44px;
          text-align: center;
          border: 1px solid #d8dde6;
          border-radius: 3px;
          margin-top: 22px;
        }
      }
    }
    .editor-content {
      display: flex;
    }
    .editor-btns {
      margin-left: 70px;
      .el-button {
        width: 140px;
        margin-right: 25px;
      }
    }
  }
}
</style>
