<template>
  <div class="login">
    <div class="form">
      <el-form :model="form"
               class="form-inline">
        <el-form-item>
          <el-input v-model="form.username"
                    placeholder="请输入您的账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password"
                    show-password
                    @keyup.enter.native="onSubmit()"
                    placeholder="请输入您的密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     style="width: 100%"
                     @click="onSubmit">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    onSubmit () {
      this.$http
        .post('/auth/login/', this.form)
        .then(res => {
          if (res.data.code === 0) {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('username', this.form.username)
            this.$notify({
              type: 'success',
              message: '欢迎你,' + this.form.username + '!',
              duration: 3000
            })
            this.$router.replace('/admin/dashboard')
          } else {
            this.$message({
              type: 'error',
              message: res.data.message,
              showClose: true
            })
          }
        })
        .catch(err => {
          this.$message({
            type: 'error',
            message: '通讯异常：' + err,
            showClose: true
          })
        })
    }
  }
}
</script>

<style scoped>
.login {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(images/login_bg.png) no-repeat;
  background-size: cover;
}
.form {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 200px;
  margin-top: -100px;
  margin-left: -150px;
}
</style>

