<!-- @format -->
<template>
  <div>
    <div class="banner">
      <el-carousel :interval="5000" arrow="hover" height="500px">
        <el-carousel-item v-for="item in bannerItem" :key="item.id">
          <img :src="item.src" alt="" />
        </el-carousel-item>
      </el-carousel>
      <div class="banner_text">
        <span>你好,请登录 !</span>
        <span>免费注册</span>
        <span>我的上马</span>
        <span>FAQ</span>
        <div class="select_style">
          <span>
            <el-select class="popper-class" small v-model="value" placeholder="Language">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </span>
        </div>
        <div class="header_icon">
          <img class="img1" src="../assets/images/inter/iphone.png" alt="" />
          <img class="img1" src="../assets/images/dashboard/weixin.png" alt="" />
          <img class="img1" src="../assets/images/dashboard/weibo.png" alt="" />
          <img class="img1 earth" src="../assets/images/dashboard/earth.png" alt="" />
        </div>
      </div>
      <div class="nav">
        <div class="text_logo">
          <img src="../assets/images/dashboard/redlogo.png" alt="" />
        </div>
        <div class="logo_line"></div>
        <div class="nav_button">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            background-color="#AC2424"
            text-color="#fff"
            active-text-color="#AC2424"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1" class="animat" @click="activeIndex = 1">
              <img v-show="activeIndex == 1" src="../assets/images/dashboard/nav1.png" alt="" />
              <span slot="title">上海国际马拉松赛</span>
            </el-menu-item>
            <el-menu-item index="2" class="animat" @click="activeIndex = 2">
              <img v-show="activeIndex == 2" src="../assets/images/dashboard/nav1.png" alt="" />
              <span slot="title">上海国际半程马拉松赛</span>
            </el-menu-item>
            <el-menu-item index="3" class="animat" @click="activeIndex = 3">
              <img v-show="activeIndex == 3" src="../assets/images/dashboard/nav1.png" alt="" />
              <span slot="title">上海国际10公里精英赛</span>
            </el-menu-item>
            <el-menu-item index="4" class="animat" @click="activeIndex = 4">
              <img v-show="activeIndex == 4" src="../assets/images/dashboard/nav1.png" alt="" />
              <span slot="title">上海国际系列赛</span>
            </el-menu-item>
            <el-menu-item index="5" class="animat" @click="activeIndex = 5">
              <img v-show="activeIndex == 5" src="../assets/images/dashboard/nav1.png" alt="" />
              <span slot="title">上马商城</span>
            </el-menu-item>
            <el-menu-item index="6" class="animat" @click="activeIndex = 6">
              <img v-show="activeIndex == 6" src="../assets/images/dashboard/nav1.png" alt="" />
              <span slot="title">上马志愿</span>
            </el-menu-item>
            <el-menu-item index="7" class="animat" @click="activeIndex = 7">
              <img v-show="activeIndex == 7" src="../assets/images/dashboard/nav1.png" alt="" />
              <span slot="title">上马志愿者</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerItem: [
        { id: 1, src: require('../assets/images/dashboard/banner_1.png') },
        { id: 1, src: require('../assets/images/dashboard/banner_1.png') },
        { id: 1, src: require('../assets/images/dashboard/banner_1.png') }
      ],
      options: [
        {
          value: '选项1',
          label: '中文'
        }
      ],
      value: '',
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect() {},
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/dashboard.scss';

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
</style>
