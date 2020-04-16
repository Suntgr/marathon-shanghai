<template>
  <div class="header">
    <div class="top-bar">
      <div class="inner-content">
        <span class="welcome">{{ $t('header.welcome') }}</span>
        <!-- <i class="iconfont icon-diqiu"></i> -->
        <!-- <el-select class="lang-select" @change="changeLang" v-model="lang">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select> -->
        <el-dropdown trigger="click" class="lang-select" @command="handleLang">
          <div class="lang-name">
            <i class="iconfont icon-diqiu"></i>
            <span>{{ lang }}</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(value, name, index) in options"
              :key="index"
              :command="name"
              >{{ value }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <ul class="top-right">
          <li
            v-if="isLogin"
            class="user-name"
            @click="showUser = !showUser"
            v-click-outside="closePopupUser"
          >
            <span>{{ user.truename }}</span>
            <i class="el-icon-caret-bottom"></i>
            <div v-if="showUser" @click.stop>
              <el-card class="user-card">
                <div class="user-info">
                  <img class="avatar" :src="circleUrl" />
                  <p>{{ user.truename }}</p>
                  <p class="phone">{{ user.phone }}</p>
                </div>
                <span class="out" @click="showUser = false">{{ $t('header.out') }}</span>
              </el-card>
            </div>
          </li>
          <li v-else class="user-name">
            <span class="login-btn" @click="goLogin">登录</span>
            <el-divider direction="vertical"></el-divider>
            <span class="login-btn" @click="goSign">注册</span>
          </li>
          <li>
            <el-dropdown trigger="click" class="my-marathon">
              <div>
                <span>{{ $t('header.myMarathon') }}</span>
                <i class="el-icon-caret-bottom"></i>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in menus"
                  :key="item.linkName"
                  @click.native="goUser(item.linkName)"
                  >{{ item.name }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li class="faq">FAQ</li>
          <li class="share" @click="showQrcode = !showQrcode" v-click-outside="closePopupQrcode">
            <img class="share-icon" src="@/assets/images/inter/iphone.png" alt="" />
            <img class="share-icon" src="@/assets/images/inter/weixin.png" alt="" />
            <img class="share-icon" src="@/assets/images/inter/weibo.png" alt="" />
            <div v-show="showQrcode" @click.stop>
              <el-card class="qrcode-box">
                <img class="qrcode" src="http://img.la/200x300" />
                <p>手机扫码快速下载</p>
              </el-card>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {
      options: { 'zh-CN': '中文 | 简体', en: 'English', ja: '日本語' },
      lang: '',
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      showUser: false,
      showQrcode: false,
      menus: [
        { name: '我的报名', linkName: 'userApply' },
        { name: '我的成绩', linkName: 'results' },
        { name: '我的证书', linkName: 'certificate' }
      ]
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
    isLogin() {
      return !!sessionStorage.getItem('token')
    }
  },
  created() {
    this.lang = this.options[localStorage.getItem('lang')] || '中文 | 简体'
    if (!Object.keys(this.user).length && this.isLogin) {
      this.getUser()
    }
  },
  methods: {
    ...mapActions('user', ['getUser']),
    changeLang(e) {
      this.$i18n.locale = e
      localStorage.setItem('lang', e)
    },
    closePopupUser() {
      this.showUser = false
    },
    closePopupQrcode() {
      this.showQrcode = false
    },
    handleLang(e) {
      this.$i18n.locale = e
      localStorage.setItem('lang', e)
      this.lang = this.options[e]
    },
    goLogin() {
      this.$router.push({ name: 'login' })
    },
    goSign() {
      this.$router.push({ name: 'sign' })
    },
    goUser(name) {
      this.$router.push({ name, params: { actId: this.$route.params.actId } })
    }
  },
  directives: {
    'click-outside': {
      inserted: function(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          // here I check that click was outside the el and his childrens
          if (!(el == event.target || el.contains(event.target))) {
            // and if it did, call method provided in attribute value
            vnode.context[binding.expression](event)
          }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
      },
      unbind: function(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header /deep/ {
  width: 100%;
  .top-bar {
    width: 100%;
    padding: 0 30px;
    border-bottom: 1px solid #edf0f5;
  }
  .login-btn {
    cursor: pointer;
  }
  .inner-content {
    max-width: 1400px;
    margin: 0 auto;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #606060;
    .welcome {
      margin-right: 53px;
    }
    .el-icon-caret-bottom {
      color: #c0c4cc;
    }
    .lang-select {
      margin-left: 3px;
      margin-right: auto;
      cursor: pointer;
      .lang-name {
        display: flex;
        align-items: center;
      }
      .icon-diqiu {
        margin-right: 4px;
      }
      .el-input__inner {
        padding: 0;
        width: 95px;
        border: none;
        height: 40px;
        line-height: 40px;
      }
    }
    .top-right {
      height: 40px;
      display: flex;
      align-items: center;
      list-style: none;
      position: relative;
      z-index: 100;
      .user-name {
        margin-right: 35px;
        cursor: pointer;
      }
      .my-marathon {
        margin-right: 23px;
        cursor: pointer;
      }
      .faq {
        margin-right: 8px;
      }
      .share-icon {
        margin-left: 10px;
        border: 1px dashed #888888;
        cursor: pointer;
      }
      .user-card {
        width: 244px;
        height: 90px;
        position: absolute;
        top: 42px;
        left: 0;
        cursor: default;
        .user-info {
          .avatar {
            width: 41px;
            height: 41px;
            float: left;
            margin-right: 13px;
          }
          .phone {
            margin-top: 5px;
            color: #9b9b9b;
          }
        }
        .out {
          position: absolute;
          bottom: 11px;
          right: 14px;
          color: #ca3c3c;
          font-size: 12px;
          cursor: pointer;
        }
      }
      .qrcode-box {
        width: 124px;
        height: 130px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 42px;
        right: -19px;
        font-size: 12px;
        text-align: center;
        .el-card__body {
          padding: 0;
          color: #606060;
        }
        .qrcode {
          width: 82px;
          height: 82px;
          margin-bottom: 8px;
        }
      }
    }
  }
}
.el-dropdown-menu__item:not(.is-disabled):hover,
.el-dropdown-menu__item:focus {
  color: #d7a746;
  // border-bottom: 1px solid;
  background: none;
  position: relative;
  &::before {
    content: '';
    height: 1px;
    background: #d7a746;
    position: absolute;
    bottom: 0;
    left: 20px;
    right: 20px;
  }
}
</style>
