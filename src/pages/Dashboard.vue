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
    <div class="news">
      <el-row :gutter="35">
        <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <div class="xinwen">
              <div class="x1">
                <div class="x_text">
                  <div class="fl">新闻</div>
                  <div class="fr">了解更多</div>
                </div>
                <div class="x_img">
                  <el-row :gutter="20">
                    <el-col :span="12"
                      ><div class="grid-content ">
                        <img src="../assets/images/dashboard/x1.png" alt="" /></div
                    ></el-col>
                    <el-col :span="12"
                      ><div class="grid-content ">
                        <img src="../assets/images/dashboard/x2.png" alt="" /></div
                    ></el-col>
                  </el-row>
                </div>
                <div class="x_img">
                  <el-row :gutter="20">
                    <el-col :span="12"
                      ><div class="grid-content ">
                        <img src="../assets/images/dashboard/x3.png" alt="" /></div
                    ></el-col>
                    <el-col :span="12"
                      ><div class="grid-content ">
                        <img src="../assets/images/dashboard/x4.png" alt="" /></div
                    ></el-col>
                  </el-row>
                </div>
              </div>
            </div></div
        ></el-col>
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <div class="gonggao">
              <div class="x1">
                <div class="x_text">
                  <div class="fl">公告</div>
                  <div class="fr">了解更多</div>
                </div>
                <div class="x_content">
                  <ul>
                    <li v-for="item in textItem" :key="item.id">
                      <div>
                        <div class="x_date"></div>
                        <div>{{ item.text }}</div>
                        <div>{{ item.text1 }}</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div></el-col
        >
        <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
    <div class="chaoyue">
      <div>
        <img src="../assets/images/dashboard/chaoyue.png" alt="" />
      </div>

      <div class="c_text">
        超越一切可能
      </div>
    </div>
    <div class="run_img">
      <div class="bg"></div>
      <div class="run_lunbo">
        <el-row>
          <el-col :span="2"><div class="grid-content "></div></el-col>
          <el-col :span="20"
            ><div class="grid-content ">
              <el-row :gutter="25">
                <el-col :span="16"
                  ><div class="grid-content ">
                    <img src="../assets/images/dashboard/run_lunbo.png" alt="" /></div
                ></el-col>
                <el-col :span="8"
                  ><div>
                    <div class="grid-content imgcenter">
                      <img src="../assets/images/dashboard/run_lunbo_rihgt.png" alt="" />
                    </div></div
                ></el-col>
              </el-row></div
          ></el-col>
          <el-col :span="2"><div class="grid-content "></div></el-col>
        </el-row>
      </div>
    </div>
    <div class="four_img">
      <div class="bg"></div>
      <div class="run_img">
        <el-row>
          <el-col :span="2"><div class="grid-content "></div></el-col>
          <el-col :span="20"
            ><div class="grid-content ">
              <el-row :gutter="25">
                <el-col :span="6"
                  ><div class="grid-content img_div">
                    <img src="../assets/images/dashboard/f1.png" alt="" />
                    <a href="#">
                      <div class="mask">
                        <h3>上马训练营首次亮相</h3>
                        <h4>帮您实现一个马拉松梦想</h4>
                      </div>
                    </a>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div>
                    <div class="grid-content imgcenter img_div">
                      <img class="down" src="../assets/images/dashboard/f2.png" alt="" />
                      <a href="#">
                        <div class="mask">
                          <h3>上马训练营首次亮相</h3>
                          <h4>帮您实现一个马拉松梦想</h4>
                        </div>
                      </a>
                    </div>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div>
                    <div class="grid-content imgcenter img_div">
                      <img src="../assets/images/dashboard/f3.png" alt="" />
                      <a href="#">
                        <div class="mask">
                          <h3>上马训练营首次亮相</h3>
                          <h4>帮您实现一个马拉松梦想</h4>
                        </div>
                      </a>
                    </div>
                  </div></el-col
                >
                <el-col :span="6"
                  ><div>
                    <div class="grid-content imgcenter img_div">
                      <img class="down" src="../assets/images/dashboard/f3.png" alt="" />
                      <a href="#">
                        <div class="mask">
                          <h3>上马训练营首次亮相</h3>
                          <h4>帮您实现一个马拉松梦想</h4>
                        </div>
                      </a>
                    </div>
                  </div></el-col
                >
              </el-row>
            </div></el-col
          >
          <el-col :span="2"><div class="grid-content "></div></el-col>
        </el-row>
      </div>
    </div>
    <div class="three_img">
      <div class="">
        <el-row>
          <el-col :span="2"><div class="grid-content "></div></el-col>
          <el-col :span="20"
            ><div class="grid-content ">
              <el-row :gutter="30">
                <el-col :span="1"
                  ><div class="grid-content ">
                    <div class="left_arrow">
                      <
                    </div>
                  </div></el-col
                >
                <el-col :span="7"
                  ><div class="grid-content ">
                    <img src="../assets/images/dashboard/f1.png" alt="" /></div
                ></el-col>
                <el-col :span="7"
                  ><div>
                    <div class="grid-content imgcenter ">
                      <img class="down" src="../assets/images/dashboard/f2.png" alt="" />
                    </div></div
                ></el-col>

                <el-col :span="7"
                  ><div>
                    <div class="grid-content imgcenter ">
                      <img class="down" src="../assets/images/dashboard/f3.png" alt="" />
                    </div></div
                ></el-col>
                <el-col :span="1"
                  ><div class="grid-content ">
                    <div class="left_arrow">
                      >
                    </div>
                  </div></el-col
                >
              </el-row>
            </div></el-col
          >
          <el-col :span="2"><div class="grid-content "></div></el-col>
        </el-row>
      </div>
    </div>
    <div class="footer">
      <div class="f1">
        <p>上海国际马拉松赛、上马系列赛、上马俱乐部由上海东浩兰生赛事管理有限公司独家运营承办。</p>
        <p>咨询电话: 021-965365</p>
        <p>邮 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱: general@shmarathon.com</p>
        <div>
          @Copyright 2019 Organizing Committee of Shanghai Marathon 沪ICP备17043220号
        </div>
      </div>
      <div class="f2">
        二维码
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
        { id: 2, src: require('../assets/images/dashboard/banner_1.png') },
        { id: 3, src: require('../assets/images/dashboard/banner_1.png') }
      ],
      options: [
        {
          value: '选项1',
          label: '中文'
        }
      ],
      value: '',
      activeIndex: '1',
      textItem: [
        {
          id: '0',
          text: 'ttttttttttttttt',
          text1: '客服上帝爱爱爱0'
        },
        { id: '1', text: '我是你爸爸2', text1: '客服上帝爱爱爱1' },
        { id: '2', text: '我是你爸爸3', text1: '客服上帝爱爱爱2' },
        { id: '3', text: '我是你爸爸4', text1: '客服上帝爱爱爱3' },
        { id: '4', text: '我是你爸爸5', text1: '客服上帝爱爱爱4' },
        { id: '5', text: '我是你爸爸6', text1: '客服上帝爱爱爱5' },
        { id: '6', text: '我是你爸爸7', text1: '客服上帝爱爱爱6' },
        { id: '7', text: '我是你爸爸8', text1: '客服上帝爱爱爱7' },
        { id: '8', text: '我是你爷爷9', text1: '客服上帝爱爱爱8' }
      ]
    }
  },
  methods: {
    handleSelect() {},
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    textScroll() {
      setInterval(() => {
        this.textItem.push(this.textItem.shift())
      }, 2000)
    }
  },
  mounted() {
    this.textScroll()
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
