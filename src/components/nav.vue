<template>
  <div class="nav-box">
    <div class="inner-box">
      <img class="sm-logo" src="@/assets/images/sm-logo.png" />
      <ul class="nav">
        <li
          v-for="(menu, index) in menus"
          :key="index"
          class="menu"
          :class="{ active: activeMenu.name === menu.name }"
          @mouseover="openMenu(menu)"
          @mouseleave="waitClose"
        >
          {{ menu.name }}
        </li>
      </ul>
    </div>
    <div v-show="showPopup" @mouseover="openMenu(activeMenu)" @mouseleave="closeMenu" class="popup">
      <div class="inner-popup">
        <div class="name">
          2019上海国际马拉松赛<span class="bread">{{ activeMenu.name }}</span>
        </div>
        <nav class="right-part">
          <ul class="tabs">
            <li
              class="tab"
              v-for="(tab, index) in tabs"
              :key="index"
              :class="{ active: activeName === tab.name }"
              @mouseover="openMiniTab(tab)"
              @mouseleave="closeMiniTab(tab)"
            >
              <span class="inner-tab">{{ tab.name }}</span>
              <i class="iconfont" :class="!!tab.children ? 'icon-ziyuan' : 'icon-changjiantou'"></i>
              <ul class="mini-tabs" v-if="showMiniTabs">
                <li class="mini-tab" v-for="(item, idx) in tab.children" :key="idx">
                  {{ item.name }}
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      showPopup: false,
      menus: [
        { name: '首页' },
        {
          name: '我要报名',
          children: [
            { name: '竞赛规则' },
            { name: '立即报名' },
            { name: '报名须知' },
            { name: '报名查询' },
            { name: '上马训练营' }
          ]
        },
        {
          name: '赛事信息',
          children: [
            { name: '赛事新闻' },
            { name: '赛事照片' },
            { name: '赛事公告' },
            { name: '赛事排行榜' },
            {
              name: '赛事周',
              children: [
                { name: '装备领取' },
                { name: '赛事路线图' },
                { name: '赛事起点' },
                { name: '赛事终点' }
              ]
            }
          ]
        },
        { name: '志愿者' },
        { name: '上马商城' },
        { name: '赞助商' }
      ],
      tabs: [],
      showMiniTabs: false,
      timer: null,
      activeName: '',
      activeMenu: '',
      timer1: null
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    openMenu(menu) {
      if (menu.children) {
        this.tabs = menu.children
        this.showPopup = true
      } else {
        this.showPopup = false
      }
      this.activeMenu = menu
      clearTimeout(this.timer)
    },
    waitClose() {
      this.timer = setTimeout(() => {
        this.showPopup = false
        this.activeMenu = ''
      }, 300)
    },
    closeMenu() {
      this.showPopup = false
      this.activeMenu = ''
    },
    openMiniTab(tab) {
      this.activeName = tab.name
      if (tab.children) {
        this.showMiniTabs = true
        clearTimeout(this.timer1)
      } else {
        this.showMiniTabs = false
      }
    },
    closeMiniTab(tab) {
      if (tab.children) {
        this.timer1 = setTimeout(() => {
          this.showMiniTabs = false
          this.activeName = ''
        }, 300)
      } else {
        this.showMiniTabs = false
        this.activeName = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-box {
  width: 100%;
  padding: 0 30px;
  z-index: 11;
  position: relative;
  .inner-box {
    max-width: 1400px;
    height: 113px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    .sm-logo {
      width: 515px;
      margin-left: -63px;
    }
  }
  .nav {
    width: 720px;
    display: flex;
    justify-content: space-between;
    .menu {
      cursor: pointer;
      padding: 10px 0;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      &.active {
        color: #e2bd6f;
        border-bottom: 3px solid;
      }
    }
  }
  .popup {
    position: absolute;
    top: 113px;
    left: 0;
    width: 100%;
    padding: 0 30px;
    height: 242px;
    background: linear-gradient(90deg, rgba(12, 36, 82, 1) 0%, rgba(51, 82, 138, 1) 100%);
    opacity: 0.8;
    .inner-popup {
      max-width: 1400px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    .name {
      font-size: 22px;
      color: #ffffff;
      margin-top: 30px;
    }
    .right-part {
      width: 720px;
    }
    .bread {
      font-size: 16px;
      margin-left: 15px;
    }
    .tabs {
      color: #ffffff;
      width: 524px;
      display: flex;
      flex-wrap: wrap;
      .tab {
        width: 200px;
        margin: 10px 62px 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        position: relative;
        cursor: pointer;
        &:last-child {
          margin-left: auto;
        }
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: #ffffff;
          opacity: 0.2;
        }
        &.active {
          color: #e2bd6f;
          &::after {
            opacity: 1;
          }
        }
      }
      .icon-changjiantou {
        color: inherit;
      }
      .inner-tab {
        padding: 14px 0;
        border-bottom: 1px solid #fff;
      }
    }
    .mini-tabs {
      position: absolute;
      left: 262px;
      display: flex;
      flex-direction: column;
      width: 100px;
      bottom: 0;
      list-style: initial;
      color: #ffffff;
      .mini-tab {
        margin-top: 15px;
        &:hover {
          color: #e2bd6f;
        }
      }
    }
  }
}
</style>
