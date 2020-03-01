<template>
  <div class="nav-menu">
    <div v-for="(nav, index) in group" :key="index">
      <p class="title" :class="{ active: currnetTitle === nav.title }">{{ nav.title }}</p>
      <ul class="muens">
        <li
          class="menu"
          :class="{ active: currentMenu === menu }"
          v-for="(menu, idx) in nav.menus"
          :key="idx"
          @click="setActive(nav.title, menu)"
        >
          {{ menu }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currnetTitle: '我的比赛',
      currentMenu: '',
      group: []
    }
  },
  watch: {
    '$i18n.locale'() {
      this.setGroup()
      this.$emit('update', this.currentMenu)
    }
  },
  computed: {},
  created() {
    this.setGroup()
  },
  mounted() {},
  methods: {
    setActive(title, menu) {
      this.currnetTitle = title
      this.currentMenu = menu
      this.$emit('update', menu)
    },
    setGroup() {
      this.group = [
        {
          title: this.$t('user.game'),
          menus: [
            this.$t('user.apply'),
            this.$t('user.results'),
            this.$t('user.certificate'),
            this.$t('user.photo')
          ]
        },
        {
          title: this.$t('user.account'),
          menus: [this.$t('user.info'), this.$t('user.integral'), this.$t('user.safe')]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-menu {
  width: 264px;
  background: #ffffff;
  border-radius: 3px;
  padding: 0 17px 17px;
  font-size: 18px;
  overflow: hidden;
  color: #4a4a4a;
  .title {
    height: 55px;
    line-height: 55px;
    color: #2c3e6e;
    padding-left: 15px;
    margin-top: 17px;
    &.active {
      background: #f4f4f4;
      position: relative;
      &::before {
        content: '';
        width: 2px;
        height: 55px;
        background: #2c3e6e;
        position: absolute;
        left: -17px;
        top: 0;
      }
    }
  }
  .muens {
    list-style: none;
    margin-top: 13px;
    .menu {
      height: 50px;
      line-height: 50px;
      padding-left: 30px;
      cursor: pointer;
      &.active {
        color: #d7a746;
      }
    }
  }
}
</style>
