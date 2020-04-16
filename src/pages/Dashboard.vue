<!-- @format -->
<template>
  <div class="dashboard">
    <div class="banner">
      <el-carousel :interval="5000" arrow="hover" height="780px">
        <el-carousel-item v-for="item in bannerItem" :key="item.id">
          <img class="carousel-img" :src="item.src" alt="" />
        </el-carousel-item>
      </el-carousel>
      <div class="top-bars">
        <template v-if="!isLogin">
          <span class="btn" @click="goLogin">你好,请登录</span>
          <span class="btn ml" @click="goSign">免费注册</span>
          <el-divider direction="vertical"></el-divider>
        </template>
        <template v-if="isLogin">
          <span class="btn">我的上马</span>
          <el-divider direction="vertical"></el-divider>
        </template>
        <span class="btn">FAQ</span>
        <el-divider direction="vertical"></el-divider>
        <div class="icon-imgs">
          <img class="img1" src="../assets/images/inter/iphone.png" alt="" />
          <img class="img1" src="../assets/images/dashboard/weixin.png" alt="" />
          <img class="img1" src="../assets/images/dashboard/weibo.png" alt="" />
        </div>
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
      </div>
      <div class="nav">
        <div class="text_logo">
          <img src="../assets/images/dashboard/redlogo.png" alt="" />
        </div>
        <div class="logo_line"></div>
        <ul class="nav-tabs">
          <li
            class="nav-tab"
            :class="{ [`actived-${index}`]: activeIndex === index }"
            v-for="(tab, index) in tabs"
            :key="index"
            @mouseover="activeIndex = index"
            @mouseout="activeIndex = 0"
            @click="goMarathon(tab)"
          >
            {{ tab.name }}
          </li>
        </ul>
        <!-- <div class="nav_button">
          <el-menu
            :default-active="activeIndex.toString()"
            class="el-menu-vertical-demo"
            background-color="#AC2424"
            text-color="#fff"
            active-text-color="#AC2424"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item
              v-for="(tab, index) in tabs"
              :key="index"
              :index="index.toString()"
              class="animat"
              @click="checkTab(tab, index)"
            >
              <img v-show="activeIndex === index" :src="tab.img" />
              <span slot="title">{{ tab.name }}</span>
            </el-menu-item>
          </el-menu>
        </div> -->
      </div>
    </div>
    <div class="news-content">
      <div class="grid-content">
        <div class="title-content">
          <span class="grid-name">新闻</span>
          <span>了解更多</span>
        </div>
        <div class="pic-content">
          <div class="pic-grid" v-for="(item, index) in newsPic" :key="index">
            <img class="news-pic" :src="item.src" />
            <div class="pic-mark">{{ item.mark }}</div>
          </div>
        </div>
      </div>
      <div class="grid-content notice">
        <div class="title-content">
          <span class="grid-name">公告</span>
          <span>了解更多</span>
        </div>
        <div class="notice-grids">
          <div class="notice-grid" v-for="i in 5" :key="i">
            <div class="date-content">
              <div class="notice-day">11</div>
              <div class="notice-year">2019.10</div>
            </div>
            <p class="notice-title">2019闻泰安世上海国际10公里精英赛10公里前8名成绩公10公里精…</p>
            <p class="notice-content">2019闻泰安世上海国际10公里精英赛10公里前8名成绩公示</p>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-content">
      <img class="banner-middle" src="../assets/images/dashboard/banner-middle.png" />
      <span class="banner-text">超越一切可能</span>
    </div>
    <div class="carousel-content">
      <img class="pic-s1" src="../assets/images/dashboard/s1.png" />
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <img class="carousel-pic" src="../assets/images/dashboard/s2.png" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="pic-box">
      <img class="mini-pic" src="../assets/images/dashboard/d4.png" />
      <img class="mini-pic" src="../assets/images/dashboard/news2.png" />
      <img class="mini-pic" src="../assets/images/dashboard/d3.png" />
      <img class="mini-pic" src="../assets/images/dashboard/d4.png" />
    </div>
    <div class="bottom-carousel">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in picCards" :key="item">
          <img class="carousel-img" :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <t-footer bgColor="#AC2424"></t-footer>
  </div>
