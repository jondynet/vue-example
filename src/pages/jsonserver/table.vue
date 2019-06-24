<template>
  <div class="main-content">
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="id"
                       label="id"
                       width="180">
      </el-table-column>
      <el-table-column prop="title"
                       label="标题"
                       width="180">
      </el-table-column>
      <el-table-column prop="author"
                       label="作者">
      </el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="100">
        <template slot-scope="scope">
          <el-button @click="onRemove(scope.row)"
                     type="text"
                     size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    onRemove (obj) {
      this.$http.delete(`/jsonserver/posts/${obj.id}`)
        // eslint-disable-next-line
        .then(_ => this.getData())
    },
    getData () {
      this.$http.get('/jsonserver/posts')
        .then(res => {
          this.tableData = res.data
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
.main-content {
  margin: 20px;
}
</style>
