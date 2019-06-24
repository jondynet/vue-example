<template>
  <div class="logout">
    <h2>已退出登陆</h2>
    <p>{{ time }} 秒后自动返回首页</p>
    <div>
      <router-link to="/">
        <el-button>返回首页</el-button>
      </router-link>
    </div>
    <p>感谢您的访问!</p>
  </div>
</template>

<style scoped>
.logout {
  width: 400px;
  height: 300px;
  position: absolute;
  top: 50%;
  margin-top: -150px;
  left: 50%;
  margin-left: -200px;
  text-align: center;
}
</style>

<script>
export default {
  data () {
    return {
      time: 3,
      timer: null
    }
  },
  created () {
    this.timer = window.setInterval(function () {
      this.time = this.time - 1;
      if (this.time <= 0) {
        window.clearInterval(this.timer)
        this.$router.push({ path: '/login' })
      }
    }.bind(this), 1000)
  },
  beforeDestroy () {
    if (this.timer) { //如果定时器还在运行 或者直接关闭，不用判断
      window.clearInterval(this.timer); //关闭
    }
  },
  mounted () {
    localStorage.clear();
  }
}
</script>