</template>
<script>
import TFooter from '@/components/footer.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  components: {
    TFooter
  },
  data() {
    return {
      options: { 'zh-CN': '中文 | 简体', en: 'English', ja: '日本語' },
      bannerItem: [
        { id: 1, src: require('../assets/images/dashboard/banner_1.png') },
        { id: 2, src: require('../assets/images/dashboard/banner_1.png') },
        { id: 3, src: require('../assets/images/dashboard/banner_1.png') }
      ],
      tabs: [
        { name: '上海国际马拉松赛', img: require('../assets/images/dashboard/nav1.png') },
        { name: '上海国际半程马拉松赛', img: require('../assets/images/dashboard/nav2.png') },
        { name: '上海国际10公里精英赛', img: require('../assets/images/dashboard/nav3.png') },
        { name: '上海系列赛', img: require('../assets/images/dashboard/nav4.png') },
        { name: '上马商城', img: require('../assets/images/dashboard/nav5.png') },
        { name: '上马公益', img: require('../assets/images/dashboard/nav6.png') },
        { name: '上马志愿者', img: require('../assets/images/dashboard/nav7.png') }
      ],
      value: '',
      activeIndex: 0,
      newsPic: [
        {
          src: require('../assets/images/dashboard/news1.png'),
          mark: '上马训练营首次亮相－帮您实现一个马拉松梦想'
        },
        {
          src: require('../assets/images/dashboard/news2.png'),
          mark: '上马训练营首次亮相－帮您实现一个马拉松梦想'
        },
        {
          src: require('../assets/images/dashboard/news3.png'),
          mark: '上马训练营首次亮相－帮您实现一个马拉松梦想'
        },
        {
          src: require('../assets/images/dashboard/news4.png'),
          mark: '上马训练营首次亮相－帮您实现一个马拉松梦想'
        }
      ],
      picCards: [
        require('../assets/images/dashboard/b1.png'),
        require('../assets/images/dashboard/b2.png'),
        require('../assets/images/dashboard/b3.png')
      ],
      lang: ''
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
    ...mapState('game', ['activityList']),
    isLogin() {
      return !!sessionStorage.getItem('token')
    }
  },
  created() {
    this.lang = this.options[localStorage.getItem('lang')] || '中文 | 简体'
    this.getActivityList().then(({ list }) => {
      let n1 = list.find(el => el.type === 0 && el.precise_type === 1)
      let n2 = list.find(el => el.type === 0 && el.precise_type === 2)
      let n3 = list.find(el => el.type === 0 && el.precise_type === 3)
      let n4 = list.find(el => el.type === 1)
      n1 && (this.tabs[0].id = n1.activity_id)
      n2 && (this.tabs[1].id = n2.activity_id)
      n3 && (this.tabs[2].id = n3.activity_id)
      n4 && (this.tabs[3].id = n4.activity_id)
    })
  },
  methods: {
    ...mapActions('game', ['getActivityList']),
    goMarathon(tab) {
      if (tab.id) {
        this.$router.push({ name: 'marathon', params: { actId: tab.id } })
      }
    },
    handleSelect() {},
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
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
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/dashboard.scss';
.dashboard {
  width: 100%;
  overflow-x: hidden;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
.top-bars {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  color: #ffffff;
  font-size: 14px;
  display: flex;
  align-items: center;
  .btn {
    cursor: pointer;
    padding: 0 5px;
    &.ml {
      margin-left: 20px;
    }
  }
  .icon-imgs {
    margin: 0 10px;
  }
  .img1 {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
  .el-dropdown {
    color: #ffffff;
    margin-left: 20px;
    cursor: pointer;
    .icon-diqiu {
      margin-right: 15px;
    }
  }
}
.nav-tabs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 57px;
  .nav-tab {
    width: 100%;
    line-height: 74px;
    color: rgba($color: #ffffff, $alpha: 0.6);
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    position: relative;
    @for $i from 0 through 6 {
      &.actived-#{$i} {
        color: #ac2424;
        &::before {
          content: '';
          position: absolute;
          left: -12px;
          right: -12px;
          top: 0;
          bottom: 0;
          background: url('../assets/images/dashboard/nav#{$i+1}.png')
            no-repeat
            center
            left/contain
            #ffffff;
          z-index: -1;
        }
      }
    }
  }
}
.news-content {
  max-width: 1460px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
}
.grid-content {
  width: 52%;
  .title-content {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: #adadad;
    margin-bottom: 50px;
  }
  .grid-name {
    font-size: 26px;
    font-weight: bold;
    position: relative;
    color: #141414;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 36px;
      height: 4px;
      background: #c71c30;
    }
  }
  .pic-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 23px;
    .pic-grid {
      position: relative;
      overflow: hidden;
      .news-pic {
        width: 100%;
      }
      .pic-mark {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 7px 11px;
        background: linear-gradient(0deg, rgba(29, 47, 60, 1) 0%, rgba(29, 47, 60, 0.33) 100%);
        opacity: 0.9;
        font-size: 12px;
        line-height: 1.3;
        color: #ffffff;
      }
    }
  }
}
.grid-content.notice {
  width: 40%;
  display: flex;
  flex-direction: column;
}
.notice-grids {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.notice-grid {
  .date-content {
    width: 56px;
    text-align: center;
    float: left;
    margin-right: 50px;
    .notice-day {
      width: 100%;
      line-height: 36px;
      font-size: 32px;
      color: #c71c30;
      border: 1px solid #e0e0e0;
    }
    .notice-year {
      width: 100%;
      line-height: 19px;
      background: #546c7c;
      font-size: 12px;
      color: #ffffff;
    }
  }
  .notice-title {
    line-height: 30px;
    font-size: 14px;
    color: #141414;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .notice-content {
    line-height: 28px;
    font-size: 12px;
    color: #7e7e7e;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.banner-content {
  margin-top: 100px;
  position: relative;
  .banner-middle {
    width: 100%;
  }
  .banner-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 40px;
  }
}
.carousel-content {
  max-width: 1460px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  margin-top: 139px;
  position: relative;
  align-items: flex-end;
  .pic-s1 {
    width: 63%;
    margin-right: 45px;
  }
  &::before {
    content: '';
    position: absolute;
    height: 370px;
    background: #f4f4f4;
    top: -47px;
    left: 192px;
    right: -1000px;
    z-index: -1;
  }
  .el-carousel {
    flex: 1;
    .carousel-pic {
      width: 100%;
      object-fit: cover;
    }
  }
}
.pic-box {
  max-width: 1460px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 120px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: -1000px;
    right: 184px;
    top: -38px;
    height: 300px;
    background: #f4f4f4;
    z-index: -1;
  }
  .mini-pic {
    align-self: start;
    width: 24%;
    &:nth-child(2n) {
      margin-top: 100px;
    }
  }
}
.bottom-carousel {
  max-width: 1460px;
  padding: 0 30px;
  margin: 0 auto;
  margin-top: 84px;
  margin-bottom: 112px;
  .carousel-img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
