<template>
  <div class="game">
    <t-header></t-header>
    <t-nav></t-nav>
    <div class="main">
      <div class="banner">
        <div>距<span>2019</span>上海国际马拉松开赛</div>
      </div>
    </div>
    <t-footer></t-footer>
  </div>
</template>

<script>
import THeader from '@/components/header.vue'
import TFooter from '@/components/footer.vue'
import TNav from '@/components/nav.vue'
export default {
  components: { THeader, TFooter, TNav },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.game {
}
</style>
