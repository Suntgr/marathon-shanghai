<template>
  <div class="ranking">
    <el-table :data="tableData" empty-text="暂无数据">
      <el-table-column :label="$t('user.tableEvent')" width="274px" fixed prop="event">
      </el-table-column>
      <el-table-column :label="$t('user.tableProject')" prop="project"></el-table-column>
      <el-table-column :label="$t('user.tableNumber')" prop="number"></el-table-column>
      <el-table-column :label="$t('user.tableScore')" prop="score">
        <template slot-scope="scope">
          <span style="color: #CA3C3C">{{ scope.row.score }}</span>
          <span class="btn" @click="open(scope.row.id)">{{ $t('user.details') }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('user.tableRanking')" prop="ranking"></el-table-column>
    </el-table>
    <el-dialog
      class="score-details"
      :title="$t('user.scoreDetails')"
      width="792px"
      :visible.sync="dialogTableVisible"
    >
      <el-row>
        <el-col :span="10">
          <p class="title">{{ $t('user.scoreTimeA') }}</p>
          <p class="time">03:23:47</p>
        </el-col>
        <el-col :span="14">
          <p class="title">{{ $t('user.socreTimeB') }}</p>
          <el-table :header-cell-style="headRowStyle" stripe :data="scoreData" empty-text="--">
            <el-table-column :label="$t('user.mileage')" width="274px" fixed prop="mileage">
            </el-table-column>
            <el-table-column :label="$t('user.consuming')" prop="consuming"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      headRowStyle: { background: '#FAFAFA', color: '#2C3E6E' },
      tableData: [
        // {
        //   event: '2019年上海国际半程马拉松赛',
        //   project: '男子半程马拉松',
        //   number: 'GB39230',
        //   score: '03:23:09',
        //   ranking: '88',
        //   id: 1
        // }
      ],
      scoreData: [
        { mileage: '5km', consuming: '03:23:47' },
        { mileage: '5km', consuming: '03:23:47' },
        { mileage: '5km', consuming: '03:23:47' },
        { mileage: '5km', consuming: '03:23:47' },
        { mileage: '5km', consuming: '03:23:47' }
      ],
      dialogTableVisible: false
    }
  },
  computed: {},
  created() {
    this.$apis.game.getScoreList({ page: 1, page_size: '100' }).then(({ data }) => {
      this.tableData = data.list.map(el => {
        return {
          event: el.activity_name || '2019年上海国际半程马拉松赛',
          project: el.entry_name || '男子半程马拉松',
          number: el.score_id || 'GB39230',
          score: el.score || '03:23:09',
          ranking: el.ranking || '88',
          id: el.score_id || 1
        }
      })
    })
  },
  mounted() {},
  methods: {
    open(id) {
      this.$apis.game.getScoreDetails({ score_id: id })
      this.dialogTableVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.ranking /deep/ {
  flex: 1;
  margin-left: 30px;
  overflow: hidden;
  background: #ffffff;
  border-radius: 3px;
  .el-table .cell {
    padding-left: 30px;
  }
  .btn {
    color: #4a90e2;
    margin-left: 10px;
    cursor: pointer;
  }
  .score-details {
    .title {
      font-size: 18px;
      line-height: 48px;
    }
    .time {
      line-height: 48px;
      color: #ca3c3c;
      font-size: 36px;
    }
    .el-dialog__header {
      border-bottom: 1px solid #edf0f5;
    }
    .el-icon-close {
      font-size: 26px;
    }
    .el-dialog__headerbtn {
      top: 26px;
    }
    .el-dialog__header {
      padding-top: 30px;
      padding-bottom: 18px;
    }
    .el-dialog__title {
      font-size: 24px;
      color: #4a4a4a;
    }
  }
}
</style>
