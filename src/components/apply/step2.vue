<template>
  <div class="apply-step">
    <div class="title">2.请选择赛事项目</div>
    <div class="apply-content">
      <div
        v-for="item in list"
        :key="item.type"
        class="grid"
        :class="{ active: active === item.type }"
        @click="selectCard(item.type)"
      >
        <p class="card-title">{{ item.title }}</p>
        <span class="sub">2019上海国际{{ item.title }}</span>
        <div class="level">10KM</div>
        <i v-show="active === item.type" class="el-icon-success"></i>
        <ul class="card">
          <li class="item">
            <span>报名费用</span>
            <span class="sub strong">{{ item.price }}</span>
          </li>
          <li class="item">
            <span>报名时间</span>
            <span class="sub">2019年10月21日10:00-10月28日17:00</span>
          </li>
          <li class="item">
            <span>年龄要求</span>
            <span class="sub">16岁以上(2003年12月31日以前出生)</span>
          </li>
        </ul>
      </div>
      <div v-for="i in 4" :key="i.id" class="grid"></div>
    </div>
    <el-button type="warning" @click="submit">已选项目，下一步</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: false,
      list: [],
      activityId: 2
    }
  },
  computed: {},
  created() {
    this.$apis.game.getActivity({ activity_id: this.activityId }).then(({ data }) => {
      console.log(data)
      this.list = data.items.map(e => {
        return {
          title: e.entry_name,
          type: e.entry_type,
          price: e.entry_price + '/人'
        }
      })
    })
  },
  mounted() {},
  methods: {
    selectCard(index) {
      this.active = index
      console.log(this.$store)
    },
    submit() {
      this.$apis.game
        .applyValidate({
          activity_id: this.activityId,
          entry_type: this.active
          // parent_child_id
        })
        .then(() => {
          this.$store.commit('game/SET_ENTRYTYPE', this.active)
          this.$emit('next')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.apply-step {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    margin-top: 10px;
    font-size: 18px;
    border-left: 2px solid;
    color: #2c3e6e;
    line-height: 25px;
    padding-left: 11px;
    align-self: flex-start;
  }
  .el-button {
    display: block;
    width: 400px;
    margin: 30px auto;
  }
  .apply-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
    width: calc(100% + 60px);
  }
  .grid {
    flex: 1;
    color: #808080;
    padding: 28px;
    box-shadow: 5px 10px 10px 3px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    background: #ffffff;
    position: relative;
    border: 2px solid transparent;
    min-width: 300px;
    margin: 30px;
    cursor: pointer;
    // &:not(:last-child) {
    //   margin-right: 30px;
    // }
    &:empty {
      height: 0;
      padding-top: 0;
      border: none;
      padding-bottom: 0;
      box-shadow: none;
      margin-top: 0;
      margin-bottom: 0;
    }
    &.active {
      border: 2px solid #d7a746;
      .el-icon-success {
        color: #d7a746;
      }
    }
  }
  .level {
    width: 85px;
    line-height: 28px;
    text-align: center;
    background: #d7ddeb;
    border-radius: 14px;
    color: #2c3e6e;
    font-size: 14px;
    position: absolute;
    right: 30px;
    top: 40px;
  }
  .el-icon-success {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .card {
    list-style: initial;
    padding-left: 18px;
  }
  .card-title {
    font-size: 20px;
    color: #4a4a4a;
  }
  .item {
    font-size: 14px;
    margin-top: 30px;
  }
  .sub {
    display: block;
    margin-top: 10px;
    &.strong {
      color: #ca3c3c;
      font-size: 18px;
    }
  }
}
</style>
