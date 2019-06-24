<template>
  <div>
    <div class="aside">
      <el-menu default-active="2"
               class="el-menu-vertical-demo"
               router
               background-color="#234"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-menu-item index="/admin/dashboard">
          <i class="el-icon-setting"></i>
          <span slot="title">列表</span>
        </el-menu-item>
        <el-submenu index="/admin/form">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>jsonserver</span>
          </template>
          <el-menu-item index="/admin/jsonserver/table">列表</el-menu-item>
          <el-menu-item index="/admin/jsonserver/add">表单</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="main">
      <transition name="el-fade-in-linear">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.aside {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 200px;
  background-color: #234;
  color: white;
}
.main {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 200px;
  right: 0;
}
</style>
