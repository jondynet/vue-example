<template>
  <div class="main-content">
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="date"
                       label="日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import tableData from '@/data/dashboard_tabledata'
export default {
  data () {
    return {
      tableData: tableData
    }
  },
  // mounted () {
  //   this.$http.get('/dashboard/tabledata')
  //     .then(res => {
  //       this.tableData = res.data
  //     })
  // }
}
</script>

<style scoped>
.main-content {
  margin: 20px;
}
</style>
