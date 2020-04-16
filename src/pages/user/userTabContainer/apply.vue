<template>
  <div class="apply">
    <el-table :data="gameList" empty-text="--">
      <el-table-column :label="$t('user.tableEvent')" width="274px" fixed prop="event">
      </el-table-column>
      <el-table-column :label="$t('user.tableProject')" prop="project"></el-table-column>
      <el-table-column :label="$t('user.tableResults')">
        <template slot-scope="scope">
          <span v-if="scope.row.results === '中签'" style="color: #38B279">{{
            scope.row.results
          }}</span>
          <span v-else style="color: #CA3C3C">{{ scope.row.results }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('user.tableStatus')">
        <template slot-scope="scope">
          <span :class="{ 'unpay-color': scope.row.status === '未支付' }">{{
            scope.row.status
          }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('user.tableNumber')" prop="number"></el-table-column>
      <el-table-column :label="$t('user.tableAction')" width="200" fixed="right" prop="action">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">{{
            $t('user.pay')
          }}</el-button>
          <el-button size="mini" class="blue-btn" @click="handleDetails(scope.row)">{{
            $t('user.details')
          }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          event: '2019年上海国际半程马拉松赛',
          project: '男子半程马拉松',
          results: '中签',
          status: '已支付',
          number: '--'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('game', ['gameList'])
  },
  created() {},
  mounted() {},
  methods: {
    handleDetails(row) {
      this.$router.push({ name: 'details', params: { sId: row.id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.apply /deep/ {
  flex: 1;
  margin-left: 30px;
  overflow: hidden;
  background: #ffffff;
  border-radius: 3px;
  .el-table .cell {
    padding-left: 30px;
  }
  .el-button {
    width: 68px;
    min-width: 68px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    padding: 0;
    text-align: center;
  }
  .unpay-color {
    color: #e3832d;
  }
}
</style>
