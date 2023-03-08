<template>
  <div class="aside">
    <el-menu
      default-active="rgb(64,158,255)"
      class="el-menu-vertical-demo"
      background-color="rgb(48,65,86)"
      text-color="#fff"
      :collapse="isCollapse"
      router=""
    >
      <el-menu-item>
        <i class="el-icon-service"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/dashboard">
        <template slot="title">
          <i class="el-icon-share"></i>
          <span slot="title">处cp</span>
        </template>
        <el-menu-item index="/dashboard">送青菜</el-menu-item>
        <el-menu-item index="/dashboard/cai2">送毛豆</el-menu-item>
        <el-menu-item index="/dashboard/cai3">送大盆</el-menu-item>
        <el-menu-item index="/dashboard/cai4">都不要</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //控制侧边栏缩进
      isCollapse: false,
    };
  },
  created() {
    this.$bus.$on("indentation", () => {
      this.isCollapse = !this.isCollapse;
      this.icons();
    });
  },
  methods: {
    //控制缩进图标
    icons() {
      this.$bus.$emit("changing");
    },
  },
};
</script>

<style >
.cont,
.el-col-12,
.el-container,
.aside {
  width: 100%;
  height: 100%;
}
.cont .el-menu-vertical-demo {
  height: 100%;
}
.cont .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.aside .el-aside {
  overflow: hidden;
}
.aside .el-menu {
  border: none;
}
.asid .el-submenu {
  background-color: #263445 !important;
}
body {
  margin: 0;
}
</style>