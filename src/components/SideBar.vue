<template>
  <div class="nav-menu">
    <div v-for="(nav, index) in group" :key="index">
      <p class="title" :class="{ active: currnetTitle === nav.title }" @click="goHome(nav)">
        {{ nav.title }}
      </p>
      <ul class="muens">
        <li
          class="menu"
          :class="{ active: currentMenu === menu.tabName }"
          v-for="(menu, idx) in nav.menus"
          :key="idx"
          @click="setActive(nav.title, menu)"
        >
          {{ menu.tabName }}
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
      currnetTitle: '',
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
    console.log(this.$route)
    this.setGroup()
  },
  mounted() {
    this.initActivedTab()
  },
  methods: {
    setActive(title, menu) {
      this.currnetTitle = title
      this.currentMenu = menu.tabName
      // this.$emit('update', menu)
      this.$router.push({ name: menu.linkName })
    },
    setGroup() {
      this.group = [
        {
          title: this.$t('header.myMarathon')
        },
        {
          title: this.$t('user.game'),
          menus: [
            { tabName: this.$t('user.apply'), linkName: 'userApply' },
            { tabName: this.$t('user.results'), linkName: 'results' },
            { tabName: this.$t('user.certificate'), linkName: 'certificate' },
            { tabName: this.$t('user.photo'), linkName: 'photo' }
          ]
        },
        {
          title: this.$t('user.account'),
          menus: [
            { tabName: this.$t('user.info'), linkName: 'info' },
            { tabName: this.$t('user.offspring'), linkName: 'info' },
            { tabName: this.$t('user.integral'), linkName: 'info' },
            { tabName: this.$t('user.safe'), linkName: 'info' }
          ]
        }
      ]
    },
    goHome(nav) {
      this.currnetTitle = nav.title
      if (nav.title === this.$t('header.myMarathon')) {
        this.currentMenu = ''
        this.$router.push({ name: 'owner' })
      } else {
        this.currentMenu = nav.menus[0].tabName
        this.$router.push({ name: nav.menus[0].linkName })
      }
    },
    initActivedTab() {
      if (this.$route.name === 'owner') {
        this.currnetTitle = this.$t('header.myMarathon')
        this.currentMenu = ''
      } else {
        this.group.some(el => {
          if (el.menus) {
            let res = el.menus.find(item => item.linkName === this.$route.name)
            if (res) {
              this.currnetTitle = el.title
              this.currentMenu = res.tabName
              return true
            }
          }
        })
      }
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
    cursor: pointer;
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
