<template>
  <div class="user-page">
    <header-m></header-m>
    <div class="logo-box">
      <div class="inner-box">
        <img class="sm-logo" src="@/assets/images/sm-logo.png" />
      </div>
    </div>
    <div class="main">
      <div class="inner-main">
        <el-breadcrumb class="nav-bread" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">{{ $t('user.homePage') }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ $t('header.myMarathon') }}</el-breadcrumb-item>
          <el-breadcrumb-item v-if="currentMenu">{{ currentMenu }}</el-breadcrumb-item>
          <el-breadcrumb-item v-if="nextMenu">{{ nextMenu }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="menu-content">
          <nav-menu @update="setMenu"></nav-menu>
          <component
            :is="currentTabComponent"
            @details="handleDetails"
            @photo="morePhoto"
          ></component>
        </div>
      </div>
    </div>
    <footer-m></footer-m>
  </div>
</template>

<script>
import HeaderM from '@/components/header.vue'
import FooterM from '@/components/footer.vue'
import NavMenu from '@/components/NavMenu.vue'
import TGame from '@/components/userTabContainer/game.vue'
import TApply from '@/components/userTabContainer/apply.vue'
import TDetail from '@/components/userTabContainer/details.vue'
import TRanking from '@/components/userTabContainer/ranking.vue'
import TCert from '@/components/userTabContainer/certificate.vue'
import TPhoto from '@/components/userTabContainer/photo.vue'
import TPhotoMore from '@/components/userTabContainer/morePhoto.vue'
export default {
  components: {
    HeaderM,
    FooterM,
    NavMenu,
    TGame,
    TApply,
    TDetail,
    TRanking,
    TCert,
    TPhoto,
    TPhotoMore
  },
  data() {
    return {
      currentMenu: '',
      showDetails: false,
      nextMenu: '',
      photoDetails: false
    }
  },
  warch: {
    '$i18n.locale'() {
      this.setMenu()
    }
  },
  computed: {
    currentTabComponent() {
      if (!this.currentMenu) {
        return 't-game'
      }
      if (this.currentMenu === this.$t('user.apply') && !this.nextMenu) {
        return 't-apply'
      }
      if (this.showDetails) {
        return 't-detail'
      }
      if (this.currentMenu === this.$t('user.results')) {
        return 't-ranking'
      }
      if (this.currentMenu === this.$t('user.certificate')) {
        return 't-cert'
      }
      if (this.currentMenu === this.$t('user.photo') && !this.photoDetails) {
        return 't-photo'
      }
      if (this.photoDetails) {
        return 't-photo-more'
      }
      return ''
    }
  },
  created() {},
  mounted() {},
  methods: {
    setMenu(menu) {
      this.currentMenu = menu
      this.nextMenu = ''
      this.nextMenu = ''
      this.showDetails = false
      this.photoDetails = false
    },
    handleDetails(e) {
      console.log(e)
      this.showDetails = true
      this.nextMenu = '报名详情'
    },
    morePhoto() {
      this.photoDetails = true
    }
  }
}
</script>

<style lang="scss" scoped>
.user-page {
  width: 100%;
  .logo-box {
    width: 100%;
    padding: 0 30px;
    border-bottom: 1px solid #d8dde6;
    .inner-box {
      max-width: 1400px;
      height: 113px;
      display: flex;
      align-items: center;
      margin: 0 auto;
    }
    .sm-logo {
      width: 515px;
      margin-left: -63px;
    }
  }
  .main {
    width: 100%;
    padding: 0 30px;
    background: #f4f4f4;
    min-height: calc(100vh - 403px);
    overflow: hidden;
    padding-bottom: 20px;
    .inner-main {
      max-width: 1400px;
      margin: 0 auto;
    }
    .nav-bread {
      margin-top: 20px;
      margin-bottom: 23px;
    }
    .menu-content {
      display: flex;
    }
  }
}
</style>
