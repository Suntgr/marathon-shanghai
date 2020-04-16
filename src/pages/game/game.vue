<template>
  <div class="game">
    <t-header></t-header>
    <t-nav @update="update"></t-nav>
    <t-countdown></t-countdown>
    <div class="main">
      <ul class="tabs">
        <li
          class="tab"
          :class="{ actived: currentTabId === tab.id }"
          v-for="tab in tabs"
          :key="tab.id"
          @click="update(tab.id)"
        >
          {{ tab.name }}
        </li>
      </ul>
      <div class="main-content">
        <div class="editor-content" v-loading="loading" v-html="currentContent"></div>
        <img src="../../assets/images/inter/shangbiao.png" alt="" />
      </div>
    </div>
    <t-footer></t-footer>
  </div>
</template>

<script>
import THeader from '@/components/header.vue'
import TFooter from '@/components/footer.vue'
import TNav from '@/components/nav.vue'
import TCountdown from '@/components/countdown.vue'
import { mapState, mapActions } from 'vuex'
export default {
  components: { THeader, TFooter, TNav, TCountdown },
  data() {
    return {
      loading: false,
      lang: localStorage.getItem('lang'),
      currentTabId: '',
      // tabs: ['竞赛规程', '报名须知', '风险提示', '保险信息'],
      tabs: [
        { id: 1, name: '竞赛规程' },
        { id: 2, name: '报名须知' },
        { id: 3, name: '参赛声明' },
        { id: 4, name: '领物须知' },
        { id: 5, name: '赛事路线图' },
        { id: 6, name: '起点示意图' },
        { id: 7, name: '终点示意图' },
        { id: 8, name: '赛事照片' },
        { id: 9, name: '赛事排行榜' }
      ],
      content: {}
    }
  },
  computed: {
    ...mapState('game', ['photo']),
    activityId() {
      return this.$route.params.actId
    },
    currentContent() {
      let index = this.currentTabId
      return this.content[index]
    }
  },
  created() {
    this.currentTabId = sessionStorage.getItem('tabId') || 1
    this.currentTabId = Number(this.currentTabId)
    this.fetchDate()
  },
  mounted() {},
  methods: {
    ...mapActions('game', ['getPhoto']),
    getRules(type) {
      this.currentTabId = type
      sessionStorage.setItem('tabId', this.currentTabId)
      if (this.content[type]) return
      this.loading = true
      this.$apis.game
        .getRule({
          activity_id: this.activityId,
          type: this.currentTabId,
          lang: this.lang
        })
        .then(({ data }) => {
          this.$set(this.content, type, data.info.content)
        })
        .finally(() => {
          this.loading = false
        })
    },
    fetchDate() {
      if (this.currentTabId < 8) {
        this.getRules(this.currentTabId)
      } else if (this.currentTabId === 8) {
        this.getPhoto()
      }
    },
    update(id) {
      this.currentTabId = id
      this.fetchDate()
    }
  }
}
</script>

<style lang="scss" scoped>
.game /deep/ {
  .main {
    min-height: 300px;
    max-width: 1460px;
    padding: 50px 30px;
    margin: 0 auto;
    display: flex;
    .tabs {
      padding-left: 15px;
      .tab {
        width: 229px;
        padding-left: 15px;
        font-size: 18px;
        line-height: 55px;
        cursor: pointer;
        &:hover {
          color: #cfa957;
        }
        &.actived {
          background: #f4f4f4;
          color: #2c3e6e;
          position: relative;

          &::before {
            content: '';
            position: absolute;
            left: -15px;
            top: 0;
            width: 2px;
            height: 55px;
            background: #2c3e6e;
          }
        }
      }
    }
    .main-content {
      flex: 1;
      margin-left: 60px;
      line-height: 1.7;
      .editor-content {
        min-height: calc(100vh - 382px);
        margin-bottom: 50px;
      }
      img {
        width: 100%;
      }
      table {
        display: table;
        border-collapse: collapse;
        border-spacing: 2px;
        border-color: grey;
        td,
        th {
          empty-cells: show;
          border: 1px solid #e0e0e0;
        }
      }
    }
  }
}
</style>
