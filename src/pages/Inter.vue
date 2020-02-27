<!-- @format -->
/* eslint-disable vue/valid-template-root */ /* eslint-disable vue/valid-template-root */ /*
eslint-disable vue/no-parsing-error */ /* eslint-disable */
<!-- @format -->
<template>
  <div>
    <div class="header">
      <el-row>
        <el-col :span="2"><div class="grid-content "></div></el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple ban_heart">
            <el-row>
              <el-col :span="6"
                ><div class="grid-content bg-purple-light">
                  <span>欢迎访问上海马拉松官网</span>
                  <span>中文|简体</span>
                </div></el-col
              >
              <el-col :span="11"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="7"
                ><div class="grid-content bg-purple-light">
                  <span><a href="">登录</a> | <a href="">注册</a></span>
                  <span class="select_style">
                    <el-select class="popper-class" small v-model="value" placeholder="我的上马">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </span>
                  <span>FAQ</span>
                  <div class="header_icon">
                    <img src="../assets/images/inter/iphone.png" alt="" />
                    <img src="../assets/images/inter/weixin.png" alt="" />
                    <img src="../assets/images/inter/weibo.png" alt="" />
                  </div></div
              ></el-col>
            </el-row></div
        ></el-col>
        <el-col :span="2"><div class="grid-content"></div></el-col>
      </el-row>
    </div>

    <div class="nav">
      <el-row>
        <el-col :span="2"><div class="grid-content "></div></el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple ban_heart">
            <el-row>
              <el-col :span="12"
                ><div class="grid-content bg-purple">
                  <div class="logo_box">
                    <img src="../assets/images/inter/logo.png" alt="" />
                  </div></div
              ></el-col>
              <el-col :span="12"
                ><div class="grid-content bg-purple-light" style="min-width:530px;">
                  <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    active-text-color="#ffd04b"
                  >
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">我要报名</el-menu-item>
                    <el-menu-item index="3">赛事信息</el-menu-item>
                    <el-menu-item index="4">志愿者</el-menu-item>
                    <el-menu-item index="5">上马商场</el-menu-item>
                    <el-menu-item index="6">赞助商</el-menu-item>
                  </el-menu>
                </div></el-col
              >
            </el-row>
          </div></el-col
        >
        <el-col :span="2"><div class="grid-content"></div></el-col>
      </el-row>
    </div>
    <div class="banner">
      <img src="../assets/images/inter/banner.png" alt="" />
    </div>
    <div class="entry ">
      <div class="entry_1">
        <div class="up">
          <div>
            距<span>2019</span>上海国际马拉松赛开赛
          </div>
          <div>
            <p><span>1</span> 天 <span>2</span> 时 <span>3 </span> 分 <span>4</span> 秒</p>
          </div>
          <div class="rightNow"><a href="">立即报名</a></div>
        </div>

        <div class="down">
          <div>
            <p>欢迎参与</p>
            <span>WELCOME TO JOIN</span>
          </div>

          <div class="rightNow "><a href="">报名查询 —></a></div>
        </div>
      </div>
      <div class="entry_2">
        <div class="left">
          <div>
            <div class="raceG">
              <span>赛事规程</span>
              <p>TOURNAMENT RULES</p>
            </div>
          </div>
        </div>
        <div class="right">
          <div>
            <div class="raceG">
              <span>报名须知</span>
              <p>REGISTRATION NOTICE</p>
            </div>
          </div>
        </div>
      </div>
      <div class="entry_3">
        <div class="left">
          <div>
            <div class="raceG">
              <span>赛事地图</span>
              <p>TOURNAMENT MAPS</p>
            </div>
          </div>
        </div>
        <div class="right">
          <div>
            <div class="raceG">
              <span>领物须知</span>
              <p>RECEIVING GOODS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="newspaper ">
      <div class="news_left">
        <div>
          <p>上海国际马拉松</p>
          上海国际马拉松赛、上马系列赛、上马俱乐部由上海东浩兰生赛事管理有限公司独家运营承办。东浩兰生赛事公司以承办路跑赛事为核心业务，通过品牌化运作，突破单纯的赛事组织，提升赛事的综合效应：以引领市民健康向上的生活方式，提高赛事普及力，以打造时尚潮流的路跑文化，提高赛事影响力，以形成创新活力的产业链，提高赛事带动力。
        </div>
      </div>

      <div class="news_right">
        <img src="../assets/images/inter/text_img.png" alt="" />
      </div>
    </div>
    <div class="picture typeArea">
      <div class="p1"><img src="../assets/images/inter/p1.png" alt="" /></div>
      <div class="p1"><img src="../assets/images/inter/p2.png" alt="" /></div>
    </div>
    <div class="friend">
      <div class="f1">
        <div>
          <p>友好城市马拉松赛</p>
          INTERNATIONAL MARATHON
        </div>
        <div></div>
      </div>
      <div class="f2">
        <div>
          <img src="../assets/images/inter/f2_1.png" alt="" />
        </div>
        <div><img src="../assets/images/inter/f2_2.png" alt="" /></div>
        <div><img src="../assets/images/inter/f2_3.png" alt="" /></div>
        <div class="f2_4"><img src="../assets/images/inter/f2_4.png" alt="" /></div>
      </div>
      <div class="f3">
        <div class="f3_1"></div>
        <div class="f3_2"></div>
      </div>
      <div class="f4">
        <div></div>
        <div class="f4_2"></div>
      </div>
    </div>
    <div class="trace ">
      <div>
        <div class="t t1"><img src="../assets/images/inter/t1.png" alt="" /></div>
        <div class="t2 t">
          <img src="../assets/images/inter/t2.png" alt="" />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上马训练营 <br />
            TRAINING CAMP
          </p>
        </div>
        <div class="t t3"><img src="../assets/images/inter/t3.png" alt="" /></div>
        <div class="t t4"><img src="../assets/images/inter/t4.png" alt="" /></div>
      </div>
      <div class="t5"></div>
    </div>
    <div class="shangbiao">
      <img src="../assets/images/inter/shangbiao.png" alt="" />
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
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      value: '',
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect() {}
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/inter.scss';
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
::v-deep .el-col {
  border-radius: 0px;
}
.bg-purple-dark {
  background: #fff;
}
.bg-purple {
  background: #fff;
}
.bg-purple-light {
  background: #fff;
}
.grid-content {
  border-radius: 4px;
  min-height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #606060;
  span {
    a {
      color: #000;
    }
  }
  span:nth-child(2) {
    font-size: 14px;
    margin-left: 10px;
  }
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

::v-deep .el-input__inner {
  border: none;
  color: #000;
}
.select_style {
  width: 60px;
}
::v-deep .popper-class {
  width: 100px;
  color: #000;
}
.header_icon {
  float: right;
  height: 40px;
  line-height: 40px;
  padding-top: 4px;
  img {
    margin-right: 3px;
  }
}
::v-deep .el-input__inner::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #000;
  /* placeholder字体大小  */
  font-size: 12px;
}
</style>
