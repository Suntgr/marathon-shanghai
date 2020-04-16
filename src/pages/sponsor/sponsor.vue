<template>
  <div class="sponsor">
    <t-header></t-header>
    <t-nav></t-nav>
    <t-countdown></t-countdown>
    <div class="main">
      <img class="sponsor-bg" src="../../assets/images/inter/shangbiao.png" alt="" />
    </div>
    <t-footer></t-footer>
  </div>
</template>

<script>
import THeader from '@/components/header.vue'
import TFooter from '@/components/footer.vue'
import TNav from '@/components/nav.vue'
import TCountdown from '@/components/countdown.vue'
export default {
  components: { THeader, TFooter, TNav, TCountdown },
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
.sponsor {
  .main {
    min-height: 300px;
    max-width: 1460px;
    padding: 50px 30px;
    margin: 0 auto;
  }
  .sponsor-bg {
    width: 100%;
  }
}
</style>
