<template>
  <div style="margin-top: 30px;">
    <el-form label-position="right"
             label-width="80px"
             :model="form">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        title: '',
        author: '',
      }
    }
  },
  methods: {
    onSubmit () {
      this.$http.post('/jsonserver/posts', this.form)
        .then(res => {
          // eslint-disable-next-line
          console.log(res)
          this.$notify({
            type: 'success',
            message: '添加成功',
            duration: 3000
          })
          this.$router.push('/admin/jsonserver/table')
        })
    }
  }
}
</script>

