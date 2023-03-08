<template>
  <div class="cont">
    <el-container>
      <el-aside width="auto"><AsideP /></el-aside>
      <el-container>
        <el-header><HeaderP /></el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderP from "./header";
import AsideP from "./aside";
import MainP from "./main";
export default {
  components: {
    HeaderP,
    AsideP,
    MainP,
  },
};
</script>


<style >
html,
body,
.cont {
  width: 100%;
  height: 100%;
}
.cont .el-header {
  padding: 0;
}
</style>